import './App.css';
import { useState } from 'react';

function App() {
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "mario's birthday", id: 1},
    {title: "luigis's birthday", id: 2},
    {title: "bowser's birthday", id: 3}
  ])

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    //Deletes event, but we are using the current events, so we must prevState
    //If your state update doesnt rely on the previous state, theres no need for this
    console.log(id);
  }
  return (
    <div className="App">
      {showEvents && (
        <div>
        <button onClick={() => {setShowEvents(false)}}>Hide Events</button>
      </div>
      )}
      {!showEvents && (
        <div>
        <button onClick={() => {setShowEvents(true)}}>Show Events</button>
      </div>
      )}
      {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete Event</button>
        </div>
      ))}
    </div>
  );
}

export default App;
