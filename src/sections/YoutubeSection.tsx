import desktopAndPhoneLeft from "@/assets/youtube-for-section.png";
import { motion } from "framer-motion";

const YoutubeSection = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <motion.div
        className=" max-w-[1350px] mx-auto w-full py-[17px] md:py-0 flex justify-between items-start md:items-center flex-col-reverse gap-[70px] md:flex-row overflow-x-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div>
          <img src={desktopAndPhoneLeft} alt="desktop and phone image" />
        </div>
        <motion.div
          className="flex flex-col px-3 md:items-start items-center mx-auto md:justify-start justify-center gap-[30px] md:gap-[85px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="justify-start items-start gap-[17px] flex-col max-w-[500px]">
            <h2 className="text-[24px] md:text-3xl lg:text-4xl font-[500] md:text-start text-center">
              Новинки YouTube всегда с вами
            </h2>
            <p className=" text-[16px]  md:text-start text-center">
              Следите за новыми видео с любых YouTube-каналов через нашего
              Telegram-бота. Просто отправьте ссылку на канал, и он будет
              уведомлять вас о каждом новом видео.
            </p>
          </div>
          <a
            href="https://t.me/Youtu2018bot"
            className="block text-white py-2 px-4 bg-[#0F172A] rounded-[6px]"
          >
            Попробовать
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default YoutubeSection;
