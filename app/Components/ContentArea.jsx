"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPizza } from "../context/Slice/pizzaSlice";
import {
  setCartPizza,
  addToCart,
  removeToCart,
} from "@/app/context/Slice/cardSlice";

export default function ContentArea() {
  const [pizzas, setPizzas] = useState([]);
  const dispatch = useDispatch();

  const getPizzas = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/pizza/get-pizza"
      );
      console.log("🚀 ~ getPizzas ~ response:", response);
      if (response.status === 200) {
        dispatch(setPizza(response.data.pizza));
        dispatch(setCartPizza(response.data.pizza));
        setPizzas(response.data.pizza);
      }
      console.log("🚀 ~ getPizzas ~ dispatch:", dispatch);
    } catch (error) {
      console.log("🚀 ~ getPizzas ~ error:", error);
    }
  };
  useEffect(() => {
    getPizzas();
  }, []);
  const controller = useSelector((state) => state.cart.cartItem);
  console.log("🚀 ~ ContentArea ~ controller:", controller);
  console.log("🚀 ~ ContentArea ~ pizzas:", pizzas);
  return (
    <div className="container mx-auto mt-6 ">
      <div className="grid w-full grid-cols-4 px-3 gap-x-16 gap-y-5 max-sm:grid-cols-1 max-lg:grid-cols-2 max-sm:px-8">
        {pizzas &&
          pizzas?.map((item) => {
            return (
              <div
                className="relative flex flex-col text-gray-700 bg-white shadow-md w-80 rounded-xl bg-clip-border"
                key={item._id}
              >
                <div className="relative mx-4 -mt-6 overflow-hidden text-white shadow-lg h-60 rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 ">
                  <Image
                    src={item.image}
                    alt="quattro stagioni"
                    width={200}
                    height={200}
                    className="object-cover mt-6 ml-11 "
                  />
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
                  <Link href={`/`}>
                    <button
                      type="button"
                      className="select-none w-full rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                      Daha Fazla
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
