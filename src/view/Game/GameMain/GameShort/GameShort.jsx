import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function GameShort({ data, setCurrentQIndex, roundKey, setTotal, setScores }) {
    const [ answerValue, setAnswerValue ] = useState("")

    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        setAnswerValue("")
        // window.scrollTo(0, 0)
    }, [data])

    const handleContinue = (check) => {
        const roundData = sessionStorage.getItem("round")
        if (!roundData) return

        const parsed = JSON.parse(roundData)
    
        if (check) {
            parsed[roundKey].score += 1
            setTotal(prev => prev + 1)
            setScores(prev => prev + 1)
        }
    
        const isLastQuestion = data.id % 10 === 0
    
        if (isLastQuestion) {
            parsed[roundKey].status = true
        }
    
        // Cập nhật lại toàn bộ object round
        sessionStorage.setItem("round", JSON.stringify(parsed))
    
        if (isLastQuestion) {
            parsed[roundKey].status = true
            sessionStorage.setItem("round", JSON.stringify(parsed))
        
            const score = parsed[roundKey].score
            if (score >= 8) {
                Swal.fire({
                    title: `🎉 Chúc mừng đã xong vòng ${id}`,
                    text: `Bạn đạt được ${score} điểm. Đến vòng tiếp theo thôi!`,
                    icon: "success",
                    confirmButtonText: "Vòng tiếp theo →",
                    customClass: {
                        title: 'swal-title-custom-true',
                        htmlContainer: 'swal-text-custom-true swal-center',
                        confirmButton: "swal-button-custom-true"
                    }
                }).then(() => {
                    if(id == 5)
                        navigate("/game/legend")
                    else
                        navigate(`/game/main/${parseInt(id) + 1}`)
                })
            } else {
                Swal.fire({
                    title: `😥 Rất tiếc!`,
                    text: `Bạn chỉ đạt ${score} điểm. Vui lòng thử lại sau.`,
                    icon: "warning",
                    confirmButtonText: "Quay về trang chính",
                    customClass: {
                        title: 'swal-title-custom',
                        htmlContainer: 'swal-text-custom',
                        confirmButton: "swal-button-custom"
                    }
                }).then(() => {
                    navigate("/game")
                })
            }
        } else {
            setCurrentQIndex(prev => prev + 1)
        }
    }

    const checkAnswer = () => {
        const answer = answerValue.trim().toLowerCase()

        if (!answer) {
            Swal.fire({
                title: "Chưa nhập gì cả",
                text: "Bạn vui lòng nhập câu trả lời trước khi tiếp tục.",
                icon: "warning",
                confirmButtonText: "OK",
                customClass: {
                    title: 'swal-title-custom',
                    htmlContainer: 'swal-text-custom',
                    confirmButton: "swal-button-custom"
                }
            })
            return
        }

        if (data.answer.some(a => a.toLowerCase().includes(answer))) {
            Swal.fire({
                title: "Bạn đã trả lời đúng",
                icon: "success",
                html: data.description.replace(/\n/g, "<br/>"),
                confirmButtonText: "Tiếp tục",
                customClass: {
                    title: 'swal-title-custom-true',
                    htmlContainer: 'swal-text-custom-true',
                    confirmButton: "swal-button-custom-true"
                }
            })
            .then(() => handleContinue(true))
        } else {
            const audio = new Audio('/wrong.mp3');
            audio.play();
            Swal.fire({
                title: "Sai mất rồi",
                icon: "error",
                html: data.description.replace(/\n/g, "<br/>"),
                confirmButtonText: "Tiếp tục",
                customClass: {
                    title: 'swal-title-custom',
                    htmlContainer: 'swal-text-custom swal-center',
                    confirmButton: "swal-button-custom"
                }
            })
            .then(() => handleContinue(false))
        }
    }
    
    return (
        <div className='game-short'>
            <div className='question'>
            <h2>Câu {data.id}</h2>
            {
                data.title &&
                <h1>[{data.title}]</h1>
            }
                <p>
                {data.datum.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                    {line}<br />
                    </React.Fragment>
                ))}
                </p>
                <p className='ques'>Có những điểm gì bất thường ở đây?</p>
            </div>
            <div className='answer'>
                <input
                    placeholder='Hãy copy 1 đoạn mà bạn cho là bất thường và dán vào đây'
                    value={answerValue}
                    onChange={(e) => setAnswerValue(e.target.value)}
                    required
                />
                <button onClick={(() => checkAnswer())}>Submit</button>
            </div>
        </div>
    )
}
