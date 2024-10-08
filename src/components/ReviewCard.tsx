import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react"; // Icon from Lucide

type ReviewCardProps = {
	name: string;
	review: string;
};
const ReviewCard = ({ name, review }: ReviewCardProps) => {
	const formattedName =
		name.charAt(0).toLocaleUpperCase() + name.slice(1).toLocaleLowerCase();
	const formattedReview =
		review.charAt(0).toLocaleUpperCase() + review.slice(1).toLocaleLowerCase();

	return (
		<Card className="max-w-md mx-auto bg-white shadow-lg rounded-lg ">
			{/* Header Section */}
			<CardHeader className="flex flex-row items-center">
				<Avatar className="w-6 h-6 rounded-full ">
					<AvatarImage src="/path-to-avatar.jpg" alt="User Avatar" />
					<AvatarFallback>JD</AvatarFallback>{" "}
				</Avatar>
				<div className="ml-4">
					<CardTitle className="font-semibold text-lg">
						{formattedName}
					</CardTitle>
				</div>
			</CardHeader>
			<CardContent className="text-gray-700">
				<p> {formattedReview}</p>
			</CardContent>
		</Card>
	);
};

export default ReviewCard;
