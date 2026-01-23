import { Product } from '../types/product'

export async function getProducts(): Promise<Product[]> {
  return [
    {
      id: '1',
      name: 'Dusty Pink Bow',
      image: '/assets/bow1.jpg',
      price: 20,
      discountPercentage: 20,
      rating: 4,
    },
    {
      id: '2',
      name: 'Soft Cotton Scrunchie',
      image: '/assets/bow2.jpg',
      price: 15,
      rating: 5,
    },
  ]
}
