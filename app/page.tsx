'use client';
import { InfiniteSlider } from '@ui/infinite-slider';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
    if (theme) {
      localStorage.theme = 'light';
    } else {
      localStorage.theme = 'dark';
    }
  }, [theme]);

  return (
    <main>
      <div className="mx-auto max-w-[600px] py-[96px]">
        <h3 className="mb-[28px] font-display text-lg">
          Yan J.{' '}
          <button
            type="button"
            className="w-fit rounded-md border-[#fff]/[.05] border-[1px] bg-[#fff]/[.03] px-[6px] py-[2px] font-sans text-xs"
            onClick={() => {
              setTheme((prev) => !prev);
            }}
          >
            {' '}
            {theme ? 'light' : 'dark'}
          </button>
        </h3>
        <div className="mb-[28px] space-y-[14px] text-[#c9c9c9]">
          <p>i'm a design engineer based in Santorini.</p>
          <p>i love learning and sweating the details.</p>
          <p>rn, i'm pushing code and exploring design with curiosity.</p>
        </div>
        <div className="w-fit font-sans text-xs">
          press{' '}
          <span className="inline-flex h-fit w-fit place-items-center rounded-sm border-[#fff]/[.05] border-[1px] bg-[#fff]/[.03] px-1 py-[.5px] text-[#c9c9c9] ">
            c
          </span>{' '}
          to copy email
        </div>

        <InfiniteSlider pauseOnHover className="my-[56px]">
          <Image
            src="https://i.Imageur.com/NfGQgBk.png"
            className="aspect-square w-[120px] rounded-[4px]"
            alt="01's image"
          />
          <Image
            src="https://i.Imageur.com/EeC1h3b.jpeg"
            className="aspect-square w-[120px] rounded-[4px]"
            alt="02's image"
          />
          <Image
            src="https://i.Imageur.com/4VCS3zG.jpeg"
            className="aspect-square w-[120px] rounded-[4px]"
            alt="03's image"
          />
          <Image
            src="https://i.Imageur.com/yWunBhl.jpeg"
            className="aspect-square w-[120px] rounded-[4px]"
            alt="04's image"
          />
          <Image
            src="https://i.Imageur.com/dfDyDad.jpeg"
            className="aspect-square w-[120px] rounded-[4px]"
            alt="05's image"
          />
          <Image
            src="https://i.Imageur.com/7N3FxDW.jpeg"
            className="aspect-square w-[120px] rounded-[4px]"
            alt="06's image"
          />
        </InfiniteSlider>
      </div>
    </main>
  );
}
