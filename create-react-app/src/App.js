import './App.css'
import React, { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'

function App() {
  const [showModal, setShowModal] = useState(true);
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ])
  console.log(showModal)

  const handleClick = (id) => {
    setEvents(prevEvents => {
      return prevEvents.filter(event => id !== event.id)
    })
  }
  const subtitle = "All the latest events in Marioland"
  const handleClose = () => {
    setShowModal(false);
  }
  const handleOpen = () => {
    setShowModal(true);
  }

  return (
    <div className="App">
            <button onClick={handleOpen}>Open Modal</button>        <br/>

      <Title title="Marioland Events" subtitle={subtitle} />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}
      {showEvents && <EventList events={events} handleClick={handleClick}/>}
        {showModal && <Modal handleClose={handleClose} isSalesModal={true}>
          <h2>Modal</h2>
          <p>Reusable Component</p>
        </Modal>}

    </div>
  );
}

export default App;