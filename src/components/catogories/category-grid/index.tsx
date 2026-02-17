import CategoryCard from "../category-card/index"
import { Category } from "@/types/catogories"

interface CategoryGridProps {
  categories: Category[]
}

export default function CategoriesGrid({ categories }: CategoryGridProps) {
  const availableCategories = categories;
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center px-4">
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