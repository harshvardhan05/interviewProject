import React from 'react'
import styled from 'styled-components'
import {LinkedIn, GitHub } from '@material-ui/icons'

function HomePage() {
    return (
        <HomePageStyled>
            <div className="typography">
                <h1>Hi I'm <span>Harshvardhan</span>.</h1>
                <p>
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                   Consequatur amet sint vel explicabo labore esse perspiciatis, temporibus officia sed unde. 
                </p>
                <div className="icons">
                    <a href='#' className="icon i-github"><LinkedIn/></a>
                    <a href='#' className="icon i-linkedin"><GitHub/></a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header `
    width: 100%;
    height: 100vh;
    position: relative;

    .typography {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                cursor: pointer;
                transition: All .4s ease-in-out;
                &:hover {
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color)
                }
                &:not(:last-child) {
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
                .i-github {
                    &:hover {
                    border: 2px solid purple;
                    color: purple; 
                    }
                }
                .i-linkedin {
                    &:hover {
                    border: 2px solid blue;
                    color: blue; 
                    }
                }    
            }
        }
    }
`

export default HomePage
