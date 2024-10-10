import { motion } from "framer-motion";
import { Button } from "@/components/ui/button.tsx";
import Reviews from "@/components/Reviews";
import YoutubeAndTelegram from "./YoutubeAndTelegram";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // Staggering the animation of child elements
    },
  },
};

const Head = () => {
  return (
    <header className="relative bg-cover mt-[90px] bg-right text-start">
      <motion.div
        className="flex flex-col gap-2 mb-[46px] md:bg-[url('/src/assets/tg.png')] py-[60px] px-[10px] md:bg-[length:60%] bg-transparent"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* Heading with Fade In Up Animation */}
        <motion.h1
          className="font-bold text-[26px] md:text-3xl lg:text-4xl text-center md:text-start w-full"
          variants={fadeInUp}
        >
          Добро пожаловать в TopMusicBot! 🎶
        </motion.h1>

        {/* Paragraph with Fade In Up Animation */}
        <motion.p
          className="my-4 text-[16px] md:text-[18px] overflow-hidden text-center md:text-start"
          variants={fadeInUp}
        >
          <span className="text-1xl font-bolder">
            TopMusicBot — ваш идеальный помощник в мире музыки и кино.
          </span>
          <br /> С помощью нашего бота вы можете:
          <br /> Улучшить качество JPG изображений: Загружайте фото для
          улучшения.
          <br /> Искать фильмы по сценам или типу: Описание сцены — и бот найдет
          фильм!
          <br /> Находить похожие песни: Укажите название, и бот предложит
          похожие треки. <br />
          Определять жанр композиции: Просто отправьте название песни.
          <br /> Создавать плейлисты по настроению: Опишите настроение, и бот
          соберет подходящие треки.
        </motion.p>

        {/* Button with Fade In Up Animation */}
        <motion.div variants={fadeInUp} className="w-full flex justify-center">
          <Button
            size="sm"
            className="py-[8px] px-[16px] bg-red-600 mx-auto md:ml-0"
          >
            Open Channel
          </Button>
        </motion.div>
      </motion.div>

      {/* Other Components */}
      <YoutubeAndTelegram />
      <Reviews />
    </header>
  );
};

export default Head;
