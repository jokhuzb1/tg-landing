import { Button } from "@/components/ui/button.tsx";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import lady from "/src/assets/kinchabi.png";
import cinema from "/src/assets/3d-cinema-film-reel.jpg";
import music from "/src/assets/music-notes.png";
import playlist from "/src/assets/playlist.png";
import header from "/src/assets/header.jpg";
import gender from "/src/assets/gender-music.png";

const images = [
  {
    img: lady,
    words: "Улучшить качество JPG изображений: Загружайте фото для улучшения.",
  },
  {
    img: cinema,
    words:
      "Искать фильмы по сценам или типу: Описание сцены — и бот найдет фильм!",
  },
  {
    img: music,
    words:
      "Находить похожие песни: Укажите название, и бот предложит похожие треки.",
  },
  {
    img: gender,
    words: "Определять жанр композиции: Просто отправьте название песни.",
  },
  {
    img: playlist,
    words:
      "Создавать плейлисты по настроению: Опишите настроение, и бот соберет подходящие треки.",
  },
];

const CarauselSection = () => {
  const handleClick = () => {
    location.href = "https://t.me/Youtu2018bot";
  };
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `url('${header}')`,
        }}
        className="w-full flex justify-center items-center h-screen px-2"
      >
        <div className="bg-[rgba(255, 255, 255, 0)] py-[8px] px-[16px] backdrop-blur-[21px] flex justify-center items-center flex-col backdrop-saturate-[138%] w-max rounded-md p-2">
          <h1 className="font-bold text-[26px] text-white md:text-3xl lg:text-4xl text-center w-full">
            Добро пожаловать в TopMusicBot! 🎶
          </h1>

          <p className="my-4 text-[16px] max-w-[400px] md:text-[18px] overflow-hidden text-center text-white">
            TopMusicBot — ваш идеальный помощник в мире музыки и кино. С помощью
            нашего бота вы можете:
          </p>

          <div className="w-full flex justify-center items-center">
            <Button
              onClick={handleClick}
              size="sm"
              className="py-[8px] px-[16px] bg-red-600 mx-auto"
            >
              Open Channel
            </Button>
          </div>
        </div>
      </SwiperSlide>

      {images.map((i, idx) => (
        <SwiperSlide
          key={idx}
          style={{
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${i.img})`,
          }}
          className="w-full flex justify-center items-center h-screen px-2 text-white tracking-wider font-medium"
        >
          <div className="bg-[rgba(255, 255, 255, 0)] py-[8px] px-[16px] backdrop-blur-[21px] backdrop-saturate-[138%] flex justify-center items-center flex-col w-max rounded-md p-2 text-white">
            <p className="my-4 text-[1.2rem] max-w-[400px] md:text-[18px] overflow-hidden text-center">
              {i.words}
            </p>

            <div className="w-full flex justify-center items-center">
              <Button
                size="sm"
                onClick={handleClick}
                className="py-[8px] px-[16px] bg-red-600 mx-auto"
              >
                Open Channel
              </Button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarauselSection;
