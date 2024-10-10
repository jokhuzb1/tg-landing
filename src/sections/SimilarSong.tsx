import { motion } from "framer-motion";
import rocket from "@/assets/rocket.png";
import magnifier from "@/assets/magnifier.png";
import pointer from "@/assets/pointer.png";
import download from "@/assets/download.png";
import phone from "@/assets/phone.png";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const SimilarSong = () => {
  return (
    <div className="flex justify-between items-center flex-col md:flex-row gap-4 w-full overflow-x-hidden">
      <motion.div
        className="flex justify-between items-end min-h-[135px] max-h-[290px] h-full flex-col gap-[17px]"
        initial="hidden"
        whileInView="visible"
        variants={fadeInLeft}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col justify-center items-center md:justify-end md:items-end gap-[6px]">
          <img
            src={rocket}
            alt="rocket"
            width={57}
            height={57}
            style={{ maxWidth: "57px", width: "100%", objectFit: "cover" }}
          />
          <div>
            <h5 className="font-[600] text-[16px] leading-[24px] text-center md:text-end">
              Запуск бота
            </h5>
            <p className="font-[400] text-[14px] leading-[21px] text-center md:text-end max-w-[358px] w-full">
              Найдите бота в Telegram и нажмите кнопку «Старт».
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:justify-end md:items-end gap-[6px] ">
          <img
            src={magnifier}
            alt="magnifier"
            width={57}
            height={57}
            style={{ maxWidth: "57px", width: "100%", objectFit: "cover" }}
          />
          <div>
            <h5 className="font-[600] text-[16px] leading-[24px] text-center md:text-end">
              Поиск музыки
            </h5>
            <p className="font-[400] text-[14px] leading-[21px] text-center md:text-end max-w-[358px] w-full">
              Введите название музыки, которую вы ищете. Бот автоматически
              найдет соответствующую музыку.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }}
      >
        <img src={phone} alt="phone" />
      </motion.div>

      <motion.div
        className="flex justify-between items-start flex-col max-h-[290px] min-h-[135px] h-full gap-[17px]"
        initial="hidden"
        whileInView="visible"
        variants={fadeInRight}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col justify-center md:justify-start items-center md:items-start gap-[6px] max-w-[358px]">
          <img
            src={pointer}
            alt="pointer"
            width={57}
            height={57}
            style={{ maxWidth: "57px", width: "100%", objectFit: "cover" }}
          />
          <div>
            <h5 className="font-[600] text-[16px] leading-[24px] text-center md:text-start">
              Выбор музыки
            </h5>
            <p className="font-[400] text-[14px] leading-[21px] text-center md:text-start max-w-[358px] w-full">
              Выберите понравившуюся вам музыку из результатов поиска.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center md:justify-start items-center md:items-start gap-[6px] max-w-[358px]">
          <img
            src={download}
            alt="download"
            width={57}
            height={57}
            style={{ maxWidth: "57px", width: "100%", objectFit: "cover" }}
          />
          <div>
            <h5 className="font-[600] text-[16px] leading-[24px] text-center md:text-start">
              Загрузка музыки
            </h5>
            <p className="font-[400] text-[14px] leading-[21px] text-center md:text-start max-w-[358px] w-full">
              Выберите нужный формат (WAV, MP3 и т.д.) для выбранной музыки и
              нажмите кнопку загрузки.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SimilarSong;
