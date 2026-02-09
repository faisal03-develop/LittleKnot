import { Category } from '@/types/catogories'

export async function getCategory(): Promise<Category[]> {
  return[
  { title: 'Bows', imageURL: 'https://images.unsplash.com/photo-1748785944341-8ca18262bd34?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { title: 'Scrunchies', imageURL: 'https://images.unsplash.com/photo-1629019581609-a1626ecfcc19?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  { title: 'Pins', imageURL: 'https://images.unsplash.com/photo-1593243981113-1305c276ab85?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  { title: 'Other', imageURL: 'https://images.unsplash.com/photo-1744177762306-6432f05fa7b1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
]
}


