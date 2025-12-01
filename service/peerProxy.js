const { WebSocketServer } = require("ws");

function peerProxy(httpServer) {
    const webSocketServer = new WebSocketServer({ server: httpServer });
    
    webSocketServer.on('connection', (webSocket) => { 
        webSocket.isAlive = true; 

        webSocket.on('pong', () => {
            webSocket.isAlive = true;
        });
    });
}


module.exports = { peerProxy }