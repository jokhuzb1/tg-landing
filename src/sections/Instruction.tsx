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

const Instruction = () => {
  return (
    <>
      <div className="p-8 text-center max-w-4xl">
        <h2 className="text-[24px] md:text-[36px] font-bolder">
          Как работает бот TopMusicBot
        </h2>
        <p className="mt-4 text-lg lg:text-xl">
          Весь процесс занимает всего четыре шага:
        </p>
      </div>
      <div className="flex justify-between items-center flex-col md:flex-row gap-4 w-full overflow-hidden">
        <motion.div
          className="flex justify-between px-3 items-end min-h-[135px] max-h-[290px] h-full flex-col gap-[17px]"
          initial="hidden"
          whileInView="visible"
          variants={fadeInLeft}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col mx-auto md:mx-0 justify-center items-center md:justify-end md:items-end gap-[6px]">
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
                Откройте TopMusicBot в Telegram.
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
                Ждём
              </h5>
              <p className="font-[400] text-[14px] leading-[21px] text-center md:text-end max-w-[358px] w-full">
                Дождитесь, пока бот обработает вашу заявку – не больше минуты.
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
          className="flex justify-between px-3 items-start flex-col max-h-[290px] min-h-[135px] h-full gap-[17px]"
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
                Начать
              </h5>
              <p className="font-[400] text-[14px] leading-[21px] text-center md:text-start max-w-[358px] w-full">
                Нажмите «Start» и выберите функцию «Добавить канал».
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
                Наслаждайтесь
              </h5>
              <p className="font-[400] text-[14px] leading-[21px] text-center md:text-start max-w-[358px] w-full">
                Получайте новинки с любимых каналов и смотрите их прямо с
                Telegram.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Instruction;
