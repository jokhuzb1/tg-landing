import { motion } from "framer-motion";
import desktopAndPhoneRight from "@/assets/telegram-for-section.png";

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

const TelegramSection = () => {
  return (
    <div className="bg-[#F6F6F6] w-full py-[17px] md:py-0  flex justify-between items-end md:items-center flex-col gap-[30px] md:gap-[70px] md:flex-row overflow-x-hidden">
      <motion.div
        className="flex flex-col items-center md:items-end mx-auto justify-center md:justify-end gap-[30px] md:gap-[85px]"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="justify-center md:justify-end items-center md:items-end w-full gap-[17px] flex-col max-w-[500px]">
          <h2 className="md:text-3xl text-[24px] lg:text-4xl font-[500] md:text-end text-center">
            Скачивание с YouTube в 2 клика
          </h2>
          <p className="text-[16px] md:text-end text-center">
            Скачивайте видео и аудио с YouTube быстро и легко. Наш Telegram-бот
            позволяет загружать контент всего за два клика, не требуя
            дополнительного ПО.
          </p>
        </div>
        <a
          href="/"
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

export default TelegramSection;
