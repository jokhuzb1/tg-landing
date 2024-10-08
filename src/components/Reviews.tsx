import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// ReviewCard Component
const ReviewCard = ({ name, review }: { name: string; review: string }) => {
  const formattedName =
    name.charAt(0).toLocaleUpperCase() + name.slice(1).toLocaleLowerCase();

  return (
    <Card className="min-w-[340px] max-h-[180px] min-h-[180px] bg-white shadow-lg rounded-lg m-2 mr-4">
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
    { name: "John", review: "Great product! Exceeded expectations." },
    { name: "Jane", review: "Amazing service and quality." },
    { name: "Alex", review: "Highly recommend this store." },
    { name: "Emily", review: "Customer support was super helpful!" },
    // Add more reviews as needed
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Scrolling Container */}
      <div className="flex items-center gap-5 space-x-4 animate-scroll infinite-scroll">
        {/* Duplicate the cards to create an infinite effect */}
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
