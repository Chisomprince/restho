"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import SpinningAnimation from "./UI/SpinningAnimation";

const heroContents = [
  {
    id: 1,
    welcomeText: "Welcome To Restho",
    mainText: "Find Your Best Healthy & Tasty Food.",
    subText:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    leftImg: "/assets/images/bg/banner-img-5.png",
    rightImg: "/assets/images/icon/union-right.svg",
  },
  {
    id: 2,
    welcomeText: "Welcome To Restho2",
    mainText: "Find Your Best Healthy & Tasty Food.2",
    subText:
      "It is a long established fact that a reader will be distracted by the readable content of a page.2",
    leftImg: "/assets/images/bg/banner-img-5.png",
    rightImg: "/assets/images/icon/union-right.svg",
  },
];
export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? heroContents.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === heroContents.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="h-[calc(100vh-100px)] banner__hero ">
      {heroContents.map((hero, index) => (
        <motion.div
          key={index}
          className={`h-full ${index === currentIndex ? "block" : "hidden"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
        >
          <div
            key={hero.id}
            className="relative flex justify-center lg:items-center h-full pt-16 lg:pt-0 "
          >
            <motion.div
              className="carousel-text"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
            >
              <div className="max-w-3xl px-8 lg:px-0 mx-auto text-center space-y-4">
                <div className="flex gap-2 items-center justify-center">
                  <img
                    className="left-vec"
                    src="assets/images/icon/sub-title-vec.svg"
                    alt="sub-title-vec"
                  />
                  <span className="font-jost lg:text-lg text-[#bf9444]">
                    {hero.welcomeText}
                  </span>
                  <img
                    className="right-vec"
                    src="assets/images/icon/sub-title-vec.svg"
                    alt="sub-title-vec"
                  />
                </div>
                <h1 className="text-4xl lg:text-[80px] font-cormorant font-bold lg:leading-[80px] text-white">
                  {hero.mainText}
                </h1>
                <p className="font-jost lg:text-lg pt-3  text-white">
                  {hero.subText}
                </p>
                <div className="pt-6 flex justify-center">
                  <a
                    className="flex items-center gap-2 border border-[#bf9444] text-white px-6 py-3 rounded-tl-lg rounded-br-lg font-medium text-lg"
                    href="/about"
                  >
                    <i className="bi bi-arrow-up-right-circle"></i>Discover More
                  </a>
                </div>
              </div>
            </motion.div>
            <div className="absolute left-0 lg:w-72 w-40 bottom-0 lg:bottom-auto">
              <img src="assets/images/icon/union-left.svg" alt="union-left" />

              <div className="absolute lg:w-52  left-10 lg:left-[68px] top-3 lg:top-[14px]">
                <SpinningAnimation>
                  <img
                    className="w-[110px] h-[110px] lg:h-auto  lg:w-auto"
                    src="assets/images/bg/banner-img-5.png"
                    alt="banner-img-5"
                  />
                </SpinningAnimation>
              </div>
              <button
                onClick={handlePrev}
                className="bg-[#bf9444] text-white hover:bg-black transition-all h-5 lg:h-11 w-5 lg:w-11 rounded-full absolute z-10 top-14 lg:top-[94px] left-1 lg:left-4"
              >
                <i class="bi bi-chevron-left"></i>
              </button>
            </div>
            <div className="absolute right-0 lg:w-72  w-40 bottom-0 lg:bottom-auto">
              <img
                src="/assets/images/icon/union-right.svg"
                alt="union-right"
              />
              <div className="absolute lg:w-52 right-10 lg:right-[68px] top-3 lg:top-[14px]">
                <SpinningAnimation>
                  <img
                    className="w-[110px] h-[110px] lg:h-auto  lg:w-auto"
                    src="/assets/images/bg/banner-img-6.png"
                    alt="banner-img-5"
                  />
                </SpinningAnimation>
              </div>
              <button
                onClick={handleNext}
                className="bg-[#bf9444] text-white hover:bg-black transition-all h-5 lg:h-11 w-5 lg:w-11  rounded-full absolute z-10 top-14 lg:top-[94px] right-1 lg:right-4"
              >
                <i class="bi bi-chevron-right"></i>
              </button>
            </div>
            <div className="hidden lg:block absolute bottom-0 mb-16 right-0 px-16 ">
              <ul className="flex gap-8 text-sm text-white">
                <li>
                  <a href="https://www.facebook.com/">Facebook</a>
                </li>
                <li>
                  <a href="https://twitter.com/">Twitter</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">Instagram</a>
                </li>
                <li>
                  <a href="https://www.skype.com/">Skype</a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
