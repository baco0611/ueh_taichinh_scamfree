import React, { useEffect, useRef, useState } from 'react'
import * as image from "./img/newsImage"
import { newsData } from './data'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import clsx from 'clsx';

export default function News() {

    const windowWith = window.innerWidth
    const [ elementNumber, setElementNumber ] = useState(2)

    useEffect(() => {
        if(windowWith >= 1275) setElementNumber(2)
        else setElementNumber(1)
    }, [windowWith])


    return (
        <Swiper
            slidesPerView={elementNumber}
            slidesPerGroup={elementNumber}
            className={clsx("mySwiper", {
                lock: elementNumber==1
            })}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            loop={true}
            speed={800}
        >
        {
                newsData.map((element, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <a 
                                href={element.url} 
                                className='element' 
                                target='_blank'
                            >
                                <img src={image["image" + element.image]}/>
                                <h3>{element.title}</h3>
                                <p>{element.details}</p>
                            </a>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}
