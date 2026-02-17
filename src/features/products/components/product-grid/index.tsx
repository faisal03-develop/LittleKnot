import { ProductCard } from '../product-card/index'
import { Product } from '../../types/product'

interface ProductGridProps {
  products: Product[],
  limit?: number,
}

export function ProductGrid({ products, limit }: ProductGridProps) {
  const visibleProducts = limit ? products.slice(0, limit) : products;
  return (
    <section
      className="
        flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4
        sm:grid sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        sm:overflow-visible sm:snap-none
      "
    >
      {visibleProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </section>
  )
}
