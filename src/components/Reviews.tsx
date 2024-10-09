import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// ReviewCard Component
const ReviewCard = ({ name, review }: { name: string; review: string }) => {
  const formattedName =
    name.charAt(0).toLocaleUpperCase() + name.slice(1).toLocaleLowerCase();

  return (
    <Card className="min-w-[340px]  bg-white shadow-lg rounded-lg m-2 ">
      {/* Header Section */}
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

      {/* Review Content */}
      <CardContent className="text-gray-700">
        <p>“{review}”</p>
      </CardContent>
    </Card>
  );
};

// Reviews Component with Infinite Scroll
const Reviews = () => {
  // Sample data
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
      review:
        "Я могу быстро скачать любимую музыку в формате MP3. Отличный бот!",
    },
    {
      name: "Виктория",
      review:
        "Простой интерфейс и удобные функции. Видео можно легко скачать. Очень хороший!",
    },
    // Add more reviews as needed
  ];

  return (
    <div className="relative overflow-hidden bg-red-600 my-[79px]">
      <div className="flex items-center gap-5  animate-scroll infinite-scroll">
        {reviews.map((r, index) => (
          <ReviewCard key={index} name={r.name} review={r.review} />
        ))}
        {reviews.map((r, index) => (
          <ReviewCard
            key={index + reviews.length}
            name={r.name}
            review={r.review}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
