import { Button } from "@/components/ui/button.tsx";
import Reviews from "@/components/Reviews";
import YoutubeAndTelegram from "./YoutubeAndTelegram";

const Head = () => {
  return (
    <header className="relative bg-cover  mt-[90px] bg-right text-start ">
      <div
        className="flex flex-col gap-2 mb-[46px] md:bg-[url('/src/assets/tg.png')] py-[60px] px-[10px] md:bg-[length:60%] bg-transparent"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
        }}
      >
        <h1 className="font-bold text-[26px] md:text-3xl lg:text-4xl text-center md:text-start w-full">
          Добро пожаловать в TopMusicBot! 🎶
        </h1>
        <p className="my-4 text-[16px] md:text-[18px]   overflow-hidden text-center md:text-start">
          <span className="text-1xl font-bolder">
            TopMusicBot — ваш идеальный помощник в мире музыки и кино.
          </span>
          <br /> С помощью нашего бота вы можете:
          <br /> Улучшить качество JPG изображений: Загружайте фото для
          улучшения.
          <br /> Искать фильмы по сценам или типу: Описание сцены — и бот найдет
          фильм!
          <br /> Находить похожие песни: Укажите название, и бот предложит
          похожие треки. <br />
          Определять жанр композиции: Просто отправьте название песни.
          <br /> Создавать плейлисты по настроению: Опишите настроение, и бот
          соберет подходящие треки.
        </p>
        <Button
          size="sm"
          className=" py-[8px] px-[16px]  bg-red-600 mx-auto md:ml-0"
        >
          Open Channel
        </Button>
      </div>
      <YoutubeAndTelegram />
      <Reviews />
    </header>
  );
};

export default Head;
