'use client'
import { InfiniteSlider } from "@ui/infinite-slider";
import { useEffect, useState } from "react";


export default function Home() {
  const [theme, setTheme]= useState(false)

  useEffect(() => { 
    document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
    )
    if (theme) {
            localStorage.theme = "dark"
          } else {
            localStorage.theme = "light"
    }

  }, [theme])

  return (
   <main>

      <div className="max-w-[600px] mx-auto py-[96px]">
        <h3 className="font-display text-lg mb-[28px]">Yan J.</h3>
        <div className="space-y-[14px] text-[#c9c9c9] mb-[28px]">
          <p>i'm a design engineer based in Santorini.</p>
          <p>i love learning and sweating the details.</p>
          <p>rn, i'm pushing code and exploring design with curiosity.</p>
        </div>
         <div className="w-fit font-sans text-xs">press <span className="px-1 py-[.5px] rounded-sm border-[1px] border-[#fff]/[.05] bg-[#fff]/[.03] place-items-center inline-flex w-fit h-fit text-[#c9c9c9] ">c</span> to copy email</div>
        <button type="button" className="w-fit font-sans text-xs px-[6px] py-[2px] rounded-md border-[1px] border-[#fff]/[.05] bg-[#fff]/[.03]" onClick={() => {
          setTheme(prev => !prev)
          
         }}>toggle theme {theme ? 'dark': 'light'}</button>


        <InfiniteSlider pauseOnHover className="my-[56px]">
      <img
        src="https://i.imgur.com/NfGQgBk.png"
        className="aspect-square w-[120px] rounded-[4px]"
        alt="01's image"
      />
      <img
        src="https://i.imgur.com/EeC1h3b.jpeg"
        className="aspect-square w-[120px] rounded-[4px]"
        alt="02's image"
      />
      <img
        src="https://i.imgur.com/4VCS3zG.jpeg"
        className="aspect-square w-[120px] rounded-[4px]"
        alt="03's image"
      />
      <img
        src="https://i.imgur.com/yWunBhl.jpeg"
        className="aspect-square w-[120px] rounded-[4px]"
        alt="04's image"
      />
      <img
        src="https://i.imgur.com/dfDyDad.jpeg"
        className="aspect-square w-[120px] rounded-[4px]"
        alt="05's image"
      />
      <img
        src="https://i.imgur.com/7N3FxDW.jpeg"
        className="aspect-square w-[120px] rounded-[4px]"
        alt="06's image"
      />
        </InfiniteSlider>
        
</div>
   </main>
  );
}
