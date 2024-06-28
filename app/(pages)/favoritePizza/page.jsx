"use client";
import React from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import pizaa from "@/public/tonno.webp";
import loading from "@/public/loading.gif";
import style from "@/app/(pages)/favoritePizza/favorite.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
export default function page() {
  return (
    <div className="flex w-full h-screen pt-20 max-lg:h-[40vh]">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 70,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          scale: 0.5,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        style={{
          margin: "0 auto",
          position: "relative",
          width: "40%",
          height: "100%",
        }}
      >
        <SwiperSlide className="flex w-full h-full">
          <Image
            src={pizaa}
            alt="pizza"
            width={350}
            height={350}
            className="w-full "
          />
        </SwiperSlide>
        <SwiperSlide className="flex w-full h-full ">
          <Image
            src={pizaa}
            alt="pizza"
            width={350}
            height={350}
            className="w-full "
          />
        </SwiperSlide>
        <SwiperSlide className="flex w-full h-full ">
          <Image
            src={pizaa}
            alt="pizza"
            width={350}
            height={350}
            className="w-full "
          />
        </SwiperSlide>
        <SwiperSlide className="flex w-full h-full ">
          <Image
            src={pizaa}
            alt="pizza"
            width={350}
            height={350}
            className="w-full "
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
