import SeeMore from "@/components/SeeMore";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const TelegramHeader = ({ sectionRefs }) => {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="w-full min-h-[500px] md:bg-[url('/src/assets/telegram-for-section.png')] bg-no-repeat bg-right   md:max-h-[500px] md:px-[100px] flex md:justify-start justify-center items-center py-10 mt-[80px]  overflow-hidden"
      ref={sectionRefs}
      style={{
        backgroundSize: "800px",
      }}
    >
      <motion.div
        className="flex flex-col w-full px-3 items-center justify-center md:max-h-[400px] md:overflow-y-auto md:justify-start md:items-start text-center md:text-left h-full   gap-8"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
          Скачивание видео
        </h2>
        <p className="text-lg text-gray-600 max-w-[700px]">
          Хотите смотреть видео с YouTube без подключения к интернету?
          Видеохостинг предлагает только 1 вариант – сохранение роликов с
          подпиской Premium. Но сегодня оплатить его российской картой
          невозможно. <br />
          <br />
          Хотите скачивать видео без ограничений? Воспользуйтесь TopMusicBot –
          нашим ботом в Telegram!{" "}
          <button
            onClick={() => setOpen(!open)}
            className="underline text-[16px]  md:text-start text-center "
          >
            {open ? "Узнать Меньше" : "Узнать Больше"}
          </button>
        </p>
        <SeeMore
          open={open}
          className="w-full max-w-[500px] *:text-gray-600 *:text-center *:md:text-start"
        >
          <h3 className="text-lg font-semibold mt-4  text-start">
            Почему TopMusicBot – ваш выбор
          </h3>
          <p className="mt-1 text-start">
            У скачивания видео через TopMusicBot есть несколько плюсов:
          </p>
          <ul className="list-disc ml-4">
            <li className="text-start">
              Любое разрешение видео. Большинство популярных сервисов для
              скачивания роликов предлагают ограниченный выбор разрешений – не
              больше 720Р или 1080Р. С TopMusicBot вы можете скачать видео даже
              в 4К или 8К.
            </li>
            <li className="text-start">
              Нет ограничений на скорость. Время скачивания зависит только от
              скорости вашего интернета. Нет очереди и лимита по трафику.
            </li>
            <li className="text-start">
              Всегда под рукой. Не нужно искать сервисы с Гугле или Яндексе.
              Просто скопируйте ссылку в бот, и загрузка начнется автоматически.
            </li>
          </ul>

          <p className="mt-1 text-start">
            Главный плюс TopMusicBot – ничего не нужно скачивать! Загрузка видео
            происходит в два клика.
          </p>

          <h3 className="text-lg font-semibold mt-4  text-start">
            Дополнительные возможности TopMusicBot
          </h3>
          <p className="mt-1 text-start">
            Если вы нашли крутую музыку на YouTube и хотите убрать видеоряд –
            воспользуйтесь ботом. TopMusicBot умеет скачивать звуковую дорожку
            без видео. Загрузите ее в удобном формате – WAV или MP3 – и слушайте
            на телефоне, компьютере или в машине.
            <br />x сами бот TopMusicBot. Кроме скачивания видео с Ютуб, вы
            сможете обойти блокировку видеохостинга. Бот будет присылать вам
            новинки любимых блогеров, чтобы вы смогли посмотреть их первыми.
          </p>
        </SeeMore>
        <a
          href="https://t.me/Youtu2018bot"
          className="bg-red-600 hover:bg-red-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg"
        >
          Продолжить
        </a>
      </motion.div>
    </header>
  );
};

export default TelegramHeader;
