import { Category } from "@/types/catogories"
import Image from "next/image"
export default function Index({title, imageURL}:Category) {
  return (
    <div>
        <div className='relative rounded-2xl bg-white w-100 h-40 overflow-hidden cursor-pointer'>
                <div className="absolute right-7 -top-6">
                    <Image src={imageURL} className="object-cover" height={180} width={180} alt="Category" ></Image>
                </div>
                <span className="absolute top-5 left-5 text-2xl font-bungee font-semibold text-black">{title}</span>
        </div>
    </div>
  )
}
