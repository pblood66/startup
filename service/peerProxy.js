const { WebSocketServer } = require("ws");

function peerProxy(httpServer) {
    const webSocketServer = new WebSocketServer({ server: httpServer });
    
    webSocketServer.on('connection', (webSocket) => { 
        webSocket.isAlive = true; 

        webSocket.on('message', function message(msg) {
            webSocketServer.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(msg);
                }
            });
        });

        webSocket.on('pong', () => {
            webSocket.isAlive = true;
        });
    });

    setInterval(() => {
        webSocketServer.clients.forEach(function each(client) {
            if (client.isAlive === false) {
                return client.terminate();
            }

            client.isAlive = false;
            client.ping();
        });

    }, 10000)
}

module.exports = { peerProxy }