"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/pizza-banner.png";

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
  const handleClick = (id, value) => {
    setCategory(id);

    console.log(id);
    console.log(value);
  };
  return (
    <>
      <div className="flex flex-col items-center p-8 font-sans border border-gray-200 rounded lg:mt-16 lg:px-20">
        <div className="flex flex-col w-full gap-4 ">
          {/* Pagination */}
          <div className="flex justify-around w-full btn-nav ">
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
          <div className="grid w-full grid-cols-4 px-10 mt-20 gap-x-28 gap-y-10 max-sm:grid-cols-1 max-lg:grid-cols-2 max-lg:gap-x-24 max-lg:px-10 max-sm:px-0 ">
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-80 rounded-xl bg-clip-border">
              <div className="relative mx-4 -mt-6 overflow-hidden text-white shadow-lg h-60 rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 ">
                <Image
                  src={Logo}
                  alt="quattro stagioni"
                  width={200}
                  height={200}
                  className="object-cover mt-6 ml-11 "
                />
              </div>
              <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Tailwind card
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
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
