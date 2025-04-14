import React, { useState } from 'react'
import map from "./img/map.png"
import round1Button from "./img/round1.png"
import round1ActiveButton from "./img/round1Active.png"
import round2Button from "./img/round2.png"
import round2ActiveButton from "./img/round2Active.png"
import round3Button from "./img/round3.png"
import round3ActiveButton from "./img/round3Active.png"
import round4Button from "./img/round4.png"
import round4ActiveButton from "./img/round4Active.png"
import round5Button from "./img/round5.png"
import round5ActiveButton from "./img/round5Active.png"
import "animate.css"
import clsx from 'clsx'

export default function Map({ roundKey }) {
       
    return (
        <div className='game-map'>
            <div className='map'>
                <img src={map} className='map-image'/>
                <img
                    src={
                        roundKey == "round1" ? round1ActiveButton : round1Button 
                    }
                    className={clsx(`button-1`, "buttonActive", {
                        animate__animated: roundKey == "round1", 
                        large: roundKey == "round1", 
                        animate__bounce: roundKey == "round1",
                        animate__infinite: roundKey == "round1",
                        animate_false: roundKey == "round1"
                    })}
                />
                <img
                    src={
                        roundKey == "round2" ? round2ActiveButton : round2Button 
                    }
                    className={clsx(`button-2`, "buttonActive", {
                        animate__animated: roundKey == "round2", 
                        large: roundKey == "round2", 
                        animate__bounce: roundKey == "round2",
                        animate__infinite: roundKey == "round2",
                        animate_false: roundKey == "round2"
                    })}
                />
                <img
                    src={
                        roundKey == "round3" ? round3ActiveButton : round3Button 
                    }
                    className={clsx(`button-3`, "buttonActive", {
                        animate__animated: roundKey == "round3", 
                        large: roundKey == "round3", 
                        animate__bounce: roundKey == "round3",
                        animate__infinite: roundKey == "round3",
                        animate_false: roundKey == "round3"
                    })}
                />
                <img
                    src={
                        roundKey == "round4" ? round4ActiveButton : round4Button 
                    }
                    className={clsx(`button-4`, "buttonActive", {
                        animate__animated: roundKey == "round4", 
                        large: roundKey == "round4", 
                        animate__bounce: roundKey == "round4",
                        animate__infinite: roundKey == "round4",
                        animate_false: roundKey == "round4"
                    })}
                />
                <img
                    src={
                        roundKey == "round5" ? round5ActiveButton : round5Button 
                    }
                    className={clsx(`button-5`, "buttonActive", {
                        animate__animated: roundKey == "round5", 
                        large: roundKey == "round5", 
                        animate__bounce: roundKey == "round5",
                        animate__infinite: roundKey == "round5",
                        animate_false: roundKey == "round5"
                    })}
                />
            </div>
        </div>
    )
}
