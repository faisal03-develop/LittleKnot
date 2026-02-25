import { Twitter, Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
    return (
        <div className="bg-[#F0F0F0] -z-1">
            <div className="pb-10 pt-40 px-5 md:px-10 lg:px-20 xl:px-30">
                <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">
                    <div className="flex flex-col gap-6">
                        <div>
                            <span className="text-4xl lg:text-5xl font-black">LITTLE KNOT</span>
                        </div>
                        <div className="max-w-[300px]">
                            <p className="text-gray-600 text-sm">The best place to find the best products for your baby.</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="bg-white p-2 rounded-full border border-gray-300 cursor-pointer hover:bg-black hover:text-white transition-colors group">
                                <Twitter className="fill-black group-hover:fill-white transition-colors" size={20} />
                            </div>
                            <div className="bg-white p-2 rounded-full border border-gray-300 cursor-pointer hover:bg-black hover:text-white transition-colors group">
                                <Facebook className="fill-black group-hover:fill-white transition-colors" size={20} />
                            </div>
                            <div className="bg-white p-2 rounded-full border border-gray-300 cursor-pointer hover:bg-black hover:text-white transition-colors group">
                                <Instagram className="fill-black group-hover:fill-white stroke-white group-hover:stroke-black transition-colors" size={20} />
                            </div>
                            <div className="bg-white p-2 rounded-full border border-gray-300 cursor-pointer hover:bg-black hover:text-white transition-colors group">
                                <Youtube className="stroke-black fill-none group-hover:stroke-white transition-colors" strokeWidth={1.5} size={20} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap sm:flex-nowrap gap-10 sm:gap-16 lg:gap-20">
                        <div className="w-[120px] sm:w-auto">
                            <div className="flex flex-col gap-4">
                                <div>
                                    <span className="text-xl font-black tracking-widest">COMPANY</span>
                                </div>
                                <div>
                                    <ul className="flex flex-col gap-3">
                                        <li><a href="#" className="text-gray-600 hover:text-black transition-colors">About Us</a></li>
                                        <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Contact Us</a></li>
                                        <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Works</a></li>
                                        <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Careers</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-[120px] sm:w-auto">
                            <div className="flex flex-col gap-4">
                                <div>
                                    <span className="text-xl font-black tracking-widest">HELP</span>
                                </div>
                                <div>
                                    <ul className="flex flex-col gap-3">
                                        <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Customer Support</a></li>
                                        <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Delivery Details</a></li>
                                        <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Terms & Conditions</a></li>
                                        <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-[120px] sm:w-auto">
                            <div className="flex flex-col gap-4">
                                <div>
                                    <span className="text-xl font-black tracking-widest">FAQ</span>
                                </div>
                                <div>
                                    <ul className="flex flex-col gap-3">
                                        <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Account</a></li>
                                        <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Manage Deliveries</a></li>
                                        <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Orders</a></li>
                                        <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Payments</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-gray-300">
                    <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
                        <div className="text-center md:text-left">
                            <span>Little Knot © 2000-2024, All Rights Reserved</span>
                        </div>
                        <div className="flex justify-center gap-4">
                            <button className="bg-white border border-gray-300 rounded-md px-3 py-1 text-xs font-bold hover:bg-gray-50">VISA</button>
                            <button className="bg-white border border-gray-300 rounded-md px-3 py-1 text-xs font-bold hover:bg-gray-50">MasterCard</button>
                            <button className="bg-white border border-gray-300 rounded-md px-3 py-1 text-xs font-bold hover:bg-gray-50">PayPal</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
