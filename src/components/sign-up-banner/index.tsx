'use client'
import { useState } from "react";

export default function Index() {
  const [showBanner, setShowBanner] = useState(true);
  return (
    <div>
      {showBanner &&
        <div className="h-[34px] md:h-[38px] bg-black w-full flex justify-between items-center px-5">
            <span className="text-black">x</span>
            <span className="text-white">SignUp and get 20% of to your first order <a href="#" className="text-white underline">Sign Up</a></span>
            <span className="text-white cursor-pointer" onClick={() => {setShowBanner(false); return;}}>x</span>
        </div>
        }
    </div>
  )
}
