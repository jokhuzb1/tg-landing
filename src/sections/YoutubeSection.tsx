import desktopAndPhoneLeft from "@/assets/youtube-for-section.png";
import { motion } from "framer-motion";

const YoutubeSection = () => {
  return (
    <motion.div
      className="bg-[#F6F6F6] w-full py-[17px]  md:py-0 flex justify-between items-start md:items-center flex-col-reverse gap-[70px] md:flex-row overflow-x-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div>
        <img src={desktopAndPhoneLeft} alt="desktop and phone image" />
      </div>
      <motion.div
        className="flex flex-col px-3 md:items-start items-center mx-auto md:justify-start justify-center gap-[20px] "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex justify-start items-start gap-[12px] flex-col max-w-[500px]">
          <h2 className="text-[24px] md:text-3xl  font-[500] md:text-start text-center w-full">
            Почему TopMusicBot – ваш выбор
          </h2>
          <p className=" text-[16px]  md:text-start text-center">
            У скачивания видео через TopMusicBot есть несколько плюсов:
          </p>
          <div className="ml-2 flex justify-start items-start gap-[2px] flex-col max-w-[500px]">
            <p className=" text-[14px]  md:text-start text-center">
              ⦁ Любое разрешение видео. Большинство популярных сервисов для
              скачивания роликов предлагают ограниченный выбор разрешений – не
              больше 720Р или 1080Р. С TopMusicBot вы можете скачать видео даже
              в 4К или 8К.
            </p>
            <p className=" text-[14px]  md:text-start text-center">
              ⦁ Нет ограничений на скорость. Время скачивания зависит только от
              скорости вашего интернета. Нет очереди и лимита по трафику.
            </p>
            <p className=" text-[14px]  md:text-start text-center">
              ⦁ Всегда под рукой. Не нужно искать сервисы с Гугле или Яндексе.
              Просто скопируйте ссылку в бот, и загрузка начнется автоматически.
            </p>
          </div>
          <p className=" text-[16px]  md:text-start text-center">
            Главный плюс TopMusicBot – ничего не нужно скачивать! Загрузка видео
            происходит в два клика.
          </p>
        </div>
        <a
          href="https://t.me/Youtu2018bot"
          className="block text-white py-2 px-4 bg-[#0F172A] rounded-[6px]"
        >
          Продолжить
        </a>
      </motion.div>
    </motion.div>
  );
};

export default YoutubeSection;
