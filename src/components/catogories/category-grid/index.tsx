import CategoryCard from "../category-card/index"
import { Category } from "@/types/catogories"

interface CategoryGridProps {
  categories: Category[]
}

export default function CategoriesGrid({categories}: CategoryGridProps) {
    const availableCategories = categories;
  return (
        <section className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2">
        {availableCategories.map((category) => (
            <CategoryCard
            key={category.title}
            title={category.title}
            imageURL={category.imageURL}
            />
        ))}
        </section>
  )
}