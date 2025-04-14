import React, { useEffect, useState } from 'react'
import check from "../img/check.png"
import xmark from "../img/xmark.png"
import blank from "../img/blank.png"
import Swal from 'sweetalert2'
import { useNavigate, useParams } from 'react-router-dom'

export default function GameChoice({ data, setCurrentQIndex, roundKey }) {
    const [ answerData, setAnswerData ] = useState([null, null, null, null])

    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        setAnswerData([null, null, null, null])
        window.scrollTo(0, 0)
    }, [data])

    const handleChangeValue = (check, index) => {
        setAnswerData(prev => {
            const newAnswers = [...prev];
            newAnswers[index] = (newAnswers[index] === check) ? null : check;
            return newAnswers;
        });
    }

    const handleContinue = (check) => {
        const roundData = sessionStorage.getItem("round")
        if (!roundData) return

        const parsed = JSON.parse(roundData)
    
        if (check) {
            parsed[roundKey].score += 1
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

    const handleCheckAnswer = () => {
        const result = data.choice.map(element => element.answer)
        const wrongAnswer = result
        .map((correct, index) => correct !== answerData[index] ? index + 1 : null)
        .filter(index => index !== null);

        if(wrongAnswer.length == 0)
            Swal.fire({
                title: "Bạn đã trả lời đúng",
                icon: "success",
                html: data.description?.replace(/\n/g, "<br/>"),
                confirmButtonText: "Tiếp tục",
                customClass: {
                    title: 'swal-title-custom-true',
                    htmlContainer: 'swal-text-custom-true',
                    confirmButton: "swal-button-custom-true"
                }
            })
            .then(() => handleContinue(true))
        else 
            Swal.fire({
                title: "Sai mất rồi",
                icon: "error",
                html: "Bạn đã sai câu " + wrongAnswer.join(", "),
                confirmButtonText: "Tiếp tục",
                customClass: {
                    title: 'swal-title-custom',
                    htmlContainer: 'swal-text-custom swal-center',
                    confirmButton: "swal-button-custom"
                }
            })
            .then(() => handleContinue(false))
    }

    return (
        <div className='game-choice'>
            <div className='question'>
                <h2>Câu {data.id}</h2>
                <h1>Chọn các hành động vào nhóm phù hợp:</h1>
                <h1>
                    <span className='choice1'>{data.data_type[0]}</span> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                    <span className='choice2'>{data.data_type[1]}</span>
                </h1>
            </div>
            <div className='answer'>
                <div className='element'>
                    <div className='content blank'></div>
                    <div className='choice'>
                        <p className='choice1'>{data.data_type[0]}</p>
                        <p className='choice2'>{data.data_type[1]}</p>
                    </div>
                </div>
            {
                data.choice.map((element, index) => {
                    return (
                        <div className='element' key={index}>
                            <div className='content'>
                                <p>{element.content}</p>
                            </div>
                            <div className='choice'>
                            {
                                answerData[index] == true &&
                                <button onClick={() => handleChangeValue(true, index)}><img src={check}/></button> ||
                                <button onClick={() => handleChangeValue(true, index)}><img src={blank}/></button> 
                            }
                            {
                                answerData[index] == false &&
                                <button onClick={() => handleChangeValue(false, index)}><img src={xmark}/></button> ||
                                <button onClick={() => handleChangeValue(false, index)}><img src={blank}/></button> 
                            }
                            </div>
                        </div>
                    )
                })
            }
                <div className='submit'>
                    <button onClick={handleCheckAnswer}>Submit</button>
                </div>
            </div>
        </div>
    )
}
