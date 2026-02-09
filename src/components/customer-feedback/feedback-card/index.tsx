
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
            <span>{name}</span>
            <span>{rating}/5</span>
            <span>{feedback}</span>
        </div>
    </div>
  )
}
