import desktopAndPhoneLeft from "@/assets/noutbook.png";

const ChooseGender = () => {
	return (
		<div className="bg-[#F6F6F6] w-full py-[17px] flex justify-between items-center gap-[70px]">
			<div>
				<img src={desktopAndPhoneLeft} alt="desktop and phone image" />
			</div>
			<div className="flex flex-col items-start justify-start gap-[85px]  ">
				<div className="justify-start items-start gap-[17px] flex-col max-w-[500px]">
					<h2 className="text-3xl lg:text-4xl font-[500] text-start">
						Определение жанра композиции
					</h2>
					<p className=" text-[16px]  text-start">
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
