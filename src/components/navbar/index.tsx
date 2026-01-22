import Image from "next/image"
import Link from "next/link"

export default function index() {
  return (
    <div>
      <div className="w-full h-12 px-4 py-8 md:px-24">
        {/* Logo */}
        <div className="flex flex-row justify-between items-center">
          <Image src="/logo/logo.png" height={18} width={126} alt="Logo"></Image>
          {/* Navigation Links */}
          <div className="">
            <ul className="flex flex-row gap-7 text-black">
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
          <div className="bg-gray-200 h-12 w-170 flex flex-row items-center justify-start gap-3 rounded-3xl px-4">
            <div>
            <Image src="/vector/search.png" height={20} width={20} alt="Search"></Image>
            </div>
            <input type="text"  placeholder="Search For Products..." className="border-none focus:outline-none active:border-none"/>
          </div>
          <div className="flex gap-6">
            <Image src="/vector/cart.png" height={20} width={20} alt="Cart"></Image>
            <Image src="/vector/user.png" height={20} width={20} alt="User"></Image>
          </div>
        </div>
      </div>
    </div>
  )
}
