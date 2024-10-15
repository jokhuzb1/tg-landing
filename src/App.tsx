import { useRef, memo } from "react";
import Navbar from "@/components/navbar";
import Main from "@/sections/Main";
import "./App.css";
import Footer from "./components/footer";
import TelegramHeader from "./sections/TelegramHeader";

const App = () => {
  const sectionRefs = {
    ai: useRef(null),
    headSection: useRef(null),
    improveQuality: useRef(null),
    searchMovie: useRef(null),
    searchSimilarSongs: useRef(null),
    identifyGenre: useRef(null),
    faq: useRef(null),
  };
  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Navbar scrollToSection={scrollToSection} />
      <div className="max-w-[1350px] mx-auto">
        <TelegramHeader />

        <Main sectionRefs={sectionRefs} />
      </div>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default memo(App);
