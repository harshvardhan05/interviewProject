import React from 'react'
import resume1 from '../img/resume1.jpg'
import styled from 'styled-components'

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume1} alt="resume image" />
            </div>
            <div className="right-content">
                    <h4>I am <span>Harshvardhan</span>.</h4>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Velit maxime architecto sapiente iusto enim esse inventore odio quis, soluta consequatur tenetur, nihil, minus corporis illum animi provident eum quisquam quidem! 
                </p>
                <div className="about-info">
                    <div className="info-title">
                       <p>Full Name: </p> 
                       <p>Age: </p> 
                       <p>Nationality: </p> 
                       <p>Languages: </p>
                       <p>Location: </p> 
                       <p>Service: </p> 
                    </div>
                    <div className="info">
                       <p>Harshvardhan</p> 
                       <p>27</p> 
                       <p>Indian</p> 
                       <p>English, Hindi</p>
                       <p>Banka, Bihar</p> 
                       <p>React Developer</p> 
                    </div>
                </div>
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div `
    margin-top: 4rem;
    display: flex;
    .left-content {
        width: 100%;
        img {
            width: 90%;
        }
    }
    .right-content{
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span {
                font-size: 2rem;
            }
        }
        .paragraph {
            padding: 1rem 0;

        }
        .about-info{
            display: flex;
            .info-title {
                padding-right: 3rem;
            }
            .info-title, .info {
                p{
                    padding: .2rem 0;
                }
            }
        }
    }
`

export default ImageSection
