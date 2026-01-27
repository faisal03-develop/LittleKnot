import Navbar from "@/components/navbar/index"
import SignUpBanner from "@/components/sign-up-banner/index"
import Hero from "@/components/hero/index"
import Products from "@/features/products/index"
import Categories from "@/components/catogories/index"


export default function Page() {
  return (
    <div className="container px-auto">
        <SignUpBanner />
        <Navbar />
        <Hero />
        <Products />
        <Categories />
    </div>
  )
}
