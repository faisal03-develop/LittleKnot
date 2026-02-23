import { Mail } from "lucide-react"

export default function NewsLetterForm() {
    return (
        <div className="py-15 px-20">
            <div className="bg-black rounded-2xl py-10 px-20 flex flex-row justify-between">
                <div>
                    <span className="text-white text-5xl font-black">
                        STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
                    </span>
                </div>
                <div className="">
                    <form action="post" className="flex flex-col justify-center items-center gap-2">
                        <div className="flex bg-white rounded-full p-4 gap-4">
                            <Mail />
                            <input type="text" placeholder="Enter your email Address..." className="bg-white outline-none" />
                        </div>
                        <button className="flex bg-white rounded-full p-3 px-5 w-60" type="submit">Subscribe to Newsletter</button>
                    </form>
                </div>
            </div>
        </div>
    )
}