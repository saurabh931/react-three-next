import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { MdArrowRightAlt } from "react-icons/md";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          // centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg_box b-r-20 m-t-5 m-b-3 pa-2">
              <img
                src="./key.jpg"
                alt=""
                className="w-7 m-t-_3 d-b m-a m-b-1"
              />
              <div className="f-s-1_25 l-h-1 f-w-600 m-b-1">
                Lorem ipsum dolor, sit amet .
              </div>
              <div className="k-f-f m-b-1_5 f-s-0_8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid velit ipsum amet aspernatur, laboriosam aut.
              </div>
              <div className="d-f  a-i-c j-c-s-b">
                <div className="f-w-400 k-f-f">Learn more</div>
                <div className="">
                  <MdArrowRightAlt className="f-w c-w " />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg_box b-r-20 m-t-5 m-b-3 pa-2">
              <img
                src="./key.jpg"
                alt=""
                className="w-7 m-t-_3 d-b m-a m-b-1"
              />
              <div className="f-s-1_25 l-h-1 f-w-600 m-b-1">
                Lorem ipsum dolor, sit amet .
              </div>
              <div className="k-f-f m-b-1_5 f-s-0_8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid velit ipsum amet aspernatur, laboriosam aut.
              </div>
              <div className="d-f  a-i-c j-c-s-b">
                <div className="f-w-400 k-f-f">Learn more</div>
                <div className="">
                  <MdArrowRightAlt className="f-w c-w " />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg_box b-r-20 m-t-5 m-b-3 pa-2">
              <img
                src="./key.jpg"
                alt=""
                className="w-7 m-t-_3 d-b m-a m-b-1"
              />
              <div className="f-s-1_25 l-h-1 f-w-600 m-b-1">
                Lorem ipsum dolor, sit amet .
              </div>
              <div className="k-f-f m-b-1_5 f-s-0_8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid velit ipsum amet aspernatur, laboriosam aut.
              </div>
              <div className="d-f  a-i-c j-c-s-b">
                <div className="f-w-400 k-f-f">Learn more</div>
                <div className="">
                  <MdArrowRightAlt className="f-w c-w " />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg_box b-r-20 m-t-5 m-b-3 pa-2">
              <img
                src="./key.jpg"
                alt=""
                className="w-7 m-t-_3 d-b m-a m-b-1"
              />
              <div className="f-s-1_25 l-h-1 f-w-600 m-b-1">
                Lorem ipsum dolor, sit amet .
              </div>
              <div className="k-f-f m-b-1_5 f-s-0_8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid velit ipsum amet aspernatur, laboriosam aut.
              </div>
              <div className="d-f  a-i-c j-c-s-b">
                <div className="f-w-400 k-f-f">Learn more</div>
                <div className="">
                  <MdArrowRightAlt className="f-w c-w " />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg_box b-r-20 m-t-5 m-b-3 pa-2">
              <img
                src="./key.jpg"
                alt=""
                className="w-7 m-t-_3 d-b m-a m-b-1"
              />
              <div className="f-s-1_25 l-h-1 f-w-600 m-b-1">
                Lorem ipsum dolor, sit amet .
              </div>
              <div className="k-f-f m-b-1_5 f-s-0_8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid velit ipsum amet aspernatur, laboriosam aut.
              </div>
              <div className="d-f  a-i-c j-c-s-b">
                <div className="f-w-400 k-f-f">Learn more</div>
                <div className="">
                  <MdArrowRightAlt className="f-w c-w " />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg_box b-r-20 m-t-5 m-b-3 pa-2">
              <img
                src="./key.jpg"
                alt=""
                className="w-7 m-t-_3 d-b m-a m-b-1"
              />
              <div className="f-s-1_25 l-h-1 f-w-600 m-b-1">
                Lorem ipsum dolor, sit amet .
              </div>
              <div className="k-f-f m-b-1_5 f-s-0_8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid velit ipsum amet aspernatur, laboriosam aut.
              </div>
              <div className="d-f  a-i-c j-c-s-b">
                <div className="f-w-400 k-f-f">Learn more</div>
                <div className="">
                  <MdArrowRightAlt className="f-w c-w " />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
