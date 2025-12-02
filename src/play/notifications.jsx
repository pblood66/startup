import React from 'react';

import { gameEvents, GameNotifier } from './gameNotifier';

export function SocketNotifications() {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {

    GameNotifier.addHandler(handleGameEvent);

    return () => {
      GameNotifier.removeHandler(handleGameEvent);
    }

  });

  function handleGameEvent(event) {
    setEvents([...events, event]);
  }

  function createMessageArray() {
    return events.map((evt, i) => {
      let message = 'unknown';
      if (evt.type === gameEvents.End) {
        message = `scored ${evt.value.score}`;
      } else if (evt.type === gameEvents.Start) {
        message = `started a new game`;
      } else if (evt.type === gameEvents.System) {
        message = evt.value.msg;
      }

      return (
        <div key={i} className="event">
          <span className="player-event">{evt.from.split('@')[0]}</span> {message}
        </div>
      );
    });
  }

  return (
    <div className="notifications">
      <div id="player-messages">{createMessageArray()}</div>
    </div>
  );
}