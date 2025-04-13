import React, { useContext } from 'react'
import "./GameHome.scss"
import surface from "./img/surface.png"
import button from "./img/button.png"
import { Link } from 'react-router-dom'
import "animate.css"
import volume from "./img/volume.png"
import { useAudio } from '../../../context/AudioContext'

export default function GameHome() {
    
    const { isAudioOn, setIsAudioOn } = useAudio()

    console.log(isAudioOn)

    return (
        <div className='game-home page-wrapper'>
            <img 
                className='surface animate__animated animate__pulse animate__infinite animate__slow' 
                src={surface}    
            />
            <Link>
                <img className='button' src={button}/>
            </Link>

            <button onClick={() => setIsAudioOn(!isAudioOn)}>
            {
                isAudioOn 
                &&
                <img src={volume}/>
                ||
                <img src={volume} style={{opacity: "0.4"}}/>
            }
            </button>
        </div>
    )
}
