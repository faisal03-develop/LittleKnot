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
        <div className="bg-red-100 flex flex-col items-start max-w-96 rounded-2xl shadow-md p-4">
            <RatingStar rating={Math.ceil(rating)} />
            <span className="font-bold text-xl">{name}</span>
            <span className="text-sm text-gray-800">{feedback}</span>
        </div>
    </div>
  )
}
