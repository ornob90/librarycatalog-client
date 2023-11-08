import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  EffectCube,
  Autoplay,
} from "swiper/modules";
// import "swiper/swiper-bundle.min.css";
import "swiper/css/bundle";

const Slider = ({ images, loading }) => {
  return (
    <>
      {loading ? (
        <div className="h-[450px] w-full flex justify-center items-center">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, EffectCube]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="w-full h-[80%] -z-10"
        >
          {images?.map((image) => (
            <SwiperSlide key={image}>
              <img
                src={image}
                className="h-[450px] w-full object-cover"
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Slider;
