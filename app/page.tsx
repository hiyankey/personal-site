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
            src="https://assets.artfullywalls.com/works/70583/big-thumb-2024-01-26-oy9w-y4yV2ONtAZTdNAOen9yh7p25USDkdTgGl6anfa4jdE7JZIq_yr8wHDcyVI3O435J861ThgjBIwI.jpg"
            className="aspect-square w-[120px] rounded-[4px]"
            width={120}
            height={120}
            alt="01's image"
          />
          <Image
            src="https://assets.artfullywalls.com/works/72558/big-thumb-2024-02-27-3F3NfcV0VsS5PhpjDRsMzfdgNrz2-aKhgDcCXy5Sv8mMNdVqVjcwy_-EmsHr4yj5mn-Y3T1SL0zC32uS.jpg"
            className="aspect-square w-[120px] rounded-[4px]"
            width={120}
            height={120}
            alt="02's image"
          />
          <Image
            src="https://assets.artfullywalls.com/works/59121/big-thumb-2023-04-30-qfbTHN8pbXaUGFutCK_rVCT8FItdg0MrD4XfCpnzwQPKzBT8RgdWmp-70vldNm9ZWRqEvEIsa7tIwpmY.jpg"
            className="aspect-square w-[120px] rounded-[4px]"
            width={120}
            height={120}
            alt="03's image"
          />
          <Image
            src="https://assets.artfullywalls.com/works/72558/big-thumb-2024-02-27-3F3NfcV0VsS5PhpjDRsMzfdgNrz2-aKhgDcCXy5Sv8mMNdVqVjcwy_-EmsHr4yj5mn-Y3T1SL0zC32uS.jpg"
            className="aspect-square w-[120px] rounded-[4px]"
            width={120}
            height={120}
            alt="04's image"
          />
          <Image
            src="https://assets.artfullywalls.com/works/74385/big-thumb-2024-04-01-l_4loUeeD2hix5BlEiHZRsNl-n9GSGsgUbkNWL6_3by0nvACrXrv8qrbSnY5rMahusHHrPEU86T7Qv4B.jpg"
            className="aspect-square w-[120px] rounded-[4px]"
            width={120}
            height={120}
            alt="05's image"
          />
          <Image
            src="https://assets.artfullywalls.com/works/72558/big-thumb-2024-02-27-3F3NfcV0VsS5PhpjDRsMzfdgNrz2-aKhgDcCXy5Sv8mMNdVqVjcwy_-EmsHr4yj5mn-Y3T1SL0zC32uS.jpg"
            className="aspect-square w-[120px] rounded-[4px]"
            width={120}
            height={120}
            alt="06's image"
          />
        </InfiniteSlider>
      </div>
    </main>
  );
}
