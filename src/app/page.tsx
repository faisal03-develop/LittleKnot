import Navbar from "@/components/navbar/index"
import SignUpBanner from "@/components/sign-up-banner/index"




export default function Home() {
  return (
    <div className="container mx-auto px-4">
    <SignUpBanner />
    <Navbar />
    </div>
  );
}
