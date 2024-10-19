import desktopAndPhoneLeft from "@/assets/noutbook.png";
import SeeMore from "@/components/SeeMore";
import { motion } from "framer-motion";
import { useState } from "react";

const ChooseGender = () => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="bg-[#F6F6F6] w-full py-[17px] flex justify-between items-start md:items-center flex-col-reverse gap-[70px] md:flex-row overflow-x-hidden"
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
        <div className="flex justify-start items-start gap-[20px] flex-col max-w-[500px] *:text-center *:md:text-start">
          <h2 className="text-[24px] md:text-3xl mt-2 lg:text-4xl font-[500] md:text-start text-center mx-auto md:mx-0">
            Определение жанра
          </h2>
          <p className=" text-[16px]  md:text-start text-center">
            Вам понравилась песня и вы хотите найти больше похожих композиций?
            Проще всего найти ее по жанру, но как его определить? <br />
            TopMusicBot расскажет все, что вы хотите знать о музыке. Это намного
            проще, чем гуглить по нескольким причинам:{" "}
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
            <ul className="list-disc ml-4">
              <li className="text-start">
                Если вы любите нишевую или локальную музыку, то вряд ли
                получится найти о ней информацию. Особенно, если вы слушаете
                группы с малой аудиторией и известностью.
              </li>
              <li className="text-start">
                Вам нравится специфическая музыка, которую создают энтузиасты и
                она не попадает в чарты. Жанров, как гипнагогический поп, зук,
                витч-хаус или фаду, много, но у них почти нет фан-сообществ.
              </li>
            </ul>

            <p className="mt-1 text-start">
              TopMusicBot безошибочно определит жанр песни и поможет собрать
              плейлист крутой музыки, которая вам понравится. Вы сможете найти
              как популярные жанры, так и малоизвестные, нишевые направления,
              как немецкое регги или готическое кантри.
            </p>

            <h3 className="text-lg font-semibold mt-4  text-start">
              Кому будет полезен TopMusicBot?
            </h3>
            <p className="mt-1 text-start">
              Мы разработали TopMusicBot для людей, которые любят музыку и хотят
              расширить свой плейлист. С ним не нужно тратить часы на
              музыкальных площадках, чтобы искать новых исполнителей – на
              определение жанра уйдет не больше минуты.
              <br />
              <br />
              Все, что нужно для определения жанра – отправить песню. Мы
              используем продвинутый алгоритм анализа звука, который разбивает
              песню по темпу, инструментам, BPM и другим параметрам. Поэтому
              результат анализа бота точнее, чем рекомендации других меломанов и
              сайтов с разбивкой по жанрам.
            </p>
            <p className="my-2 text-start">
              Кроме этого, у TopMusicBot есть ряд плюсов:
            </p>
            <ul className="list-disc ml-4">
              <li className="text-start">
                Он всегда под рукой. Вы можете узнать жанр песни в поездке, на
                учебе, за завтраком и в любом другом месте!
              </li>
              <li className="text-start">
                Определение жанра занимает меньше минуты. Вам не придется
                ожидать ответа на форуме или искать исполнителя – только
                отправьте композицию нашему боту.
              </li>
            </ul>
          </SeeMore>
        </div>

        <a
          href="/"
          className="block text-white py-2 px-4 bg-[#0F172A] rounded-[6px]"
        >
          Продолжить
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ChooseGender;
