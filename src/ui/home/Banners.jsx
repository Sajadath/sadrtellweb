import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import banner1 from "../../banners/banner1.jpg";
import banner2 from "../../banners/banner2.jpg";
import banner3 from "../../banners/banner3.jpg";

import { useRef, useState } from "react";

function Banners() {
  const [activeBanner, setActiveBanner] = useState(1);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveBanner(swiper.realIndex + 1);
  };

  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
      setActiveBanner(index + 1);
    }
  };
  return (
    <div className="relative w-full">
      <Swiper
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        mousewheel={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src={banner1}
              alt="banner1"
              className="relative h-[300px] w-full lg:h-[572px]"
            />
            <button className="hover:bg-sadrtell active:bg-sadrtell/50 absolute top-[20%] right-[8%] cursor-pointer rounded-4xl bg-white px-5 py-2 hover:text-white">
              برای خرید اینجا کلیک کنید
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={banner2}
            alt="banner2"
            className="h-[300px] w-full lg:h-[572px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={banner3}
            alt="banner3"
            className="h-[300px] w-full lg:h-[572px]"
          />
        </SwiperSlide>
      </Swiper>
      <div className="absolute bottom-2 left-[50%] z-50 flex translate-x-[-50%] items-center justify-around gap-2 rounded-3xl bg-white/30 px-6 py-3 backdrop-blur-2xl">
        <div
          onClick={() => goToSlide(0)}
          className={`size-3 cursor-pointer rounded-full transition-all duration-500 ${
            activeBanner === 1
              ? "size-4 animate-bounce bg-black"
              : "bg-black/20"
          }`}
        ></div>
        <div
          onClick={() => goToSlide(1)}
          className={`size-3 cursor-pointer rounded-full transition-all duration-500 ${
            activeBanner === 2
              ? "size-4 animate-bounce bg-black"
              : "bg-black/20"
          }`}
        ></div>
        <div
          onClick={() => goToSlide(2)}
          className={`size-3 cursor-pointer rounded-full transition-all duration-500 ${
            activeBanner === 3
              ? "size-4 animate-bounce bg-black"
              : "bg-black/20"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default Banners;
