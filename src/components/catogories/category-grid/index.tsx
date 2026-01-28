import CategoryCard from "../category-card/index"
import { Category } from "@/types/catogories"

interface CategoryGridProps {
  categories: Category[]
}

export default function CategoriesGrid({categories}: CategoryGridProps) {
    const availableCategories = categories;
  return (
        <section className="grid gap-6 grid-cols-2 px-57 py-10">
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