import React from 'react';

const gameEvents = {
  End: 'gameEnd',
  Start: 'gameStart',
};

class EventMessage {
  constructor(from, type, value) {
    this.from = from;
    this.type = type;
    this.value = value;
  }
}

class GameEventNotifier {
  events = [];
  handlers = [];

  constructor() {
    setInterval(() => {
      const score = Math.floor(Math.random() * 100);
      const userName = 'Bobby';
      this.broadcastEvent(userName, gameEvents.End, {
        name: userName,
        score: score,
      });
    }, 5000);
  }

  broadcastEvent(from, type, value) {
    const evt = new EventMessage(from, type, value);
    this.receiveEvent(evt);
  }

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers = this.handlers.filter((h) => h !== handler);
  }

  receiveEvent(evt) {
    this.events.push(evt);
    this.handlers.forEach((handler) => handler(evt));
  }
}

const GameNotifier = new GameEventNotifier();
export { gameEvents, GameNotifier };