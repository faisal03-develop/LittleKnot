import { Category } from '@/types/catogories'

export async function getCategory(): Promise<Category[]> {
  return[
  { title: 'Bows', imageURL: '/assets/bow3.jpeg', link: '#' },
  { title: 'Scrunchies', imageURL: '/assets/bow6.jpeg', link: '#' },
  { title: 'Pins', imageURL: '/assets/bow2.jpeg', link: '#' },
  { title: 'Other', imageURL: '/assets/.jpeg', link: '#' },
]
}


