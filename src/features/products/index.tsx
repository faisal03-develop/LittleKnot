import { ProductGrid } from '../products/components/product-grid/index'
import { getProducts } from '../products/services/product-service'

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div className="px-6 py-10">
      <h1 className="mb-10 text-3xl text-center font-extrabold">NEW ARRIVALS</h1>
      <ProductGrid products={products} limit={4} />
      <div className=''>

      </div>
    </div>
  )
}
