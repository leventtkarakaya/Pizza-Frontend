"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.svg";
import Avatar from "@/public/Avatar.png";
import Bag from "@/public/bag.svg";
export default function Header() {
  return (
    <>
      <div className="flex w-full justify-between items-center bg-[#e9d5d0] opacity-100 font-sans p-6">
        <Image src={Logo} alt="Logo" width={100} height={100} />
        <div className="flex items-center font-semibold text-black cursor-pointer gap-12 ">
          <Link
            href="/"
            className="text-[22px] font-semibold cursor-pointer hover:text-slate-600 max-sm:hidden "
          >
            <span>Pizzalar</span>
          </Link>
          <Link
            href="/"
            className="text-[22px] font-semibold hover:text-slate-600 max-sm:hidden "
          >
            <span>Favoriler</span>
          </Link>
          <Link
            href="/"
            className="text-[22px]  font-semibold hover:text-slate-600 max-sm:hidden "
          >
            <span>Sevilenler</span>
          </Link>
          {/* Admin */}
          <Link
            href="/"
            className="text-[22px]  font-semibold hover:text-slate-600 max-sm:hidden "
          >
            <span>Pizza Ekle</span>
          </Link>
          <Link href="/">
            <div className="relative ">
              <Image src={Bag} alt="Logo" width={35} height={35} />
              <span className="absolute top-6 -right-0  w-5 h-5 bg-black text-sm  rounded-full flex justify-center items-center text-white">
                0
              </span>
            </div>
          </Link>
          <Image
            src={Avatar}
            alt="Logo"
            width={60}
            height={60}
            className="cursor-pointer relative w-12 h-12 "
          />
        </div>
      </div>
    </>
  );
}
