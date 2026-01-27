import { Category } from "@/types/catogories"
import Image from "next/image"
export default function Index({title, imageURL}:Category) {
  return (
    <div>
        <div className='relative bg-gray-200 mx-30 text-center'>
            <span className='text-3xl font-extrabold py-10'>BROWSE BY CATEGORIES</span>
                <div className="">
                    <Image src={imageURL} width={200} height={200} alt="Category" fill></Image>
                </div>
                <span className="absolute top-2 left-2 text-lg font-semibold text-black">{title}</span>
        </div>
    </div>
  )
}
