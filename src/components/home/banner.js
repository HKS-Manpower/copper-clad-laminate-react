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
                className="mySwiper bg-white sm:h-[80vh] @sm:h-[60vh]"
            >
                {images.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className={`relative flex h-full w-full items-center px-32`}
                        >
                            <h1 className="font-semibold text-white sm:text-[3.5vw]">
                                The Copper Clad Laminate
                            </h1>
                            <img
                                className="absolute left-0 top-0 z-[-1] min-h-full object-cover object-center"
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
