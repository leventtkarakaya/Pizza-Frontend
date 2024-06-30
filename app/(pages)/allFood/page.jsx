"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import loading from "@/public/loading.gif";
export default function page() {
  const [categories, setCategories] = useState(1);
  const [category, setCategory] = useState({
    value: "Hepsi",
  });
  const [foods, setFoods] = useState([]);
  const [uploading, setUploading] = useState(false);
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
    setCategories(id);
    setCategory({ value: value });
  };

  const handleOnGetPizzas = async () => {
    try {
      setUploading(true);
      const response = await axios.get(
        `http://localhost:5000/api/pizza/getAllFood?category=${category.value}`
      );
      setUploading(false);
      if (response.status === 200) {
        setFoods(response.data.pizza);
      }
    } catch (error) {
      console.log("🚀 ~ handleOnGetPizzas ~ error:", error);
    }
  };
  useEffect(() => {
    handleOnGetPizzas();
  }, [category]);
  return (
    <>
      <div className="flex flex-col items-center p-8 font-sans border border-gray-200 rounded lg:mt-16 lg:px-20 ">
        <div className="flex flex-col w-full gap-4 ">
          {/* Pagination */}
          <div className="flex justify-around w-full btn-nav max-md:gap-4">
            {Pagination.map((item) => (
              <button
                key={item.id}
                className={
                  categories === item.id
                    ? "px-12 py-6 bg-gradient-to-r from-[#e6e5e4] to-[#d1411d] text-white font-sans font-semibold rounded-md "
                    : "px-12 py-6 bg-gradient-to-r bg-[#d1411d] text-white font-sans font-semibold rounded-md"
                }
                onClick={() => handleClick(item.id, item.value)}
              >
                {item.name}
              </button>
            ))}
          </div>
          {/* card */}
          <div className="grid w-full grid-cols-4 px-10 mt-20 gap-x-28 gap-y-10 max-sm:grid-cols-1 max-lg:grid-cols-2 max-lg:gap-x-24 max-lg:px-10 max-sm:px-0 bg">
            {uploading === false
              ? foods?.map((item) => {
                  return (
                    <>
                      <div
                        className="relative flex flex-col text-gray-700 bg-white shadow-md w-80 rounded-xl bg-clip-border"
                        key={item._id}
                      >
                        <div className="relative mx-4 -mt-6 overflow-hidden text-white shadow-lg h-60 rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 ">
                          <Link
                            href={`/pizzaDetails/${item._id}`}
                            key={item._id}
                          >
                            <Image
                              src={item.image}
                              alt="quattro stagioni"
                              width={200}
                              height={200}
                              className="object-cover mt-6 ml-11 "
                            />
                          </Link>
                        </div>
                        <div className="p-6">
                          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {item.name}
                          </h5>
                          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                            {item.description}
                          </p>
                        </div>
                        <div className="p-6 pt-0">
                          <button
                            type="button"
                            className="select-none w-full rounded-lg bg-gradient-to-r from-[#e9d5d0] to-[#d1411d] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          >
                            Siparişe Ekle
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })
              : uploading === true && (
                  <div className="grid w-full col-span-full place-items-center">
                    <Image
                      src={loading}
                      alt="loading"
                      width={200}
                      height={200}
                    />
                  </div>
                )}
            {uploading === false
              ? foods?.length === 0 && (
                  <div className="grid w-full col-span-full place-items-center h-80">
                    <h1>Ürün bulunamadı</h1>
                  </div>
                )
              : foods?.length > 1 &&
                foods?.map((item) => {
                  return (
                    <>
                      <div
                        className="relative flex flex-col text-gray-700 bg-white shadow-md w-80 rounded-xl bg-clip-border"
                        key={item._id}
                      >
                        <div className="relative mx-4 -mt-6 overflow-hidden text-white shadow-lg h-60 rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 ">
                          <Link
                            href={`/pizzaDetails/${item._id}`}
                            key={item._id}
                          >
                            <Image
                              src={item.image}
                              alt="quattro stagioni"
                              width={200}
                              height={200}
                              className="object-cover mt-6 ml-11 "
                            />
                          </Link>
                        </div>
                        <div className="p-6">
                          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {item.name}
                          </h5>
                          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                            {item.description}
                          </p>
                        </div>
                        <div className="p-6 pt-0">
                          <button
                            type="button"
                            className="select-none w-full rounded-lg bg-gradient-to-r from-[#e9d5d0] to-[#d1411d] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          >
                            Siparişe Ekle
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
}
