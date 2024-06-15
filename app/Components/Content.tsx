"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import pattern from "@/public/pattern.png";
import Pizza from "@/public/pizza-banner.png";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import garlic1 from "@/public/garlic-1.png";
import garlic2 from "@/public/garlic-2.png";
import garlic3 from "@/public/garlic-3.png";
import chilli1 from "@/public/chilli-1.png";
import chilli2 from "@/public/chilli-2.png";
import leaves from "@/public/leaves.png";
export default function Content() {
  return (
    <MouseParallaxContainer globalFactorX={0.3} globalFactorY={0.3}>
      <div className="flex justify-center items-center bg-[#d1411d] relative z-0 max-lg:h-screen ">
        <Image
          src={pattern}
          alt="pizza"
          style={{ backgroundImage: "url(/pattern.png)" }}
          className="bg-cover bg-center bg-no-repeat relative w-full object-cover object-center  max-lg:h-full"
        />
        {/* Pizza Banner */}
        <div className="absolute w-full z-10 ">
          <div className="flex items-center justify-center max-lg:flex-col max-lg:flex z-20">
            <MouseParallaxChild
              factorX={0.1}
              factorY={0.1}
              className="max-sm:flex max-sm:justify-center max-sm:items-center"
            >
              <div className="flex flex-col justify-center items-center mr-20  tracking-widest leading-loose max-sm:mr-1">
                <h1 className="text-[50px] font-extrabold text-white max-sm:font-light max-sm:text-[26px]">
                  Şehrin En İyİ Pİzzaları
                </h1>
                <h1 className="text-[50px] font-extrabold text-white max-sm:font-light max-sm:text-[26px]">
                  Lezzeti Anlatılmaz
                </h1>
                <h1 className="text-[50px] font-extrabold text-white max-sm:font-light max-sm:text-[26px]">
                  Yaşanır
                </h1>
              </div>
            </MouseParallaxChild>
            <div className="flex relative">
              <MouseParallaxChild factorX={0.1} factorY={0.1}>
                <Image
                  src={Pizza}
                  alt="pizza"
                  width={600}
                  height={600}
                  className="max-sm:w-[300px] max-sm:h-[300px]"
                />
              </MouseParallaxChild>
              <div className="absolute top-24 z-10 max-sm:hidden">
                <MouseParallaxChild factorX={0.1} factorY={0.2}>
                  <Image
                    src={garlic1}
                    alt="garlic"
                    width={80}
                    height={80}
                    className="relative top-10 -ml-10 max-sm:w-[20px] max-sm:h-[20px] max-lg:top-0"
                  />
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.1} factorY={0.2}>
                  <Image
                    src={garlic2}
                    alt="garlic"
                    width={80}
                    height={80}
                    className="relative top-10 ml-5  max-sm:w-[20px] max-sm:h-[20px] max-lg:top-0"
                  />
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.1} factorY={0.2}>
                  <Image
                    src={garlic3}
                    alt="garlic"
                    width={80}
                    height={80}
                    className="relative top-10 -ml-10 max-sm:h-[20px] max-sm:[top-20px] max-lg:top-0"
                  />
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.1} factorY={0.3}>
                  <Image
                    src={chilli1}
                    alt="chilli"
                    width={80}
                    height={80}
                    className="relative top-20 -ml-10 max-sm:h-[20px] max-sm:[top-20px] max-lg:top-0"
                  />
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.1} factorY={0.3}>
                  <Image
                    src={chilli2}
                    alt="chilli"
                    width={80}
                    height={80}
                    className="relative top-20 -ml-10  max-sm:w-[20px] max-sm:h-[20px] max-lg:top-0 "
                  />
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.1} factorY={0.2}>
                  <Image
                    src={leaves}
                    alt="leaves"
                    width={80}
                    height={80}
                    className="relative top-24 ml-5  max-sm:w-[20px] max-sm:h-[20px] max-lg:top-0"
                  />
                </MouseParallaxChild>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MouseParallaxContainer>
  );
}
