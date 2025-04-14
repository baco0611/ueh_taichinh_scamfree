import React, { useEffect, useState } from 'react'
import "./GameIntro.scss"
import { useAudio } from '../../../context/AudioContext'
import volume from "../asset/volume.png"
import mute from "../asset/mute.png"
import surface from "../asset/surface.png"
import confirm from "./img/confirm.png"
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function GameIntro() {
    const { isAudioOn, setIsAudioOn } = useAudio()
    const navigate = useNavigate()

    const [ userInfo, setUserInfo ] = useState({
        name: "",
        studentCode: ""
    })

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleChangeData = e => {
        setUserInfo(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleConfirm = () => {
        if (!userInfo.name || !userInfo.studentCode) {
            Swal.fire({
                icon: 'warning',
                title: 'Thiếu thông tin',
                text: 'Vui lòng điền đầy đủ tên và mã số sinh viên.'
            })
            return;
        }

        sessionStorage.setItem("userInfo", JSON.stringify(userInfo))
        navigate("/game/tutorial")
    }

    return (
        <div className='page-wrapper game-intro game'>
            <button className='audio' onClick={() => setIsAudioOn(!isAudioOn)}>
            {
                isAudioOn 
                &&
                <img src={volume}/>
                ||
                <img src={mute} style={{opacity: "0.4"}}/>
            }
            </button>

            <img 
                className='surface animate__animated animate__pulse animate__infinite animate__slow' 
                src={surface}    
            />

            <div className='information-block'>
                <div className='block'>
                    <p>Tên của bạn:</p>
                    <input
                        name='name'
                        value={userInfo.name}
                        onChange={e => handleChangeData(e)}
                        autoComplete="off"
                    />
                </div>
                <div className='block'>
                    <p>Mã số sinh viên:</p>
                    <input
                        name='studentCode'
                        value={userInfo.studentCode}
                        onChange={e => handleChangeData(e)}
                        autoComplete="off"
                    />
                </div>
            </div>
            <button onClick={handleConfirm}>
                <img className='button' src={confirm}/>
            </button>
        </div>
    )
}
