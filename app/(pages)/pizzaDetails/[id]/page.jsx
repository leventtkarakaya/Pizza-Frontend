"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { useParams } from "next/navigation";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { setPizza } from "@/app/context/Slice/pizzaSlice";
import {
  setCartPizza,
  addToCart,
  removeToCart,
} from "@/app/context/Slice/cardSlice";
import loading from "@/public/loading.gif";
export default function page() {
  const [pizzaDetails, setPizzaDetails] = useState([]);
  const [uploading, setUploading] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();
  const handleID = async () => {
    setUploading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/pizza/getPizza/${params.id}`
      );
      setUploading(false);
      if (response.status === 200) {
        setPizzaDetails(response.data.pizza);
        dispatch(setPizza(response.data.pizza));
        return response.data.pizza;
      }
    } catch (error) {
      console.log("🚀 ~ handleID ~ error:", error);
    }
  };
  useEffect(() => {
    handleID();
  }, []);
  return (
    <div>
      {uploading === false ? (
        pizzaDetails && (
          <div className="px-5 py-4 " key={pizzaDetails._id}>
            <div className="flex items-center bg-white w-full h-[50vh] overflow-hidden  rounded-lg shadow-lg ">
              <div className="flex justify-center w-3/5 bg-cover">
                <Image
                  src={pizzaDetails.image}
                  alt="pizza"
                  width={200}
                  height={200}
                  className="object-cover"
                  decoding="async"
                />
              </div>
              <div className="w-4/5 p-4">
                <h1 className="text-2xl font-bold text-gray-900">
                  {pizzaDetails.name}
                </h1>
                <p className="mt-2 text-sm text-gray-600">
                  {pizzaDetails.description}
                </p>
                {/* Rating */}
                <div className="flex mt-2 item-center">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-orange-400 mask mask-star-2"
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-3 item-center">
                  <h1 className="text-xl font-bold text-gray-700">$220</h1>
                  <div className="flex gap-2">
                    <button
                      onClick={() => dispatch(removeToCart(pizzaDetails))}
                      className="px-2 py-1 text-xs font-bold text-white uppercase bg-gray-800 rounded"
                    >
                      <FaMinus />
                    </button>
                    <button className="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded">
                      {0}
                    </button>
                    <button
                      onClick={() => dispatch(addToCart(pizzaDetails))}
                      className="px-2 py-1 text-xs font-bold text-white uppercase bg-gray-800 rounded"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      ) : (
        <div className="w-full h-[50vh] flex justify-center items-center">
          <Image src={loading} alt="loading" width={100} height={100} />
        </div>
      )}
    </div>
  );
}
