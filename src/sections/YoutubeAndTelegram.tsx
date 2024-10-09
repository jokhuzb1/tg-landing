import youtube from "@/assets/youtube.png";
import telegram from "@/assets/telegram.png";
const YoutubeAndTelegram = () => {
	return (
		<div className="w-full flex justify-center items-center gap-[30px] flex-wrap md:my-8">
			<div className="border-[#EFEFEF] border-[1px] border-solid rounded-[16px] max-w-[450px] px-[18px] py-[12px]">
				<div className="flex justify-start items-start gap-[2px]">
					<img src={youtube} alt="youtube logo" />
					<div className="flex justify-start items-start gap-2 flex-col">
						<h3 className="font-[500] text-[24px] leading-[36px] text-start">
							Download YouTube videos
						</h3>
						<p className="font-[300] text-[14px] leading-[21px] text-start">
							Managing YouTube videos has never been easier! Just enter the link
							and download the video or increase the quality.
						</p>
					</div>
				</div>
			</div>
			<div className="border-[#EFEFEF] border-[1px] border-solid rounded-[16px] max-w-[450px] px-[18px] py-[12px]">
				<div className="flex justify-start items-start gap-[2px]">
					<img src={telegram} alt="telegram logo" />
					<div className="flex justify-start items-start gap-2 flex-col">
						<h3 className="font-[500] text-[24px] leading-[36px] text-start">
							Download YouTube videos
						</h3>
						<p className="font-[300] text-[14px] leading-[21px] text-start">
							Managing YouTube videos has never been easier! Just enter the link
							and download the video or increase the quality.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default YoutubeAndTelegram;
