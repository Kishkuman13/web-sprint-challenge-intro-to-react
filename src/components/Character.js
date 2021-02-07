// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledCharacter = styled.div`
    color:red;
    text-align:left;
    button {
        text-align:right;
        float:right;
    }
`

const Character = (props) => {
    const { info, action, id } = props
    return (
        <StyledCharacter>
            <h3>Name: {info.name}
            <button onClick={action} id={id}>View Details</button>
            </h3>
        </StyledCharacter>
    )
}

export default Character