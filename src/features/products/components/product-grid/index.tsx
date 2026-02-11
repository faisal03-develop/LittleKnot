import { ProductCard } from '../product-card/index'
import { Product } from '../../types/product'

interface ProductGridProps {
  products: Product[],
  limit?:number,
}

export function ProductGrid({ products,limit }: ProductGridProps) {
  const visibleProducts = limit ? products.slice(0, limit) : products;
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {visibleProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </section>
  )
}
