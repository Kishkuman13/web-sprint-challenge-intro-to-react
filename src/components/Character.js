// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledCharacter = styled.div`
    font-family:monospace;
    font-size:1.2em;
    width: 25%;
    margin: 1% auto;
    background-color: rgba(240,240,240,.5);
    padding:1% 2%;
    border-radius: 5px;
    color:rgb(190,55,60);

    h3 {
        color:rgb(190,55,60);
    }

    p {
        margin:2px;
    }
`

const Character = (props) => {
    const { info } = props
    return (
        <StyledCharacter >
            <h3>{info.name}</h3>
            <div>
                <p>Birth Year: {info.birth_year}</p>
                <p>Eye Color: {info.eye_color}</p>
                <p>Hair Color: {info.hair_color}</p>
                <p>Skin Color: {info.skin_color}</p>
                <p>Gender: {info.gender}</p>
                <p>Height: {info.height}</p>
                <p>Mass: {info.mass}</p>
            </div>
        </StyledCharacter >
    )
}

export default Character