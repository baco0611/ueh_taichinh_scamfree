import React, { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { AudioContext } from '../../context/AudioContext';

export default function GameLayout() {
    const [ isAudioOn, setIsAudioOn ] = useState(true)
    const audioRef = useRef(null);
    useEffect(() => {
        const audio = audioRef.current;
        
        const tryPlay = () => {
            if (audio && isAudioOn && audio.paused) {
                audio.volume = 0.5;
                audio.play().catch(err => {
                    console.warn("🚫 Autoplay bị chặn:", err.message);
                });
            }
        };

    
        const tryPause = () => {
            if (audio && !isAudioOn && !audio.paused) {
                audio.pause();
            }
        };
        
        tryPlay();
        tryPause();
        
        const handleClick = () => {
            if (isAudioOn) tryPlay();
        };
        
        document.addEventListener("click", handleClick);
        
        return () => {
            document.removeEventListener("click", handleClick);
            audio?.pause();
        };
    }, [isAudioOn]);

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

        // return () => {
        //   sessionStorage.removeItem("userInfo"); // ✅ Xóa khi rời khỏi layout
        // };
    }, []);
    
    return (
        <>
            <AudioContext.Provider value={{ 
                isAudioOn, 
                setIsAudioOn, 
                audioRef 
            }}>
                <audio ref={audioRef} src="/audio.mp3" loop style={{ display: "none" }} />
                <Outlet />
            </AudioContext.Provider>
        </>
    )
}
