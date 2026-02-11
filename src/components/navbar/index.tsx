import Image from "next/image"
import Link from "next/link"

export default function index() {
  return (
    <div>
      <div className="w-full px-4 py-4 md:px-24">
        {/* Logo */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Image src="/logo/logo.png" height={18} width={126} alt="Logo" className="shrink-0" />
          
          {/* Navigation Links */}
          <div className="w-full md:w-auto overflow-x-auto">
            <ul className="flex flex-row gap-4 md:gap-7 items-center justify-center md:justify-start whitespace-nowrap">
              <li>
                <Link href="#">Shop</Link>
              </li>
              <li>
                <Link href="#">On Sale</Link>
              </li>
              <li>
                <Link href="#">New Arrival</Link>
              </li>
              <li>
                <Link href="#">Brands</Link>
              </li>
            </ul>
          </div>

          {/* SearchBox */}
          <div className="bg-gray-200 h-10 md:h-12 w-full md:w-auto md:flex-1 max-w-xl flex flex-row items-center justify-start gap-3 rounded-3xl px-4">
            <div>
              <Image src="/vector/search.png" height={20} width={20} alt="Search" />
            </div>
            <input 
              type="text" 
              placeholder="Search For Products..." 
              className="bg-transparent border-none focus:outline-none w-full"
            />
          </div>

          <div className="flex gap-6 shrink-0">
            <Image className="cursor-pointer" src="/vector/cart.png" height={20} width={20} alt="Cart" />
            <Image className="cursor-pointer" src="/vector/user.png" height={20} width={20} alt="User" />
          </div>
        </div>
      </div>
    </div>
  )
}
