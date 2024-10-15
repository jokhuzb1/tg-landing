import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import lady from "/src/assets/kinchabi.png";
import ladyMobile from "/src/assets/kinchabi.webp";
import cinema from "/src/assets/3d-cinema-film-reel.jpg";
import cinemaMobile from "/src/assets/3d-cinema-film-reel.webp";
import music from "/src/assets/music-notes.png";
import musicMobile from "/src/assets/music-notes.webp";
import playlist from "/src/assets/playlist.png";
import playlistMobile from "/src/assets/playlist.webp";
import header from "/src/assets/header.jpg";
import headerMobile from "/src/assets/header.webp";
import gender from "/src/assets/gender-music.png";
import genderMobile from "/src/assets/gender-music.webp";

const images = [
  {
    img: { desktop: header, mobile: headerMobile },
    words: "Добро пожаловать в TopMusicBot! 🎶",
    isHeader: true,
  },
  {
    img: { desktop: lady, mobile: ladyMobile },
    words: "Улучшить качество JPG изображений: Загружайте фото для улучшения.",
  },
  {
    img: { desktop: cinema, mobile: cinemaMobile },
    words:
      "Искать фильмы по сценам или типу: Описание сцены — и бот найдет фильм!",
  },
  {
    img: { desktop: music, mobile: musicMobile },
    words:
      "Находить похожие песни: Укажите название, и бот предложит похожие треки.",
  },
  {
    img: { desktop: gender, mobile: genderMobile },
    words: "Определять жанр композиции: Просто отправьте название песни.",
  },
  {
    img: { desktop: playlist, mobile: playlistMobile },
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
      img.src = isMobile ? i.img.mobile : i.img.desktop;
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
    return <div>Loading...</div>; // Loader while images are loading
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
    >
      {images.map((i, idx) => (
        <SwiperSlide
          key={idx}
          style={{
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${isMobile ? i.img.mobile : i.img.desktop})`,
          }}
          className="w-full flex justify-center items-center h-screen px-2 text-white tracking-wider font-medium"
        >
          <div
            className={`py-[8px] px-[16px] flex justify-center items-center flex-col w-max rounded-md p-2 text-white ${
              isMobile ? "" : "backdrop-blur-[21px] backdrop-saturate-[138%]"
            }`}
          >
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
              <p className="my-4 text-[1.2rem] max-w-[400px] md:text-[18px] overflow-hidden text-center">
                {i.words}
              </p>
            )}

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
