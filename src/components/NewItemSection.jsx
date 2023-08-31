"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SpinningAnimation from "./UI/SpinningAnimation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function NewItemSection() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div className="container mx-auto mt-[150px]">
      <div className="flex justify-center gap-2 ">
        <img
          className="left-vec"
          src="assets/images/icon/sub-title-vec.svg"
          alt="sub-title-vec"
        />
        <span className="font-jost text-lg text-[#bf9444]">Our New Item</span>
        <img
          className="right-vec"
          src="assets/images/icon/sub-title-vec.svg"
          alt="sub-title-vec"
        />
      </div>
      <h2 className="text-3xl lg:text-[60px] font-cormorant text-center  font-bold">
        Restho New Item List
      </h2>

      <div className="flex gap-6 flex-wrap lg:flex-nowrap mt-6 px-6">
        <div className="lg:w-1/3 w-full bg-gray-100 border border-gray-200 rounded-lg py-16 flex items-center justify-center flex-col gap-8">
          <span className="bg-[#bf9444] p-2 px-4 font-jost text-white rounded-tl-lg rounded-br-lg font-medium text-xl">
            Spcial Offer
          </span>
          <p className="text-2xl font-bold">Our New Item has offer</p>
          <div className="border px-8 py-3 border-[#bf9444] rounded-lg text-center">
            <p className="text-2xl font-bold">After Discount</p>
            <p className="text-[#bf9444] text-3xl font-bold">20%</p>
          </div>
        </div>
        <div className="lg:w-1/3 w-full  border border-gray-200 rounded-lg py-16 flex items-center flex-col gap-8 relative">
          <div className="relative">
            <SpinningAnimation>
              <img
                class="h-64"
                src="assets/images/bg/new-items6.png"
                alt="new-items1"
              />
            </SpinningAnimation>
            <span class="absolute bottom-0 left-0 right-0 mx-auto text-center w-32  text-[#bf9444] bg-white border p-2 rounded-tl-lg rounded-br-lg font-medium text-lg ">
              Price - $8
            </span>
          </div>
          <div class="content">
            <h3>
              <a href="/shop-details">Full Chicken</a>
            </h3>
          </div>
        </div>
        <div className="order-1 lg:order-3 lg:w-1/3 w-full  relative bg-[linear-gradient(to_right_bottom,rgba(0,2,3,0.7),rgba(0,2,3,0.7)),url('/assets/images/bg/new-items5.png')]">
          <div className="h-full flex flex-col items-center justify-center">
            <div className="flex gap-2 items-center justify-center">
              <img
                className="left-vec"
                src="assets/images/icon/sub-title-vec.svg"
                alt="sub-title-vec"
              />
              <span className="font-jost text-lg text-[#bf9444]">Reserve</span>
              <img
                className="right-vec"
                src="assets/images/icon/sub-title-vec.svg"
                alt="sub-title-vec"
              />
            </div>
            <p className="text-2xl text-white font-medium py-4">
              For Your Private Event
            </p>
            <button className="self-center px-8 py-3  bg-[#bf9444] f text-gray-50 rounded-tl-lg rounded-br-lg font-medium text-lg">
              Book Table
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="hidden lg:flex gap-8 justify-center py-12 mx-auto max-w-2xl">
          <Swiper
            // pagination={pagination}
            modules={[Pagination]}
            slidesPerView={3}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            // className="flex justify-center gap-8"
          >
            <SwiperSlide>
              <img src="assets/images/bg/new-item-sm2.png" alt="new-item-sm3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/bg/new-item-sm2.png" alt="new-item-sm3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/bg/new-item-sm2.png" alt="new-item-sm3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/bg/new-item-sm2.png" alt="new-item-sm3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/bg/new-item-sm2.png" alt="new-item-sm3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/bg/new-item-sm2.png" alt="new-item-sm3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/bg/new-item-sm2.png" alt="new-item-sm3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/bg/new-item-sm2.png" alt="new-item-sm3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/bg/new-item-sm2.png" alt="new-item-sm3" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
