import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const VacationSwiper = ({ items }) => {
  return (
    <div className="relative w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-gradient-to-t from-white via-white via to-transparent">
      <Swiper
        slidesPerView="auto"
        spaceBetween={24}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={3000}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
          },
          640: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3.5,
          },
          1280: {
            slidesPerView: 4.5,
          },
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mt-8 pl-36"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-[310px] h-[200px] rounded-lg"
              />
              <p className="absolute bottom-5 left-6 text-white text-2xl sm:text-xl">
                {item.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VacationSwiper;
