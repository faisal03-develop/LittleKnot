import Image from "next/image"
import { Category } from "@/types/catogories";

export default function CategoryCard({title, imageURL}: Category) {
  return (
    <div>
      <div className="cursor-pointer">
        <Image src={imageURL} alt={title} height={400} width={200}></Image>
        <span className="relative bottom-2 flex flex-row justify-center">{title}</span>
      </div>
    </div>
  );
};