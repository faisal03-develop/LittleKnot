'use client';
import { useEffect, useState } from "react";

export default function Index() {

    const [index, setIndex] =useState(0);

    const messeges = [
        'Handmade with Love',
        'Custom-Made for Little Ones',
        'Bows, Scrunchies & Hairpins',
        'Gentle on Little Hair',
        'Thoughtfully Crafted Details',
        ]

    useEffect(() => {
        const interval = setInterval(() => {
            
            setIndex((prevIndex) => (prevIndex + 1) % messeges.length);
        }, 3000);
        return () => clearInterval(interval)
    },[])

  return (
    <div className="text-gray-100 text-4xl font-bold">
        {messeges[index]}
    </div>
  )
}
