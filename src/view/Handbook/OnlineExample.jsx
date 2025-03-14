import React, { useEffect, useRef, useState } from 'react'
import { tiktokVideo } from './data';
import * as image from "./img/tiktokImage"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function OnlineExample() {

    const windowWith = window.innerWidth
    const [ elementNumber, setElementNumber ] = useState(3)
    const [maxHeight, setMaxHeight] = useState(0);
    const slideRefs = useRef([]);

    useEffect(() => {
        if(windowWith >= 1275) setElementNumber(3)
        else if(windowWith >= 825) setElementNumber(2)
        else setElementNumber(1)
    }, [windowWith])

    useEffect(() => {
        const heights = slideRefs.current.map(el => el?.offsetHeight || 0);
        setMaxHeight(Math.max(...heights));

        console.log(heights, Math.max(...heights))
    }, [tiktokVideo]);

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
                    <a 
                        target='_blank' 
                        href={element.url} 
                        className='tiktok-element'
                        ref={el => slideRefs.current[index] = el}
                    >
                        <div 
                            className='block'
                            style={{ height: maxHeight || "auto" }} // Set chiều cao theo maxHeight
                        >
                            <img src={image["image" + element.image]}/>
                            <h4> 
                                <FontAwesomeIcon icon={faTiktok} />
                                {element.tiktokName}
                            </h4>
                            <h2>{element.title}</h2>
                        </div>
                    </a>
                </SwiperSlide>
            })
        }
        </Swiper>
    )
}
