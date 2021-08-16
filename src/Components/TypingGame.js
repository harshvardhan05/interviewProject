import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

function TypingGame() {
    const STARTING_TIME = 10  
    const INITIAL_WORD_COUNT = 0  
  
    const [text, setText] = useState("");
    const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(INITIAL_WORD_COUNT)  
    const moveFocus = useRef(null)
  
    function handleChange(event) {
      const { value } = event.target;
      setText(value);
    }
    
    function calculateWordCount(input) {
      const wordArr = input.trim().split(" ");
      const totalWords = wordArr.filter(word => word !== '').length;
      return totalWords
    }
    
    function startGame() {
          setIsTimeRunning(true)
          setTimeRemaining(STARTING_TIME)
          setText('')
          setWordCount(INITIAL_WORD_COUNT)
      }
  
      useEffect(() => {
          if (timeRemaining > 0 && isTimeRunning === true) {
              moveFocus.current.focus()
              setTimeout(() => {
                  setTimeRemaining(prevTime => prevTime - 1);
                  }, 1000);
          }else if(timeRemaining === 0) {
              setIsTimeRunning(false)
              setWordCount(calculateWordCount(text))
          }       
    }, [timeRemaining, isTimeRunning]);
  
    return (
        <StyledTypingGame>
             <div className="main-container">
                <header>
                    <h1>Speed Typing Game</h1>
                </header>
                <input
                    ref={moveFocus}
                    className="input-field"
                    type="text"
                    value={text}
                    placeholder="start typing here"
                    onChange={handleChange}
                    disabled={!isTimeRunning}
                />
                <h4 className="timer">Time Remaining : {timeRemaining}</h4>
                <button 
                    className="start-btn" 
                    onClick={startGame}
                    disabled={isTimeRunning}  
                >
                Start
                </button>
                <h2>Word Count: {wordCount}</h2>
            </div>
        </StyledTypingGame>
     
    );
}

const StyledTypingGame = styled.div `
    .main-container {
        width: 500px;
        background-color: var(--background-dark-color);
        margin: 0 auto;
        text-align: center;
    } 
    .input-field {
        width: 400px;
        height: 300px;
        text-align: center;
    }  

    .input-field:disabled {
        background-color: bisque;
    }

    .start-btn {
        background-color: blueviolet;
        padding: 10px 25px;
        border: none;
        border-radius: 12px;
        font-weight: bold;
        cursor: pointer
    }

    .start-btn:disabled {
        cursor: not-allowed;
    }
`
export default TypingGame
