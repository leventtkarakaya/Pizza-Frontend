"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/pizza-banner.png";
import Logo1 from "@/public/logo.svg";

export default function page() {
  const [category, setCategory] = useState(1);
  const Pagination = [
    {
      id: 1,
      name: "Hepsi",
      value: "Hepsi",
    },
    {
      id: 2,
      name: "Etli",
      value: "Etli",
    },
    {
      id: 3,
      name: "Sebzeli",
      value: "Sebzeli",
    },
    {
      id: 4,
      name: "Soslu",
      value: "Soslu",
    },
    {
      id: 5,
      name: "Peynirli",
      value: "Peynirli",
    },
    {
      id: 6,
      name: "Karışık",
      value: "Karışık",
    },
  ];
  const handleClick = (id: number, value: string) => {
    setCategory(id);
    console.log(value);
    console.log(id);
  };
  return (
    <>
      <div className="p-8 rounded border border-gray-200 lg:mt-16 lg:px-20 font-sans flex items-center flex-col">
        <div className="flex flex-col gap-4 w-full ">
          {/* Pagination */}
          <div className="flex justify-around btn-nav w-full ">
            {Pagination.map((item) => (
              <button
                key={item.id}
                className={
                  category === item.id
                    ? "px-12 py-6 bg-gradient-to-r from-[#e6e5e4] to-[#d1411d] text-white font-sans font-semibold rounded-md"
                    : "px-12 py-6 bg-gradient-to-r bg-[#d1411d] text-white font-sans font-semibold rounded-md"
                }
                onClick={() => handleClick(item.id, item.value)}
              >
                {item.name}
              </button>
            ))}
          </div>
          {/* card */}
          <div className="grid grid-cols-4 w-full gap-x-28 mt-20 gap-y-10 px-10 max-sm:grid-cols-1 max-lg:grid-cols-2 max-lg:gap-x-24 max-lg:px-10  max-sm:px-0 ">
            <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-60 overflow-hidden  rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40  ">
                <Image
                  src={Logo}
                  alt="quattro stagioni"
                  width={200}
                  height={200}
                  className="object-cover ml-11 mt-6 "
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Tailwind card
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  felis ligula.
                </p>
              </div>
              <div className="p-6 pt-0">
                <button
                  type="button"
                  className="select-none w-full rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Daha Fazla
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
