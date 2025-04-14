import React, { useEffect, useState } from 'react'
import "./GameMain.scss"
import { useNavigate, useParams } from 'react-router-dom';
import GameRound from './GameRound';
import volume from "../asset/volume.png"
import mute from "../asset/mute.png"
import { useAudio } from '../../../context/AudioContext';

export default function GameMain() {
    const navigate = useNavigate()
    const { id } = useParams();
    const { isAudioOn, setIsAudioOn } = useAudio()
    const [ scores, setScores ] = useState(0);
    const [ total, setTotal ] = useState(0);

    console.log(scores)

    useEffect(() => {
        sessionStorage.setItem("round", JSON.stringify({
            round1: {
                status: false,
                score: 0
            },
            round2: {
                status: false,
                score: 0
            },
            round3: {
                status: false,
                score: 0
            },
            round4: {
                status: false,
                score: 0
            },
            round5: {
                status: false,
                score: 0
            }
        }))

        setTotal(0)
        setScores(0)
    }, [])

    useEffect(() => {
        sessionStorage.setItem("total", total)
    }, [total])

    useEffect(() => {
        const roundId = parseInt(id)
        if(!sessionStorage.getItem("userInfo")) {
            navigate("/game")
            return
        }
        if(roundId < 1 || roundId > 5) {
            navigate("/")
            return
        }
        if(!roundId) {
            navigate("/game/main/1")
            return
        }

        const gameProgress = JSON.parse(sessionStorage.getItem("round")) || {};
        let firstUnplayed = null;
        for (let i = 1; i <= 5; i++) {
            const roundKey = `round${i}`;
            if (!gameProgress[roundKey] || gameProgress[roundKey].status === false) {
                firstUnplayed = i;
                break;
            }
        }
        
        if (firstUnplayed && roundId > firstUnplayed) {
            navigate(`/game/main/${firstUnplayed}`);
        }
    }, [])


    return (
        <div id='game-main'>
            <button className='audio' onClick={() => setIsAudioOn(!isAudioOn)}>
            {
                isAudioOn 
                &&
                <img src={volume}/>
                ||
                <img src={mute} style={{opacity: "0.4"}}/>
            }
            </button>
            <div className='point'>
                <p>Total: {total} safecoin</p>
                <p>Round {id}: {scores} safecoin</p>
            </div>
            <GameRound
                roundKey={"round" + id}
                index={id}
                setTotal={setTotal}
                setScores={setScores}
            />
        </div>
    )
}
