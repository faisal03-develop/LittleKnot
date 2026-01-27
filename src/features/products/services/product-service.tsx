import { Product } from '../types/product'

export async function getProducts(): Promise<Product[]> {
  return [
    {
      id: '1',
      name: 'Dusty Khakhi Bow',
      image: '/assets/bow1.jpeg',
      price: 20,
      discountPercentage: 20,
      rating: 4,
    },
    {
      id: '2',
      name: 'Soft Cotton Scrunchie',
      image: '/assets/bow2.jpeg',
      price: 15,
      rating: 5,
    },
    {
      id: '3',
      name: 'Soft Cotton Scrunchie',
      image: '/assets/bow3.jpeg',
      price: 24.99,
      discountPercentage:15,
      rating: 3,
    },
    {
      id: '4',
      name: 'Red Cotton Bow',
      image: '/assets/bow4.jpeg',
      price: 19.50,
      rating: 5,
    },
    {
      id: '5',
      name: 'Red Cotton Bow',
      image: '/assets/bow6.jpeg',
      price: 19.50,
      rating: 4,
    },
  ]
}
