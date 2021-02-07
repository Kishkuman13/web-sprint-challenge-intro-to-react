import React from 'react'
import styled from 'styled-components'

const StyledCharacter = styled.div`
    color:blue;
    display:in-line-block;
`

const CharacterDetails = (props) => {
    const { info, active, id } = props
    return (
        <StyledCharacter className={id}>
            {active === id ? <p>Birth Year: {info.birth_year}</p> : <></>}
            {active === id ? <p>Eye Color: {info.eye_color}</p> : <></>}
            {active === id ? <p>Hair Color: {info.hair_color}</p> : <></>}
            {active === id ? <p>Skin Color: {info.skin_color}</p> : <></>}
            {active === id ? <p>Gender: {info.gender}</p> : <></>}
            {active === id ? <p>Height: {info.height}</p> : <></>}
            {active === id ? <p>Mass: {info.mass}</p> : <></>}
        </StyledCharacter>
    )
}

export default CharacterDetails