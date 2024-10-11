import { BeforeAfter } from "@/components/BeforeAfter";
import ai from "@/assets/ai.jpg";
import { Slider } from "@/components/Slider";
import { AccordionSection } from "./Accordion";
import SimilarSong from "./SimilarSong";
import SearchMovie from "./SearchMovie";
import ChooseGender from "./ChooseGender";
import { motion } from "framer-motion";
import TelegramSection from "./TelegramSection";
import YoutubeSection from "./YoutubeSection";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const TopMusicBotLanding = ({ sectionRefs }) => {
  return (
    <div className="w-full my-[79px]">
      <section className="py-10 flex w-full  mb-[96px]">
        <TelegramSection />
      </section>
      <section className="py-10  w-full flex my-[96px]">
        <YoutubeSection />
      </section>
      <section
        ref={sectionRefs.ai}
        className="flex items-center justify-center py-10 my-[96px]"
      >
        <div className="p-5 gap-10 text-center flex flex-col justify-evenly w-full max-w-4xl">
          <h2 className="text-[24px] md:text-[36px] font-bolder ">
            Используйте возможности ИИ в нашем Telegram-боте!
          </h2>
          <motion.div
            className="w-full justify-between md:gap-3 flex items-center md:flex-row flex-col"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img src={ai} alt="AI image" className="md:w-[60%] w-full" />
            <div className="md:w-[40%] w-full flex justify-center items-center h-full ">
              <Slider />
            </div>
          </motion.div>
        </div>
      </section>
      <section
        ref={sectionRefs.improveQuality}
        className="flex items-center justify-center py-10 my-[96px]"
      >
        <div className="p-5 gap-10 text-center flex flex-col justify-evenly max-w-4xl">
          <h2 className="text-[24px] md:text-[36px] font-bolder">
            Улучшение качества изображений JPG
          </h2>
          <BeforeAfter
            beforeImage="https://picsum.photos/id/646/1920/1080?grayscale"
            afterImage="https://picsum.photos/id/646/1920/1080"
          />
          <p className="mt-4 text-lg lg:text-xl">
            Загрузите своё фото, и TopMusicBot сделает его более четким и
            качественным! Воспользуйтесь нашим инструментом для улучшения
            изображений прямо сейчас!
          </p>
        </div>
      </section>
      <section
        ref={sectionRefs.searchMovie}
        className="py-10 flex w-full my-[96px]"
      >
        <SearchMovie />
      </section>
      <section
        ref={sectionRefs.searchSimilarSongs}
        className="flex items-center justify-center flex-col py-10  my-[96px] "
      >
        <div className="p-8 text-center max-w-4xl">
          <h2 className="text-[24px] md:text-[36px] font-bolder">
            Поиск похожих песен
          </h2>
          <p className="mt-4 text-lg lg:text-xl">
            Найдите похожие композиции на вашу любимую песню с помощью
            TopMusicBot! Откройте для себя новые треки.
          </p>
        </div>
        <SimilarSong />
      </section>
      <section
        ref={sectionRefs.identifyGenre}
        className="py-10  w-full flex my-[96px]"
      >
        <ChooseGender />
      </section>

      <section
        ref={sectionRefs.faq}
        className="max-w-[500px] mx-auto w-full my-[96px] px-4"
      >
        <h2 className="text-[24px] md:text-[36px] font-bolder">FAQ</h2>
        <AccordionSection />
      </section>
    </div>
  );
};

export default TopMusicBotLanding;
