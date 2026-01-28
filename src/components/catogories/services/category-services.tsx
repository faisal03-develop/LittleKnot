import { Category } from '@/types/catogories'

export async function getCategory(): Promise<Category[]> {
  return[
  { title: 'Bows', imageURL: '/categories/bow.png', link: '#' },
  { title: 'Scrunchies', imageURL: '/categories/scrunchie.png', link: '#' },
  { title: 'Pins', imageURL: '/categories/pin.png', link: '#' },
  { title: 'Other', imageURL: '/assets/bow1.jpeg', link: '#' },
]
}


