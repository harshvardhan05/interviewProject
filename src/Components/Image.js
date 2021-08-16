import React from 'react'
import styled from 'styled-components'


function Image({className, img}) {
    return (
        <ImageStyled>
            <div className={`${className} image-container`}>
                <img src={img.url} className='image-grid'/>
            </div>
        </ImageStyled>
    )
}

const ImageStyled = styled.div `
    img {
        width: 50%;
    }

    img.image-grid {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .image-container {
        position: relative;
    }
    .wide {
        grid-column: span 2;
    }

    .tall {
        grid-row: span 2;
    }

    .big {
        grid-column: span 2;
        grid-row: span 2;
    }

`

export default Image
