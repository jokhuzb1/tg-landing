import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const text = [
  {
    t: "Улучшение фотографий",
    b: `Загружайте фото для повышения качества и удаления шума. 
    Можно использовать базовые настройки. После обработки получите улучшенное
            изображение в архиве.`,
  },
  {
    t: "Поиск фильма по сцене или сюжету",
    b: `Введите описание сцены, и нейросеть подберет фильмы. Вы получите
            список с обложками.`,
  },
  {
    t: " Копирайтинг с помощью нейросети",
    b: `Создание текстов по вашему запросу — от писем до идей для YouTube.
            Быстрая генерация оригинальных текстов.`,
  },
];

export const Slider = () => {
  return (
    <div className="w-full  max-w-2xl mx-auto">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        allowTouchMove={false}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={2000}
        modules={[Autoplay]}
        className=" w-full"
      >
        {text.map((i, index) => (
          <SwiperSlide key={index} className="w-full">
            <div className="flex items-center justify-center flex-col ">
              <h3 className="font-[500] md:text-start text-center text-[19px] mb-1 w-full ">
                {i.t}
              </h3>
              <p className="font-[400] leading-[24px] text-gray-500 md:text-start text-center">
                {i.b}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
