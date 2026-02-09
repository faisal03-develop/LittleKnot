import FeedBackCard from '@/components/customer-feedback/feedback-card/index'


export default function index() {
  return (
    <div>
        <div>
            Happy Customers
            <FeedBackCard name="Ali Raza" feedback="Good Products" rating={5} />
        </div>
    </div>
  )
}
