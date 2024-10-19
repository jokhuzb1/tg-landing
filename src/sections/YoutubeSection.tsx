import desktopAndPhoneLeft from "@/assets/youtube-for-section.png";
import SeeMore from "@/components/SeeMore";
import { motion } from "framer-motion";
import { useState } from "react";

const YoutubeSection = () => {
  const [open, setOpen] = useState(false);

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
            Смотреть видео
          </h2>
          <p className=" text-[16px]  md:text-start text-center">
            В России не работает YouTube, а нормальных альтернатив все еще нет.
            Большинство пользователей либо мирятся с низкой скорость, при
            просмотре через VPN, либо отказываются от любимого досуга.
            <br />
            TopMusicBot – решит проблему с доступом к YouTube. Смотрите новые
            видео любимых блогеров в Telegrame без тормозов и в хорошем
            качестве. Ничего не нужно скачивать или настраивать – просто
            добавьте каналы и получайте новинки.{" "}
            <button
              onClick={() => setOpen(!open)}
              className="underline text-[16px]  md:text-start text-center "
            >
              {open ? "Узнать Меньше" : "Узнать Больше"}
            </button>
          </p>
          <SeeMore
            open={open}
            className="w-full max-w-[500px] *:text-center *:md:text-start"
          >
            <h3 className="text-lg font-semibold mt-4  text-start">
              Плюсы TopMusicBot
            </h3>
            <p className="mt-1 text-start">
              У TopMusicBot есть несколько плюсов, в сравнении с VPN:
            </p>
            <ul className="list-disc ml-4">
              <li className="text-start">
                Не нужно мириться с низкой скоростью интернета. Вы можете
                параллельно сидеть в социальных сетях или играть в онлайн-игры.
              </li>
              <li className="text-start">
                Высокое качество. Большинство обходов замедления Youtube
                позволяют запускать видео в 720р. С TopMusicBot вы можете
                смотреть ролики в FullHD и выше.
              </li>
              <li className="text-start">
                Вы получаете новинки. Сегодня большинство пользователей не
                получают уведомления. TopMusicBot пришлет вам новинки от любимых
                блогеров, поэтому вы всегда будете в курсе.
              </li>
              <li className="text-start">
                Ничего не нужно скачивать и настраивать. Отправьте боту ссылку и
                смотрите видео прямо в мессенджере.
              </li>
            </ul>

            <p className="mt-1 text-start">
              По подписке вы можете смотреть видео на Youtube без ограничений.
              Забудьте про тормоза и низкую скорость соединения!
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
    </motion.div>
  );
};

export default YoutubeSection;
