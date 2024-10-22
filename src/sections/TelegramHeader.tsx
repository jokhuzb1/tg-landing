import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const TelegramHeader = ({ sectionRefs }) => {
  return (
    <header
      className="w-full min-h-[500px] md:bg-[url('/src/assets/header-tg.png')] bg-no-repeat bg-right  max-h-[500px] md:px-[100px] flex md:justify-start justify-center items-center py-10 mt-[80px]  overflow-hidden"
      ref={sectionRefs}
      style={{
        backgroundSize: "800px",
      }}
    >
      <motion.div
        className="flex flex-col w-full px-3 items-center justify-center md:justify-start md:items-start text-center md:text-left h-full  max-w-[550px] gap-8"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
          Скачивание с YouTube в 2 клика
        </h2>
        <p className="text-lg text-gray-600">
          Скачивайте видео и аудио с YouTube быстро и легко. Наш Telegram-бот
          позволяет загружать контент всего за два клика, без необходимости
          устанавливать дополнительное ПО.
        </p>
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
