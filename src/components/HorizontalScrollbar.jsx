import { Box } from '@mui/material'
import React from 'react'
import { BodyPart } from './BodyPart'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation, FreeMode } from 'swiper/modules';
import { ExerciseCard } from './ExerciseCard';


export const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {

    return (
        <>
            <Swiper
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                }}
                freeMode={true}

                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container">


                {data.map((item) => (
                    <SwiperSlide
                        key={item.id || item}
                        itemID={item.id || item}
                        title={item.id || item}
                        m="0 40px"
                    >
                        {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /> : <ExerciseCard exercise={item} />}
                    </SwiperSlide>
                )
                )}

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper >


        </>

    )
}
