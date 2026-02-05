import Navbar from "@/components/navbar/index"
import SignUpBanner from "@/components/sign-up-banner/index"
import Hero from "@/components/hero/index"
import Products from "@/features/products/index"
import Categories from "@/components/catogories/index";
// import Messeges from "@/components/messeages";


export default function Page() {
  return (
    <div>
        <SignUpBanner />
    <div className="container px-auto mx-auto">
        <Navbar />
        <Hero />
        <Products />
        <Categories />
    </div>
    
    </div>
  )
}
