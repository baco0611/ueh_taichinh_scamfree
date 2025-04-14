import React, { useEffect, useState } from 'react'
import "./GameMain.scss"
import { useNavigate, useParams } from 'react-router-dom';
import GameRound from './GameRound';

export default function GameMain() {
    const navigate = useNavigate()
    const { id } = useParams();
    const [currentRoundIndex, setCurrentRoundIndex] = useState(id);

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
            <GameRound
                roundKey={"round" + id}
                index={id}
            />
        </div>
    )
}
