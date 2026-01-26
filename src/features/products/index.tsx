import { ProductGrid } from '../products/components/product-grid/index'
import { getProducts } from '../products/services/product-service'

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div className="mx-20 py-10">
      <h1 className="mb-10 text-3xl text-center font-extrabold">NEW ARRIVALS</h1>
      <ProductGrid products={products} limit={4} />
      <div className='bg-gray-300 h-0.5 my-20'></div>
      <h1 className="mb-10 text-3xl text-center font-extrabold">TOP SELLING</h1>
      <ProductGrid products={products} limit={4} />
    </div>
  )
}
