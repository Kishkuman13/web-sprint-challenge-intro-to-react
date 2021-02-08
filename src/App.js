import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  const [character, setCharacter] = useState([])

  useEffect(() => {
    axios.get(`http://swapi.dev/api/people`)
      .then(res => {
        setCharacter(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
    <h1 className="Header">Characters</h1>
      <div className='container'>
        {
          character.map((char, index) => {
            return (
              <Character 
                key={index} 
                id={char.name} 
                info={char} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
