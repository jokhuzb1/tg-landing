import { useRef } from "react";
import Navbar from "@/components/navbar";
import Head from "@/sections/Head.jsx";
import Main from "@/sections/Main";
import "./App.css";
import Footer from "./components/footer";

function App() {
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
      <div ref={sectionRefs.headSection} className="">
        <Head />
      </div>
      <Main sectionRefs={sectionRefs} />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
