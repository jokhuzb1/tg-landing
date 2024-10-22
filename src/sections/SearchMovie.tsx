import { motion } from "framer-motion";
import desktopAndPhoneRight from "@/assets/desktop-phone-right.png";

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
  return (
    <div className="bg-[#F6F6F6]">
      <div className=" max-w-[1350px] mx-auto w-full py-[17px] flex justify-between items-end md:items-center flex-col gap-[30px] md:gap-[70px] md:flex-row overflow-x-hidden">
        <motion.div
          className="flex flex-col items-center md:items-end mx-auto justify-center md:justify-end gap-[30px] md:gap-[85px]"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="justify-center px-3 md:justify-end items-center md:items-end w-full gap-[17px] flex-col max-w-[500px]">
            <h2 className="md:text-3xl text-[24px] lg:text-4xl font-[500] md:text-end text-center">
              Поиск фильмов по сценам или типу
            </h2>
            <p className="text-[16px] md:text-end text-center">
              Найдите фильм, который помните по сцене или выберите тип фильма.
              TopMusicBot предоставит вам список фильмов, соответствующих вашим
              запросам.
            </p>
          </div>
          <a
            href="https://t.me/Youtu2018bot"
            className="block text-white py-2 px-4 bg-[#0F172A] rounded-[6px]"
          >
            Скачать Видео
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
    </div>
  );
};

export default SearchMovie;
