import desktopAndPhoneRight from "@/assets/desktop-phone-right.png";

const SearchMovie = () => {
  return (
    <div className="bg-[#F6F6F6] w-full py-[17px] flex justify-between items-center gap-[70px]">
      <div className="flex flex-col items-end justify-end gap-[85px]  ">
        <div className=" justify-end items-start gap-[17px] flex-col max-w-[500px]">
          <h2 className="text-3xl lg:text-4xl font-[500] text-end">
            Поиск фильмов по сценам или типу
          </h2>
          <p className=" text-[16px]  text-end">
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
