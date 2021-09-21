import React from 'react'
import {useTimer} from "react-timer-hook";
import { GiPauseButton, GiPlayButton } from "react-icons/gi";


function Timer({expiryTimestamp}) {

    //Setup timer
    const time = new Date();
    time.setSeconds(time.getSeconds() + 600)
    console.log(time.getSeconds())
    const {
        seconds,
        minutes,
        hours,
        isRunning,
        start,
        pause,
        resume,
        restart,
      } = useTimer({time: time.getSeconds(), autoStart: true, onExpire: () => console.warn('onExpire called')})

    //Function to change timer time
    const updateTimer = (time) => {
        console.log(time.getSeconds())
        const updateTime = new Date()
        updateTime.setSeconds(time.getMinutes() + time.getSeconds() + 30)
        restart(updateTime)
    }

    //Function to add 5 mins to timer
    const addFivemins = () => {
        const updateTime = new Date()
        updateTime.setSeconds(time)
    }
    return (
        <div id='timer'>
                {isRunning ? 
                    <div>
                        <button onClick={pause}><GiPauseButton/></button>
                        <input type="datetime" name="timer-setter" id="timer-setter-input"/>             
                    </div> :
                    <div>
                        <button onClick={start}><GiPlayButton/></button>
                        <div style={{fontSize: '20px', display: 'inline', margin: '2rem'}}>
                            <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
                        </div> 
                    </div>
                    
                }
                {/* <button onClick={resume}>Resume</button> */}
                <button onClick={()=>updateTimer(time)}>Add 5 min</button>
        </div>
    )
}

export default Timer
