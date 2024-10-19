import { motion } from "framer-motion";
import desktopAndPhoneRight from "@/assets/similar-song.jpeg";
import SeeMore from "@/components/SeeMore";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

const SimilarSongs = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#F6F6F6] w-full py-[17px] flex justify-between items-end md:items-center flex-col gap-[30px] md:gap-[70px] md:flex-row overflow-x-hidden">
      <motion.div
        className="flex flex-col items-center md:items-end mx-auto justify-center md:justify-end gap-[30px] md:gap-[85px] w-full"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className=" flex justify-center px-3 md:justify-end items-center  md:items-end w-full gap-[17px] flex-col max-w-[500px]">
          <h2 className="md:text-3xl text-[24px] lg:text-4xl font-[500] md:text-end text-center">
            Поиск похожих песен
          </h2>
          <p className="text-[16px] md:text-end text-center max-w-[450px] ">
            Хотите найти больше крутой музыки, но в чартах и подборках нет
            ничего интересно? Наш бот найдет для вас треки, которые вам
            понравятся.
            <br />
            Создайте свой уникальный плейлист с музыкой для тренировок, поездок,
            работы или учебы.
            <br />
            Весь поиск укладывается в четыре шага:
            <br />
            <button
              onClick={() => setOpen(!open)}
              className="underline text-[16px]  md:text-end text-center "
            >
              {open ? "Узнать Меньше" : "Узнать Больше"}
            </button>
          </p>
          <SeeMore
            open={open}
            className="w-full max-w-[500px] *:text-center *:md:text-start"
          >
            <ul className="list-disc ml-4">
              <li className="text-start">
                Запустите _бот_ и нажмите кнопку «Start».
              </li>
              <li className="text-start">
                Введите название группы, которая вам нравится.
              </li>
              <li className="text-start">
                Бот пришлет подборку музыки с похожим вайбом, темпом, вокалом и
                жанром.
              </li>
              <li className="text-start">
                Нажмите на кнопку «Загрузка» и скачайте музыку в удобном
                формате.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-4  text-end">
              Почему TopMusicBot – лучший помощник в поиске музыки
            </h3>

            <p className="mt-1 text-end">
              Существуют тысячи площадок, где вы можете посмотреть разбивку по
              жанрам или поделиться опытом с меломанами. Зачем же тогда
              использовать TopMusicBot? На это есть три причины:
            </p>
            <ul className="list-disc ml-4">
              <li className="text-start">
                <strong>Бот ищет музыку на ваш вкус!</strong>Выбор не искажается
                рекомендациями других меломанов или ограничивается жанром. Вы
                задаете ту музыку, которую хотите слушать, и бот находит похожие
                композиции. Площадки, как Spotify, опираются на весь треклист,
                когда TopMusicBot нп композиции, которые вы хотите слушать здесь
                и сейчас.
              </li>
              <li className="text-start">
                <strong>Вы получаете результат моментально. </strong>Не придется
                ждать советов или долго искать похожие композиции в подборках.
                На поиск похожей музыки у вас уйдет не больше 2 минут.
              </li>
              <li className="text-start">
                <strong> Бот доступен в любой момент.</strong>Хотите искать
                новую музыку на учебе или в поездке? Бот всегда под рукой и
                готов выручить!
              </li>
            </ul>
            <p className="mt-1 text-end">
              Сразу после поиска музыки вы сможете скачать композиции на свой
              телефон и слушать. Рекомендательный алгоритм многофакторный и
              учитывает не только жанр, но и настроение, скорость, вокал и
              другие параметры. Попробуйте сами и найдите музыку, которая вам
              будет по душе.
            </p>
          </SeeMore>
        </div>
        <a
          href="https://t.me/Youtu2018bot"
          className="block text-white py-2 px-4 bg-[#0F172A] rounded-[6px]"
        >
          Продолжить
        </a>
      </motion.div>
      <div className="overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInRight}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img src={desktopAndPhoneRight} alt="desktop and phone image" />
        </motion.div>
      </div>
    </div>
  );
};

export default SimilarSongs;
