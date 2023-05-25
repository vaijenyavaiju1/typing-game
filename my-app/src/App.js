import './App.css'
import React, {useState, useEffect, useRef} from "react"
import useGameLogic from "./useGameLogic"



function App() {

const [textBoxRef, handleChange,text,timeRemaining,startGame,isTimeRunning,wordCount] = useGameLogic()    
    return (
        <div className="styling">
            <h1 className='heading'>How many words can you type in 30 seconds?</h1>
            <textarea
                ref={textBoxRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />
            <h4 className='para'>Time remaining: {timeRemaining}</h4>
            <button 
                onClick={startGame}
                disabled={isTimeRunning}
            >
                Start
            </button>
            <h1 className='para'>Word count: {wordCount}</h1>
        </div>
    )
}

export default App