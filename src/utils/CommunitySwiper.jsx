import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const CustomSwiper = ({ items }) => {
  return (
    <div className="relative w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
      <Swiper
        slidesPerView="auto"
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
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center mt-8 mb-32 shadow-lg rounded-2xl">
              <div className="p-4">
                <img src={item.image} className="w-[100vh] rounded-2xl" />
                <h1 className="text-2xl mt-6">{item.name}</h1>
                <p className="text-slate-500 mt-2">{item.type}</p>
                <p className="text-slate-500 mt-2">{item.subscribers}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSwiper;
