import CategoryGrid from "./category-grid/index"
import { getCategory } from "./services/category-services"
export default async function Index() {
    const categories = await getCategory();
  return (
    <div>
        <h2 className='text-2xl md:text-4xl text-center mb-10 font-bungee font-extrabold'>
          BROWSE BY CATEGORIES
        </h2>
        <div>
            <div className="py-10">
                <CategoryGrid categories={categories}/>
            </div>
        </div>
    </div>
  )
}
