import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const ReviewCard = ({ name, review }: { name: string; review: string }) => {
  const formattedName =
    name.charAt(0).toLocaleUpperCase() + name.slice(1).toLocaleLowerCase();

  return (
    <Card className="w-full h-[220px]  bg-white shadow-lg rounded-lg">
      <CardHeader className="flex flex-row items-center">
        <Avatar className="w-12 h-12 rounded-full">
          <AvatarImage src="/path-to-avatar.jpg" alt="User Avatar" />
          <AvatarFallback>{formattedName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="ml-4">
          <CardTitle className="font-semibold text-lg">
            {formattedName}
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="text-gray-700">
        <p>“{review}”</p>
      </CardContent>
    </Card>
  );
};

export default function Reviews() {
  return (
    <div className="w-full px-2 mt-[96px] my-[46px]">
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        allowTouchMove={false}
        loop={true}
        speed={2000}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {reviews.map((r, index) => (
          <SwiperSlide key={index}>
            <ReviewCard
              key={index + reviews.length}
              name={r.name}
              review={r.review}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
const reviews = [
  {
    name: "София",
    review:
      "Бот очень быстрый и удобный, легко загружать видео. Ежедневные обновления постоянно поступают!.",
  },
  {
    name: "Камила",
    review:
      "Повышение качества видео потрясающее! Конвертировать в формат MP3 также легко и быстро.",
  },
  {
    name: "Александра",
    review:
      "Я подписался и слежу за новыми видео в Telegram. Очень удобный сервис!",
  },
  {
    name: "Екатерина",
    review:
      "Мне понравилась возможность обрезать видео и конвертировать их в MP3. Очень прост в использовании!",
  },
  {
    name: "Мария",
    review: "Я могу быстро скачать любимую музыку в формате MP3. Отличный бот!",
  },
  {
    name: "Виктория",
    review:
      "Простой интерфейс и удобные функции. Видео можно легко скачать. Очень хороший!",
  },
];
