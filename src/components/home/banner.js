import React, { useRef, useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import '../../assets/css/swiper.css';

// const slideData = [
//     { id: 1, img: '/assets/images/Banner_img1.jpg' },
//     { id: 2, img: '/assets/images/Banner_img1.jpg' },
//     { id: 3, img: '/assets/images/Banner_img1.jpg' },
//     { id: 4, img: '/assets/images/Banner_img1.jpg' },
// ];

export default function Banner({ images }) {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper h-[80vh] bg-white"
            >
                {images.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div>
                            <img
                                className="object-contain"
                                alt="BannerImg"
                                src={slide.img}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
