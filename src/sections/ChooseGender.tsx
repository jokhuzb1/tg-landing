import desktopAndPhoneLeft from "@/assets/noutbook.png";

const ChooseGender = () => {
  return (
    <div className="bg-[#F6F6F6] w-full py-[17px] flex justify-between items-start md:items-center flex-col-reverse gap-[70px] md:flex-row">
      <div>
        <img src={desktopAndPhoneLeft} alt="desktop and phone image" />
      </div>
      <div className="flex flex-col items-center mx-auto justify-center gap-[30px] md:gap-[85px]">
        <div className="justify-start items-start gap-[17px] flex-col max-w-[500px]">
          <h2 className="text-[24px] md:text-3xl lg:text-4xl font-[500] md:text-start text-center">
            Определение жанра композиции
          </h2>
          <p className=" text-[16px]  md:text-end text-center">
            Отправьте песню и узнайте её жанр с помощью нашего продвинутого
            анализа звука.
          </p>
        </div>
        <a
          href="/"
          className="block text-white py-2 px-4 bg-[#0F172A] rounded-[6px]"
        >
          Продолжить
        </a>
      </div>
    </div>
  );
};

export default ChooseGender;
