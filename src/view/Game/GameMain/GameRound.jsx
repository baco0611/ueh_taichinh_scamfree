import React, { useEffect, useState } from 'react'
import Map from './Map'
import gameData from "../asset/data"

export default function GameRound({ roundKey, index }) {
    const [showMap, setShowMap] = useState(true);           // Hiện map 4s đầu
    const [currentQIndex, setCurrentQIndex] = useState(1);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMap(false); // Ẩn map sau 4s
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='game-provider'>
            <h1>Vòng {index}</h1>
            {
                showMap &&
                <>
                    <h2 >Đợi một lát ...</h2>
                    <Map
                        roundKey={roundKey}
                    />
                </>
            }
        </div>
    )
}
