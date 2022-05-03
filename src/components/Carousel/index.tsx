import React from 'react';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay, EffectCoverflow } from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slide from './Slide';


const Carousel:React.FunctionComponent<SwiperProps> = (props) => {
    SwiperCore.use([Autoplay])
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y, EffectCoverflow]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            {...props}
        >
            {React.Children.map(props.children,(child, i)=>(
                <SwiperSlide key={i}>
                    <Slide>
                        {child}
                    </Slide>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
