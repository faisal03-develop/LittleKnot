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
    <div className="group rounded-2xl border border-neutral-200 bg-white p-4 transition-shadow hover:shadow-md">
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />

        {product.discountPercentage && (
          <span className="absolute top-2 left-2 rounded-full bg-pink-200 px-3 py-1 text-xs font-medium text-pink-800">
            {product.discountPercentage}% OFF
          </span>
        )}
      </div>

      <div className="mt-4 space-y-1">
        <h3 className="text-sm font-medium text-neutral-900 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-1 text-xs text-neutral-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>
                {i < product.rating ? '★' : '☆'}
              </span>
            ))}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2">
          {product.discountPercentage && (
            <span className="text-sm text-neutral-400 line-through">
              ${product.price}
            </span>
          )}

          <span className="text-sm font-semibold text-neutral-900">
            ${discountedPrice}
          </span>
        </div>
      </div>
    </div>
  )
}
