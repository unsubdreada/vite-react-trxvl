import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const CustomSwiper = ({ items, countSlides }) => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card"); // Функкция вычисления максимальной высоты карточки (по содержимому)
    let maxHeight = 0;

    cards.forEach((card) => {
      maxHeight = Math.max(maxHeight, card.offsetHeight);
    });

    cards.forEach((card) => {
      card.style.height = `${maxHeight}px`;
    });
  }, []);

  return (
    <div className="relative w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
      <Swiper
        spaceBetween={24}
        slidesPerView={countSlides}
        freeMode={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
          1280: {
            slidesPerView: 1,
          },
          1536: {
            slidesPerView: 2.5,
          },
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mt-8 pl-36"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card flex mt-8 mb-9 px-4 py-6 shadow-lg rounded-2xl">
              <div className="w-1/2 overflow-hidden rounded-2xl">
                <img src={item.image} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col flex-grow w-1/2 justify-between m-4">
                <p className="text-slate-500 text-base">{item.name}</p>
                <p className="text-3xl font-bold">{item.text}</p>
                <p className="text-slate-500 text-base">{item.desc}</p>
                <button className="bg-[#2659C3] text-white rounded-full text-sm md:text-base py-3 hover:bg-blue-500 transition duration-300">
                  Book Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSwiper;
