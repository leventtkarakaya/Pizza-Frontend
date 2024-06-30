"use client";
import React from "react";
import dynamic from "next/dynamic";
import loading from "@/public/loading.gif";
import Image from "next/image";
const Map = dynamic(() => import("../../Components/Map"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-96">
      <Image src={loading} alt="loading" width={100} height={100} />
    </div>
  ),
});

export default function page() {
  return (
    <>
      <Map />
    </>
  );
}
