"use client";
import Carousel from "./Carousel";

export default function HeroSection() {
  return (
    <div>
      <div className="h-[calc(100vh-100px)] banner__hero">
        <div class="banner-vector">
          <img
            class="hidden lg:block absolute left-[400px] min-w-[170px] top-[100px] opacity-10"
            src="assets/images/icon/shape2.svg"
            alt=""
          />
          <img
            class="hidden lg:block absolute right-[400px] min-w-[170px] bottom-[100px] opacity-10"
            src="assets/images/icon/shape1.svg"
            alt=""
          />
        </div>
        <Carousel />
      </div>
    </div>
  );
}
