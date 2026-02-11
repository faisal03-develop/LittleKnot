import FeedBackCard from '@/components/customer-feedback/feedback-card/index'
import FeedBackGrid from '@/components/customer-feedback/feedback-grid/index'

export default function index() {
  return (
    <div>
        <div>
          <h2 className='text-2xl md:text-4xl text-center mb-10 font-bungee font-extrabold border-gray-200 border-t-2 pt-10 md:py-20'>
            Happy Customers
          </h2>
            <FeedBackGrid />
          </div>
    </div>
  )
}
