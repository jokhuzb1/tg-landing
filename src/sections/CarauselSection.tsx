import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import lady from "/src/assets/rose.webp";
import cinema from "/src/assets/cinema.webp";
import music from "/src/assets/headphone-guy_1.webp";
import playlist from "/src/assets/microphone.webp";
import header from "/src/assets/robo-singer.webp";
import gender from "/src/assets/lady.webp";

const images = [
  {
    img: header,
    words: "Добро пожаловать в TopMusicBot! 🎶",
    isHeader: true,
  },
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
  const [isMobile, setIsMobile] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Handle screen size detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Preload images
  useEffect(() => {
    const imagePromises = images.map((i) => {
      const img = new Image();
      img.src = i.img;
      return new Promise((resolve) => {
        img.onload = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
    });
  }, [isMobile]);

  const handleClick = () => {
    location.href = "https://t.me/Youtu2018bot";
  };

  if (!imagesLoaded) {
    return (
      <div className="flex justify-center items-center h-full w-full">
        Loading...
      </div>
    );
  }

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
      className="h-screen"
    >
      {images.map((i, idx) => (
        <SwiperSlide
          key={idx}
          style={{
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${i.img})`,
          }}
          className=" w-full  h-full px-2"
        >
          <div className="flex justify-center items-center w-full h-full">
            <div className="bg-[rgba(255, 255, 255, 0)] flex justify-center items-center flex-col py-[8px] px-[16px] backdrop-blur-[21px] max-w-[500px]  backdrop-saturate-[138%]  rounded-md p-2 ">
              {i.isHeader ? (
                <>
                  <h1 className="font-bold text-[26px] text-white md:text-3xl lg:text-4xl text-center w-full">
                    {i.words}
                  </h1>
                  <p className="my-4 text-[16px] max-w-[400px] md:text-[18px] overflow-hidden text-center text-white">
                    TopMusicBot — ваш идеальный помощник в мире музыки и кино. С
                    помощью нашего бота вы можете:
                  </p>
                </>
              ) : (
                <p className="my-4 text-[16px] max-w-[400px] md:text-[18px] overflow-hidden text-center text-white">
                  {i.words}
                </p>
              )}

              <div className="w-full flex justify-center items-center">
                <Button
                  size="sm"
                  onClick={handleClick}
                  className="py-[8px] px-[16px] bg-red-600 mx-auto"
                >
                  Открыть Бот
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarauselSection;
