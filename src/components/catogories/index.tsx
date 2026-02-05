import CategoryGrid from "./category-grid/index"
import { getCategory } from "./services/category-services"
export default async function Index() {
    const categories = await getCategory();
  return (
    <div>
        <span className='text-4xl flex flex-row justify-center mb-10 font-bungee font-extrabold'>
          BROWSE BY CATEGORIES
        </span>
        <div>
            <div className="py-10">
                <CategoryGrid categories={categories}/>
            </div>
        </div>
    </div>
  )
}
