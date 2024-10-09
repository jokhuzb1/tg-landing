import { Button } from "@/components/ui/button.tsx";
import Reviews from "@/components/Reviews";
import YoutubeAndTelegram from "./YoutubeAndTelegram";

const Head = () => {
  return (
    <header className="relative bg-cover  mt-[90px] bg-right text-start ">
      <div
        className="flex flex-col gap-2 mb-[46px] bg-[url('/src/assets/tg.png')] py-[20px] px-[10px] md:bg-[length:60%] bg-[length:100%]"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
        }}
      >
        <h1
          className="font-bold text-4xl md:text-5xl lg:text-6xl "
          style={{ fontSize: "2.5rem", lineHeight: "3.5rem" }}
        >
          Добро пожаловать в TopMusicBot! 🎶
        </h1>
        <p
          className="my-4 text-lg md:text-xl lg:text-2xl max-w-5xl overflow-hidden"
          style={{ fontSize: "1.25rem", lineHeight: "2rem" }}
        >
          <span className="text-2xl font-bolder">
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
        <Button size="sm" className="w-24 bg-red-600">
          Open Channel
        </Button>
      </div>
      <YoutubeAndTelegram />
      <Reviews />
    </header>
  );
};

export default Head;
