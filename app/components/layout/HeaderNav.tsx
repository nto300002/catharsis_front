'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const HeaderNav = () => {
  const [isClicked, setIsClicked] = useState(false);
  const styleHover =
    'bg-white opacity-6 rounded-md p-2 hover:text-blue-500 mb-3';
  return (
    <div className="">
      <div
        onClick={() => setIsClicked(!isClicked)}
        className="fixed top-24 right-10 text-center w-20 h-20 bg-red-200 rounded-full shadow-lg text-left hover:cursor-pointer hover:bg-red-300 transition duration-300 ease-in-out shadow-md"
      >
        <p className="pt-6">Menu</p>
      </div>
      {isClicked ? (
        <>
          <div className="fixed top-36 right-0 text-gray-800 p-6 right-0 mt-2 w-56 text-left z-8">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <Link href="/values">
                <p className={styleHover}>あなたの価値</p>
              </Link>
              <Link href="/problems">
                <p className={styleHover}>苦しい気持ちに対処する</p>
              </Link>
              <Link href="/emotions">
                <p className={styleHover}>心をオープンにする</p>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HeaderNav;
