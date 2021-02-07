import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character'
import CharacterDetails from './components/CharacterDetails'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  const [character, setCharacter] = useState([])
  const [currentCharacter, setCurrentCharacter] = useState(0)

  const viewCharacter = id => {
    console.log(id.currentTarget)
    var cache = []
    const newChar = id.currentTarget
    const newCharDet = JSON.stringify(newChar, (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (cache.includes(value)) return
        cache.push(value)
      }
      return value
    })
    cache = null
    setCurrentCharacter(newCharDet)
    console.log((newCharDet))
    // return newChar.replace(/\D/g,'')
    // console.log(newChar)
    // newChar = newChar.replace(/[^0-9]/g, '')
    // console.log(newChar)
  }

  const closeCharacter = () => {
    setCurrentCharacter(0)
  }

  useEffect(() => {
    axios.get(`http://swapi.dev/api/people`)
      .then(res => {
        console.log(res.data.results)
        setCharacter(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
        <div className='container'>
          <div className='left'>
            <h1 className="Header">Characters</h1>
      {
        character.map((char, index) => {
          return (
              <Character key={index+10} id={index+10} info={char} action={viewCharacter} active={currentCharacter} close={closeCharacter} />
          )
        })
      }
      </div>
      <div className='right'>
      <h1 className="Header">Character Details</h1>
      {
        character.map((char, index) => {
          return (
      <CharacterDetails key={index} id={index} info={char} action={viewCharacter} active={currentCharacter} close={closeCharacter} />
          )
        })
      }
      </div>
      </div>
    </div>
  );
}

export default App;
