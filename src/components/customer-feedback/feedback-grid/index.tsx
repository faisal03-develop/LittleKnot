import FeedBackCard from "../feedback-card"

export default function index() {
  const feedBacks = [
    {
        name: "Khadija Qureshi",
        feedback: "Absolutely adorable! The quality is better than I expected. The bow stays in place all day without pulling my hair.",
        rating: 4.5,
    },{
        name: "Ayesha Khan",
        feedback: "The clips are beautifully made and very comfortable to wear. They hold perfectly without slipping.",
        rating: 5,
    },
    {
        name: "Fatima Ali",
        feedback: "Loved the colors and the soft fabric. My daughter wears them daily and they still look brand new.",
        rating: 4,
    },
    {
        name: "Hira Malik",
        feedback: "Great quality for the price. The headband doesn’t feel tight and stays in place all day.",
        rating: 5,
    },
    {
        name: "Sana Ahmed",
        feedback: "Packaging was so cute and the accessories look even prettier in person. Definitely ordering again!",
        rating: 5,
    },
    {
        name: "Zainab Hussain",
        feedback: "Very gentle on hair and no pulling at all. Perfect for both casual and party wear.",
        rating: 4.5,
},
  ]
  
    return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
            {
                feedBacks.map((feedback,index)=>(
                    <FeedBackCard key={index} name={feedback.name} feedback={feedback.feedback} rating={feedback.rating} />
                ))
            }
        </div>
    </div>
  )
}
