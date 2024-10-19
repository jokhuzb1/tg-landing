import ai from "@/assets/ai.jpg";
import { Slider } from "@/components/Slider";
import { AccordionSection } from "./Accordion";
import Instruction from "./Instruction";
import SearchMovie from "./SearchMovie";
import ChooseGender from "./ChooseGender";
import { motion } from "framer-motion";
import YoutubeSection from "./YoutubeSection";
import CarauselSection from "./CarauselSection";
import Reviews from "@/components/Reviews";
import ImproveQuality from "./ImproveQuality";
import SimilarSongs from "./SimilarSongs";

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
      <section className="w-full">
        <h2 className="text-[24px] md:text-[36px] font-bolder">Отзывы</h2>
        <Reviews />
      </section>

      <section className="py-10  w-full flex my-[96px]" ref={sectionRefs.video}>
        <YoutubeSection />
      </section>
      <div ref={sectionRefs.features}>
        <CarauselSection />
      </div>
      <section
        ref={sectionRefs.searchSimilarSongs}
        className="flex items-center justify-center py-10 my-[96px] bg-[#F6F6F6]"
      >
        <SimilarSongs />
      </section>

      <section
        ref={sectionRefs.improveQuality}
        className="flex items-center justify-center py-10 my-[96px]"
      >
        <ImproveQuality />
      </section>
      <section
        ref={sectionRefs.searchMovie}
        className="py-10 flex w-full my-[96px]"
      >
        <SearchMovie />
      </section>
      <section className="flex items-center justify-center flex-col py-10  my-[96px] ">
        <Instruction />
      </section>
      <section
        ref={sectionRefs.identifyGenre}
        className="py-10  w-full flex my-[96px]"
      >
        <ChooseGender />
      </section>

      <section className="flex items-center justify-center py-10 my-[96px] ">
        <div className=" px-3 gap-10 text-center flex flex-col justify-evenly w-full max-w-4xl">
          <h2 className="text-[24px] md:text-[36px] font-bolder">
            Кроме этого, у TopMusicBot есть и другие плюсы:
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
