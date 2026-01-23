import Navbar from "@/components/navbar/index"
import SignUpBanner from "@/components/sign-up-banner/index"
import Hero from "@/components/hero/index"


export default function Page() {
  return (
    <div>
      <SignUpBanner />
      <div className="container mx-auto px-4">
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}
