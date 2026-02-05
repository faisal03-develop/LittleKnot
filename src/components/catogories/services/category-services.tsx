import { Category } from '@/types/catogories'

export async function getCategory(): Promise<Category[]> {
  return[
  { title: 'Bows', imageURL: '/categories/bow.png' },
  { title: 'Scrunchies', imageURL: '/categories/scrunchie.png'},
  { title: 'Pins', imageURL: '/categories/pin.png'},
  { title: 'Other', imageURL: '/assets/bow1.jpeg'},
]
}


