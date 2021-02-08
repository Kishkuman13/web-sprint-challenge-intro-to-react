import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character'

const App = () => {

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
