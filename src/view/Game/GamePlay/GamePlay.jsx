import React, { useContext, useEffect } from 'react'
import "../GameHome/GameHome.scss"
import surface from "./img/surface.png"
import button from "./img/button.png"
import { Link } from 'react-router-dom'
import "animate.css"
import volume from "../asset/volume.png"
import mute from "../asset/mute.png"
import { useAudio } from '../../../context/AudioContext'
import game_data from "../asset/data"

export default function Play() {
    
    const { isAudioOn, setIsAudioOn } = useAudio()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    console.log(game_data)

    return (
        <div className='game-home page-wrapper game'>
            <img 
                className='surface animate__animated animate__pulse animate__infinite animate__slow' 
                src={surface}  
                style={{width: "min(755px, 90%)"}}  
            />
            <Link to={"/game/main"}>
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
