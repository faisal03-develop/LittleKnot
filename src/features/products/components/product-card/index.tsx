import Image from 'next/image'
import { Product } from '../../types/product'
import { getDiscountedPrice } from '../../utils/pricing'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const discountedPrice = getDiscountedPrice(
    product.price,
    product?.discountPercentage ||0
  )

  return (
    <div className="group rounded-2xl border border-neutral-200 bg-white p-4 transition-shadow hover:shadow-md cursor-pointer">
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          />
          {/* <span className='absolute bottom-2 right-2 bg-white text-lg text-gray-500 rounded-full px-2 text-center'>+</span> */}
      </div>

      <div className="mt-4 space-y-1">
        <h3 className="font-bold text-neutral-900 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        {/* {product.rating && (
          <div className="flex items-center gap-1 text-xs text-neutral-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>
                {i < product.rating ? <Image src="/assets/star.png" width={14} height={14} alt="Star"></Image> : ''}
              </span>
            ))}
            <span><span className='text-black font-medium'>{product.rating}</span>/5</span>
          </div>
        )} */}

        {/* Price */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-2xl font-semibold text-neutral-900">
            ${discountedPrice}
          </span>
          {product.discountPercentage && (
            <span className="text-2xl text-neutral-400 line-through">
              ${product.price}
            </span>
          )}
          {product.discountPercentage && (
            <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-bold text-red-500">
              -{product.discountPercentage}%
            </span>
          )}
        </div>
          {/* Button */}
          <div>
            <button className='mt-4 rounded-2xl bg-black px-4 py-2 w-full text-white'>
              Add to Cart
            </button>
          </div>
      </div>
    </div>
  )
}
