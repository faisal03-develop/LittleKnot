import Navbar from "@/components/navbar/index"
import SignUpBanner from "@/components/sign-up-banner/index"
import Hero from "@/components/hero/index"
import Products from "@/features/products/index"
import Categories from "@/components/catogories/index";
import Messeges from "@/components/messeges";
import CustomerFeedback from "@/components/customer-feedback/index"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <SignUpBanner />

      {/* Navbar and Hero */}
      <div className="container mx-auto px-4">
        <Navbar />
        <Hero />
      </div>

      {/* Messages Section */}
      <Messeges />

      {/* Products & Categories */}
      <div className="container mx-auto px-4">
        <Products />
        <Categories />
        <CustomerFeedback />
      </div>
    </div>
  )
}
