import { BeforeAfter } from "@/components/BeforeAfter";
import ai from "@/assets/ai.jpg";
import Slider from "@/components/Slider";
import { AccordionSection } from "./Accordion";
import SimilarSong from "./SimilarSong";
import SearchMovie from "./SearchMovie";
import ChooseGender from "./ChooseGender";

const TopMusicBotLanding = ({ sectionRefs }) => {
  return (
    <div className="min-h-screen w-full">
      <div
        ref={sectionRefs.ai}
        className="flex items-center justify-center py-10 lg:h-screen"
      >
        <div className="p-5 gap-10 text-center flex flex-col justify-evenly max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bolder ">
            Используйте возможности ИИ в нашем Telegram-боте!
          </h2>
          <div className="w-full justify-between gap-3 flex items-center">
            <img
              src={ai}
              alt="AI image"
              className="w-[60%] max-w-md mx-auto "
            />
            <div className="w-[40%] flex justify-center items-center h-full ">
              <Slider />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={sectionRefs.improveQuality}
        className="flex items-center justify-center py-10 lg:h-screen"
      >
        <div className="p-5 gap-10 text-center flex flex-col justify-evenly max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bolder">
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
      </div>
      <div ref={sectionRefs.searchMovie} className="py-10 lg:h-screen w-full">
        <SearchMovie />
      </div>
      <div
        ref={sectionRefs.searchSimilarSongs}
        className="flex items-center justify-center flex-col py-10 lg:h-screen "
      >
        <div className="p-8 text-center max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bolder">
            Поиск похожих песен
          </h2>
          <p className="mt-4 text-lg lg:text-xl">
            Найдите похожие композиции на вашу любимую песню с помощью
            TopMusicBot! Откройте для себя новые треки.
          </p>
        </div>
        <SimilarSong />
      </div>
      <div ref={sectionRefs.identifyGenre} className="py-10 lg:h-screen w-full">
        <ChooseGender />
      </div>

      <div ref={sectionRefs.faq} className="max-w-[500px] mx-auto w-full">
        <h2 className="text-3xl lg:text-4xl font-bolder mb-4">FAQ</h2>
        <AccordionSection />
      </div>
    </div>
  );
};

export default TopMusicBotLanding;
