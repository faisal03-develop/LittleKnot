import Image from "next/image"
import { Category } from "@/types/catogories";

export default function CategoryCard({title, imageURL}: Category) {
  return (
    <div>
      <div className="cursor-pointer hover:scale-105 transition-transform duration-300">
        <div>
          <div className="relative group">
          <Image src={imageURL} alt={title} height={400} width={250} className="rounded-2xl"></Image>
            <span className="absolute top-2 right-5 text-2xl font-bungee font-black text-white hidden group-hover:block">
              {title}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};