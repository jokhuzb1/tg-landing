import facebook from "@/assets/facebook.png";
import twitter from "@/assets/twitter.png";
import youtube from "@/assets/youtube-small.png";

const Footer = ({ scrollToSection }) => {
  return (
    <div className="bg-[#464d53]">
      <div className="min-h-[270px] max-w-[1350px] mx-auto py-[40px] px-[10px] w-full flex justify-center items-center gap-[27px] flex-col ">
        <div className="flex justify-center items-center gap-[56px] flex-wrap *:text-[#F6F6F6]">
          <button onClick={() => scrollToSection("ai")}>ИИ</button>
          <button onClick={() => scrollToSection("improveQuality")}>
            Улучшение JPG
          </button>
          <button onClick={() => scrollToSection("searchMovie")}>Фильмы</button>
          <button onClick={() => scrollToSection("searchSimilarSongs")}>
            Песни
          </button>
          <button onClick={() => scrollToSection("identifyGenre")}>
            Жанры
          </button>

          <button onClick={() => scrollToSection("faq")}>FAQ</button>
        </div>
        <div className="flex justify-center items-center gap-[27.54px] flex-wrap">
          <a href="/">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="/">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="/">
            <img src={youtube} alt="youtube" />
          </a>
        </div>
        <div>
          <span className="font-[400] text-[12px] leading-[14.32px] text-[#F6F6F6]">
            © Copyright 2019 - Lift Media
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
