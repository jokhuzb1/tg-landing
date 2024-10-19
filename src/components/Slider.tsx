import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const text = [
  {
    b: `Он всегда под рукой. 
    Срочно понадобилась подборка музыки, но у вас нет времени на составление плейлиста? 
    Доверьтесь TopMusicBot – он сделает это за минуту.`,
  },
  {
    b: `Музыка под любое настроение. Вне зависимости, чем вы занимаетесь и в каком расположении духа, бот подберет плейлист для вашего настроения.`,
  },
  {
    b: `Минимум шагов. Просто опишите свое настроение и бот автоматически подберет музыку для вас. Не нужно отвечать на кучу вопросов – только простой текстовый запрос. `,
  },
  {
    b: `Возможно скачать музыку. Кроме поиска композиций, вы можете ее скачать в любом удобном формате прямо из бота. `,
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
