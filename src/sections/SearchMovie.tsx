import { motion } from "framer-motion";
import desktopAndPhoneRight from "@/assets/desktop-phone-right.png";
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

const SearchMovie = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#F6F6F6] w-full py-[17px] flex justify-between items-end md:items-center flex-col gap-[30px] md:gap-[70px] md:flex-row overflow-x-hidden">
      <motion.div
        className="flex flex-col items-center md:items-end mx-auto justify-center md:justify-end gap-[30px] md:gap-[85px]"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className=" flex justify-center px-3 md:justify-end items-center md:items-end w-full gap-[17px] flex-col max-w-[500px]">
          <h2 className="md:text-3xl text-[24px] lg:text-4xl font-[500] md:text-end text-center">
            Поиск фильмов по сценам и типу
          </h2>
          <p className="text-[16px] md:text-end text-center max-w-[450px] ">
            Пытаетесь вспомнить название фильма по сцене, но не можете? Вам
            поможет TopMusicBot! Это нейросеть для поиска фильма по текстовому
            описанию сцены. Можно воспользоваться форумом Кинопоиска или поиском
            в Яндексе, но:
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
                Придется ждать ответа от других участников;
              </li>
              <li className="text-start">Перебирать десятки сайтов;</li>
              <li className="text-start">
                Название фильма могут и не вспомнить.
              </li>
            </ul>

            <p className="mt-1 text-end">
              TopMusicBot найдет фильм быстро по описанию даже короткой сцены
              или отрывка.
            </p>

            <h3 className="text-lg font-semibold mt-4  text-end">
              Почему TopMusicBot – лучший помощник в поиске фильмов?
            </h3>
            <p className="mt-1 text-end">
              Зачем пользоваться TopMusicBot, если есть Яндекс и куча форумов
              для любителей кино? Есть три причины:
            </p>
            <ul className="list-disc ml-4">
              <li className="text-start">
                <strong> Вам ничего не нужно делать! </strong>Вместо
                самостоятельного поиска и перебора кучи сайтов, просто задайте
                текстовый запрос. Причем необязательна высокая точность –
                опишите то, что помните.
              </li>
              <li className="text-start">
                <strong> TopMusicBot найдет любой фильм. </strong>Докуметалка,
                триллер, боевик, независимое и авторское кино – все это вы
                сможете найти в боте.
              </li>
              <li className="text-start">
                <strong> На поиск уйдет минимум времени. </strong>Всего за пару
                минут вы найдете нужный фильм или подборку кино, где описанная
                сцена встречается.
              </li>
            </ul>
            <h3 className="text-lg font-semibold mt-4  text-end">
              Что еще может TopMusicBot?
            </h3>
            <p className="mt-1 text-end">
              Часами пытаетесь найти кино, но ни подборки, ни топы, ни даже
              рекомендации сервисов не помогают? Просто задайте тип фильмов,
              которые вам нравятся, и TopMusicBot соберет подборку картин.
              <br />
              <br />
              Подборка основана на ваших предпочтениях, которые вы задаете.
              Здесь нет типичных разбивок по жанрам или отзывам критиков. Любые
              фильмы: от голливудской и советской классики, до кино категории В
              и Z.
              <br />
              <br />
              Попробуйте TopMusicBot и найдите интересный фильм на вечер для
              самостоятельного просмотра или отдыха с компанией друзей!
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

export default SearchMovie;
