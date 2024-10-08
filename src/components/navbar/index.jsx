import React from "react";
import logo from "@/assets/logo.png";
const Navbar = ({ scrollToSection }) => {
  return (
    <nav className="fixed top-0 h-[90px] left-0 w-full shadow-md hover:opacity-100 bg-white z-50 ">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        <div
          className="text-xl font-bold cursor-pointer flex items-center"
          onClick={() => scrollToSection("headSection")}
        >
          <img
            src={logo}
            alt="logo"
            height={36}
            width={53}
            className="rounded-full mx-2"
          />
          TopMusicBot
        </div>
        <div className="space-x-4 hidden md:flex">
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
          <a className="block text-white py-2 px-4 bg-[#0F172A] rounded-[6px]">
            Telegram Bot
          </a>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button
            id="menu-btn"
            className="text-white focus:outline-none focus:ring"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Dropdown */}
      <div className="md:hidden hidden menu-items bg-gray-800">
        <button
          onClick={() => scrollToSection("improveQuality")}
          className="block text-white py-2 px-4 hover:bg-gray-700"
        >
          Улучшение JPG
        </button>
        <button
          onClick={() => scrollToSection("searchMovie")}
          className="block text-white py-2 px-4 hover:bg-gray-700"
        >
          Фильмы
        </button>
        <button
          onClick={() => scrollToSection("searchSimilarSongs")}
          className="block text-white py-2 px-4 hover:bg-gray-700"
        >
          Песни
        </button>
        <button
          onClick={() => scrollToSection("identifyGenre")}
          className="block text-white py-2 px-4 hover:bg-gray-700"
        >
          Жанры
        </button>

        <button onClick={() => scrollToSection("faq")}>FAQ</button>
        <a
          href="/"
          className="block text-white py-2 px-4 bg-[#0F172A] rounded-[6px]"
        >
          Telegram Bot
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
