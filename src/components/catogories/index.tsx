import CategoryGrid from "./category-grid/index"
import { getCategory } from "./services/category-services"
export default async function Index() {
    const categories = await getCategory();
  return (
    <div>
        <div className='bg-gray-200 mx-30 text-center h-130 rounded-3xl'>
            <div className="py-10">
                <span className='text-4xl font-bungee font-extrabold'>BROWSE BY CATEGORIES</span>
                <CategoryGrid categories={categories}/>
            </div>

        </div>
    </div>
  )
}
