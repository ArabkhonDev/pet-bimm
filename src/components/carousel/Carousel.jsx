import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderImage1 from "../../assets//img/carousel/bugdoy1.jpg";
import SliderImage2 from "../../assets//img/carousel/olma2.jpg";
import SliderImage3 from "../../assets//img/carousel/olma3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./carousel.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="img_container">
            <div className="carousel_image">
              <img src={SliderImage1} alt="" className="carouse_img" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img_container">
            <div className="carousel_image">
              <img src={SliderImage2} alt="" className="carouse_img" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img_container">
            <div className="carousel_image">
              <img src={SliderImage1} alt="" className="carouse_img" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img_container">
            <div className="carousel_image">
              <img src={SliderImage3} alt="" className="carouse_img" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
