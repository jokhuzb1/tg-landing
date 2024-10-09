import desktopAndPhoneRight from "@/assets/desktop-phone-right.png";

const SearchMovie = () => {
  return (
    <div className="bg-[#F6F6F6] w-full py-[17px] flex justify-between items-end md:items-center flex-col gap-[70px] md:flex-row">
      <div className="flex flex-col items-center mx-auto justify-center gap-[30px] md:gap-[85px]">
        <div className="justify-end items-start gap-[17px] flex-col max-w-[500px]">
          <h2 className="md:text-3xl text-[24px] lg:text-4xl font-[500] md:text-end text-center">
            Поиск фильмов по сценам или типу
          </h2>
          <p className="text-[16px] md:text-end text-center">
            Найдите фильм, который помните по сцене или выберите тип фильма.
            TopMusicBot предоставит вам список фильмов, соответствующих вашим
            запросам.
          </p>
        </div>
        <a
          href="/"
          className="block text-white py-2 px-4 bg-[#0F172A] rounded-[6px]"
        >
          Продолжить
        </a>
      </div>
      <div>
        <img src={desktopAndPhoneRight} alt="desktop and phone image" />
      </div>
    </div>
  );
};

export default SearchMovie;
