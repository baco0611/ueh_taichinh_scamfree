import React, { useEffect, useState } from 'react'
import { tiktokVideo } from './data';
import TiktokElement from './TiktokElement';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function OnlineExample() {

    const windowWith = window.innerWidth
    const [ elementNumber, setElementNumber ] = useState(3)

    useEffect(() => {
        if(windowWith >= 1275) setElementNumber(3)
        else if(windowWith >= 825) setElementNumber(2)
        else setElementNumber(1)
    }, [])

    return (
        <Swiper
            slidesPerView={elementNumber}
            slidesPerGroup={elementNumber}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            loop={true}
            speed={800}
        >
        {
            tiktokVideo.map((element, index) => {
                return <SwiperSlide key={index}>
                    <TiktokElement information={element}/>
                </SwiperSlide>
            })
        }
        </Swiper>
        /* <>
            {
                tiktokVideo.map((element, index) => {
                    return <TiktokElement
                            key={index}
                            information={element}
                        />
                })
            }
        </> */
    )
}
