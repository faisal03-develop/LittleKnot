import Image from "next/image"

export default function index() {
  return (
    <div>
        <div className="flex flex-row relative">
            <div className="w-150 mx-auto py-30">
                <div className="w-150">
                    <span className="text-6xl font-extrabold">LOVINGLY HANDMADE BOWS FOR LITTLE ONES</span>
                </div>
                <div className="mt-5">
                    <span className="">Delightful handmade hair accessories for your sweet little ones. Thoughtfully customized and crafted with love and care.</span>
                </div>
                <button className="bg-black text-white font-extralight py-4 px-4 rounded-3xl text-sm w-52 h-12 my-8">
                SHOP NOW
                </button>
            </div>
            <div className="mx-auto reltive">
                <Image src="/assets/hero-imag.png" height={800} width={400} alt="Hero Image"></Image>
                <div>
                    <Image src="/vector/small-star.png" height={56} width={56} alt="small-star" className="absolute top-50"></Image>
                    <Image src="/vector/big-star.png" height={104} width={104} alt="big-star" className="absolute top-20 right-30"></Image>
                </div>
            </div>
        </div>
    </div>
  )
}
