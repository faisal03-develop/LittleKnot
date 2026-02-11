import Image from "next/image"


export default function index() {
  return (
    <div>
        <div className="flex flex-col lg:flex-row relative items-center justify-between gap-10 lg:py-0">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left lg:pt-10 pt-10 px-4">
                <div className="max-w-xl">
                    <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight block">Handmade Hair Accessories, Sweetly Yours</span>
                </div>
                <div className="mt-5 max-w-lg">
                    <span className="text-base md:text-lg">Delightful handmade hair accessories for your sweet little ones. Thoughtfully customized and crafted with love and care.</span>
                </div>
                <button className="bg-black text-white font-extralight flex items-center justify-center rounded-3xl text-sm w-52 h-12 my-8 hover:opacity-80 transition-opacity">
                SHOP NOW
                </button>
                <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-10 lg:gap-20 mt-7">
                    <div className="flex flex-col items-center pb-10 lg:items-start">
                        <span className="text-3xl md:text-3xl font-bold">64+</span>
                        <span className="font-extralight text-sm">Brands</span>
                    </div>
                    <div className="flex flex-col items-center pb-10 lg:items-start">
                        <span className="text-3xl md:text-3xl font-bold">234+</span>
                        <span className="font-extralight text-sm">Products</span>
                    </div>
                    <div className="flex flex-col items-center pb-10 lg:items-start">
                        <span className="text-3xl md:text-3xl font-bold">2397+</span>
                        <span className="font-extralight text-sm">Happy Customers</span>
                    </div>
                </div>
            </div>

            {/* Image Content */}
            <div className="w-full lg:w-1/2 relative flex justify-center min-h-[400px] lg:min-h-[600px]">
                <div className="relative w-full max-w-md lg:max-w-full flex justify-center">
                    <Image src="/assets/musha.png" height={800} width={400} alt="Hero Image" className="object-contain relative z-10 w-auto h-auto md:mt-40 lg:mt-10 max-h-[500px] lg:max-h-[800px]" />
                    
                    {/* Decorative Elements */}
                    <Image src="/vector/small-star.png" height={56} width={56} alt="small-star" className="absolute top-1/4 right-3/4 animate-pulse" />
                    <Image src="/vector/big-star.png" height={104} width={104} alt="big-star" className="absolute top-10 right-10 lg:right-30 animate-pulse" />
                </div>
            </div>
        </div>
    </div>
  )
}
