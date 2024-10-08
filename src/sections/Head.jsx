import bgimg from "@/assets/tg.png";
import { Button } from "@/components/ui/button.tsx";
import Reviews from "@/components/Reviews";

const Head = () => {
	return (
		<header
			className="relative bg-cover bg-center head-section h-screen -mx-4 md:-mx-8 lg:-mx-24 text-start " // Adjust the negative margins
		>
			<img
				src={bgimg}
				alt="bg-img"
				className="absolute top-0 right-0 left-0 md:left-[50%] h-[100%] object-contain md:h-[50%] md:top-10 -z-10"
			/>
			<div className="flex flex-col h-[60%] justify-around">
				<h1
					className="font-bold text-4xl md:text-5xl lg:text-6xl "
					style={{ fontSize: "2.5rem", lineHeight: "3.5rem" }}
				>
					Добро пожаловать в TopMusicBot! 🎶
				</h1>
				<p
					className="mt-4 text-lg md:text-xl lg:text-2xl max-w-5xl overflow-hidden"
					style={{ fontSize: "1.25rem", lineHeight: "2rem" }}
				>
					<h3 className="text-2xl font-bolder">
						TopMusicBot — ваш идеальный помощник в мире музыки и кино.
					</h3>
					<br /> С помощью нашего бота вы можете:
					<br /> Улучшить качество JPG изображений: Загружайте фото для
					улучшения.
					<br /> Искать фильмы по сценам или типу: Описание сцены — и бот найдет
					фильм!
					<br /> Находить похожие песни: Укажите название, и бот предложит
					похожие треки. <br />
					Определять жанр композиции: Просто отправьте название песни.
					<br /> Создавать плейлисты по настроению: Опишите настроение, и бот
					соберет подходящие треки.
				</p>
				<Button size="sm" className="w-24 bg-red-600">
					Open Channel
				</Button>
			</div>
			<Reviews />
		</header>
	);
};

export default Head;
