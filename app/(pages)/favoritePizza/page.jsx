"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import pizaa from "@/public/tonno.webp";
import loading from "@/public/loading.gif";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
export default function page() {
  const [uploading, setUploading] = useState(false);
  const [cart, setCart] = useState([]);
  const favorite = async () => {
    debugger;
    try {
      setUploading(true);
      const response = await axios.get(
        "http://localhost:5000/api/pizza/favoritepizza"
      );
      setUploading(false);
      console.log("🚀 ~ favorite ~ response:", response);
      if (response.status === 200) {
        setCart(response.data.pizza);
      }
    } catch (error) {
      console.log("🚀 ~ favorite ~ error:", error);
    }
  };
  useEffect(() => {
    favorite();
    return () => {
      setCart(cart);
    };
  }, []);
  console.log("🚀 ~ favorite ~ cart:", cart);
  return (
    <div className="px-5 py-5">
      <div className="flex">
        {uploading === false ? (
          <Swiper
            effect={"coverflow"}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
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
              cursor: "pointer",
              width: "40%",
              height: "60vh",
            }}
          >
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center">
                <Link href={`/pizzaDetails/${cart[0]?._id}`}>
                  <Image
                    src={cart[0]?.image}
                    alt="pizza"
                    width={300}
                    height={300}
                    className="object-cover object-center "
                    decoding="async"
                  />
                </Link>
                <div className="py-5 mt-5">
                  <p className="text-xl font-bold ">{cart[0]?.description}</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center">
                <Link href={`/pizzaDetails/${cart[1]?._id}`}>
                  <Image
                    src={cart[1]?.image}
                    alt="pizza"
                    width={300}
                    height={300}
                    className="object-cover object-center "
                    decoding="async"
                  />
                </Link>
                <div className="py-5 mt-5">
                  <p className="text-xl font-bold">{cart[1]?.description}</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <Link href={`/pizzaDetails/${cart[2]?._id}`}>
                  <Image
                    src={cart[2]?.image}
                    alt="pizza"
                    width={300}
                    height={300}
                    className="object-cover object-center "
                    decoding="async"
                  />
                </Link>
                <div className="py-5 mt-5">
                  <p className="text-xl font-bold">{cart[2]?.description}</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center">
                <Link href={`/pizzaDetails/${cart[3]?._id}`}>
                  <Image
                    src={cart[3]?.image}
                    alt="pizza"
                    width={300}
                    height={300}
                    className="object-cover object-center "
                    decoding="async"
                  />
                </Link>
                <div className="py-5 mt-5">
                  <p className="text-xl font-bold">{cart[3]?.description}</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center">
                <Link href={`/pizzaDetails/${cart[4]?._id}`}>
                  <Image
                    src={cart[4]?.image}
                    alt="pizza"
                    width={300}
                    height={300}
                    className="object-cover object-center"
                    decoding="async"
                  />
                </Link>
                <div className="py-5 mt-5">
                  <p className="text-xl font-bold">{cart[4]?.description}</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        ) : (
          <div className="flex items-center justify-center w-full h-full ">
            <Image src={loading} alt="loading" className="w-40" />
          </div>
        )}
      </div>
    </div>
  );
}
