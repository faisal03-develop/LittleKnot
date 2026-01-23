import { ProductGrid } from '../products/components/product-grid/index'
import { getProducts } from '../products/services/product-service'

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <main className="px-6 py-10">
      <h1 className="mb-6 text-xl font-semibold">All Products</h1>
      <ProductGrid products={products} />
    </main>
  )
}
