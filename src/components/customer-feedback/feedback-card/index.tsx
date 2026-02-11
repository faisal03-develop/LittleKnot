import RatingStar from "@/components/common/rating-star/index"
interface FeedBackCardProps {
    name:string;
    feedback:string;
    rating:number;
}

export default function FeedBackCard({
    name,
    feedback,
    rating = 5,
}: FeedBackCardProps) {


  return (
    <div>
        <div className="bg-gray-100 flex flex-col max-w-96 rounded-2xl shadow-md p-4 items-center md:items-start hover:scale-105 transition-all duration-300">
            <RatingStar rating={Math.ceil(rating)} />
            <span className="font-bold text-xl">{name}</span>
            <span className="text-sm text-gray-800 text-center md:text-start">{feedback}</span>
        </div>
    </div>
  )
}
