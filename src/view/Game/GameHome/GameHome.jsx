import React, { useContext, useEffect } from 'react'
import "./GameHome.scss"
import surface from "../asset/surface.png"
import button from "./img/button.png"
import { Link } from 'react-router-dom'
import "animate.css"
import volume from "../asset/volume.png"
import mute from "../asset/mute.png"
import { useAudio } from '../../../context/AudioContext'

export default function GameHome() {
    
    const { isAudioOn, setIsAudioOn } = useAudio()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='game-home page-wrapper game'>
            <img 
                className='surface animate__animated animate__pulse animate__infinite animate__slow' 
                src={surface}    
            />
            <Link to={"/game/intro"}>
                <img className='button' src={button}/>
            </Link>

            <button className='audio' onClick={() => setIsAudioOn(!isAudioOn)}>
            {
                isAudioOn 
                &&
                <img src={volume}/>
                ||
                <img src={mute} style={{opacity: "0.4"}}/>
            }
            </button>
        </div>
    )
}
