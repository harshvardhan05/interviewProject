import React, {useContext} from 'react'
import styled from 'styled-components'
import {CartContext} from '../CartContext'
import Image from '../Components/Image'
import {getClass} from '../utils/utils'
import TypingGame from '../Components/TypingGame'


function ProjectPage() {
    const {allPhotos} = useContext(CartContext)

    const imageElements = allPhotos.map((img, i) => {
        return (
            <Image key={img.id} img={img} className={getClass(i)} />
        )
    })

    return (
        <ProjectPageStyled>
        <h1 style={{textAlign: 'center'}}>fetching images from random api</h1>
            <div className='photos'>
                {imageElements}
            </div>
            <TypingGame />
        </ProjectPageStyled>
    )
}

const ProjectPageStyled = styled.div ` 
  .photos {
    padding: 10px;
    display: grid;
    grid-gap: 2px;
    grid-auto-rows: 100px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-flow: dense;
  }

`

export default ProjectPage

