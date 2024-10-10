import { motion } from "framer-motion";
import desktopAndPhoneRight from "@/assets/desktop-phone-right.png";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const SearchMovie = () => {
  return (
    <div className="bg-[#F6F6F6] w-full py-[17px] flex justify-between items-end md:items-center flex-col gap-[70px] md:flex-row">
      <motion.div
        className="flex flex-col items-center mx-auto justify-center gap-[30px] md:gap-[85px]"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="justify-end items-start gap-[17px] flex-col max-w-[500px]">
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
          href="/"
          className="block text-white py-2 px-4 bg-[#0F172A] rounded-[6px]"
        >
          Продолжить
        </a>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInRight}
        viewport={{ once: true, amount: 0.2 }}
      >
        <img src={desktopAndPhoneRight} alt="desktop and phone image" />
      </motion.div>
    </div>
  );
};

export default SearchMovie;
