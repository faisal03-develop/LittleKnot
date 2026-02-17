import RatingStar from "@/components/common/rating-star/index"
import { BadgeCheck } from "lucide-react"

interface FeedBackCardProps {
  name: string;
  feedback: string;
  rating: number;
}

export default function FeedBackCard({
  name,
  feedback,
  rating = 5,
}: FeedBackCardProps) {


  return (
    <div>
      <div className="flex flex-col max-w-96 rounded-2xl border-gray-300 border-2 p-4 items-center md:items-start hover:scale-105 transition-all duration-300 p-7 w-auto">
        <RatingStar rating={Math.ceil(rating)} />
        <div className="flex items-center mt-4">
          <span className="font-semibold text-xl">{name.split(" ")[0]}</span>
          <BadgeCheck className="w-6 h-6 ml-2 text-white fill-green-500" />
        </div>
        <span className="text-sm text-gray-600 text-center md:text-start mt-2">{feedback}</span>
      </div>
    </div>
  )
}
