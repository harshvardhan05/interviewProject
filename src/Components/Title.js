import React from 'react'
import styled from 'styled-components'

function Title({title, span}) {
    return (
        <TitleStyled>
            <h2>{title}</h2>
        </TitleStyled>
    )
}

const TitleStyled = styled.div `
    position: relative;
    h2{
        color: var(--white-color);
        font-size: 3rem;
        font-weight: 500;
        text-transform: uppercase;
        position: relative;
    }
`

export default Title
