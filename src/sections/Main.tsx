import { BeforeAfter } from "@/components/BeforeAfter";
import ai from "@/assets/ai.jpg";
const TopMusicBotLanding = ({ sectionRefs }) => {
	return (
		<div className="min-h-screen min-w-full">
			<div
				ref={sectionRefs.ai}
				className="h-screen flex items-center justify-center"
			>
				<div className="p-5 gap-10 text-center head-section flex flex-col justify-evenly">
					<h2 className="text-4xl font-bolder">
						Используйте возможности ИИ в нашем Telegram-боте!
					</h2>
					<img src={ai} alt="AI image" />
				</div>
			</div>
			<div
				ref={sectionRefs.improveQuality}
				className="h-screen flex items-center justify-center"
			>
				<div className="p-5 gap-10 text-center head-section flex flex-col justify-evenly">
					<h2 className="text-4xl font-bolder">
						Улучшение качества изображений JPG
					</h2>
					<BeforeAfter
						// pointerMove
						beforeImage="https://picsum.photos/id/646/1920/1080?grayscale"
						afterImage="https://picsum.photos/id/646/1920/1080"
					/>
					<p className="mt-4 text-lg">
						Загрузите своё фото, и TopMusicBot сделает его более четким и
						качественным! Воспользуйтесь нашим инструментом для улучшения
						изображений прямо сейчас!
					</p>
				</div>
			</div>
			<div
				ref={sectionRefs.searchMovie}
				className="h-screen flex head-section items-center justify-center "
			>
				<div className="p-8 text-center">
					<h2 className="text-4xl font-bolder">
						Поиск фильмов по сценам или типу
					</h2>
					<p className="mt-4 text-lg">
						Найдите фильм, который помните по сцене или выберите тип фильма.
						TopMusicBot предоставит вам список фильмов, соответствующих вашим
						запросам.
					</p>
				</div>
			</div>

			<div
				ref={sectionRefs.searchSimilarSongs}
				className="h-screen flex head-section items-center justify-center "
			>
				<div className="p-8 text-center">
					<h2 className="text-4xl font-bolder">Поиск похожих песен</h2>
					<p className="mt-4 text-lg">
						Найдите похожие композиции на вашу любимую песню с помощью
						TopMusicBot! Откройте для себя новые треки.
					</p>
				</div>
			</div>

			<div
				ref={sectionRefs.identifyGenre}
				className="h-screen flex head-section items-center justify-center "
			>
				<div className="p-8 text-center">
					<h2 className="text-4xl font-bolder">Определение жанра композиции</h2>
					<p className="mt-4 text-lg">
						Отправьте песню и узнайте её жанр с помощью нашего продвинутого
						анализа звука.
					</p>
				</div>
			</div>

			<div
				ref={sectionRefs.playlistByMood}
				className="h-screen flex head-section items-center justify-center "
			>
				<div className="p-8 text-center">
					<h2 className="text-4xl font-bolder">Плейлист по настроению</h2>
					<p className="mt-4 text-lg">
						Настройтесь на нужную волну с персональным плейлистом, который
						соответствует вашему настроению!
					</p>
				</div>
			</div>
		</div>
	);
};

export default TopMusicBotLanding;
