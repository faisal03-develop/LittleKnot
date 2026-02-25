import { Mail } from "lucide-react"

export default function NewsLetterForm() {
    return (
        <div className="py-10 lg:px-20 md:px-10 px-5 relative -bottom-32 lg:-bottom-40 z-10">
            <div className="bg-black rounded-3xl py-8 md:py-10 lg:px-20 md:px-10 px-6 flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0 shadow-xl">
                <div className="flex items-center justify-center text-center lg:text-left">
                    <span className="text-white text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                        STAY UPTO DATE ABOUT <br className="hidden md:block" /> OUR LATEST OFFERS
                    </span>
                </div>
                <div className="mt-2 lg:mt-0 w-full lg:w-auto items-center justify-center flex">
                    <form action="post" className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-2 w-full lg:w-auto">
                        <div className="flex bg-white rounded-full p-3 px-5 gap-3 w-full sm:w-auto items-center flex-1">
                            <Mail className="text-gray-400" size={20} />
                            <input type="email" placeholder="Enter your email address" className="bg-white text-base outline-none w-full sm:w-[250px] min-w-0" />
                        </div>
                        <button className="text-center bg-white rounded-full p-3 px-6 text-base font-semibold w-full sm:w-auto hover:bg-gray-100 transition-colors whitespace-nowrap" type="submit">Subscribe to Newsletter</button>
                    </form>
                </div>
            </div>
        </div>
    )
}