import { Star } from "lucide-react";


interface RatingStar{
    rating:number;
    showNumber?: boolean;
}

export default function index({rating,showNumber =false}: RatingStar) {
    // const ratingCeiled = Math.c
  return (
    <div className="flex items-center gap-1">
        {
            Array.from({length:rating}).map((_,index)=>{
                const starValue = index + 1;

            if (rating >= starValue) {
            return (
                <Star
                key={index}
                fill="gold"
                stroke="gold"
                />
            );
            }

            })
        }
    </div>
  )
}
