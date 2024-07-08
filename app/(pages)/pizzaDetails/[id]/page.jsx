"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { useParams } from "next/navigation";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
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
  const statePizzaCart = useSelector((state) => state.cart.pizza);
  const stateCartCart = useSelector((state) => state.cart.cart);
  console.log("🚀 ~ page ~ controller:", statePizzaCart);
  console.log("🚀 ~ page ~ stateCartCart:", stateCartCart);
  const handleOnSubmitID = async () => {
    setUploading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/pizza/getPizza/${params.id}`
      );
      setUploading(false);
      if (response.status === 200) {
        setPizzaDetails(response.data.pizza);
        dispatch(setCartPizza(response.data.pizza));
        return response.data.pizza;
      }
    } catch (error) {
      console.log("🚀 ~ handleOnSubmitID ~ error:", error);
      if (error) {
        switch (error.response.status) {
          case 500:
            toast.error("İnternet baglantınızı kontrol edin");
            break;
          case 404:
            toast.error("Bu pizza bulunamadı");
            break;
          default:
            toast.error("Birşeyler ters gitti");
            break;
        }
      }
    }
  };

  useEffect(() => {
    handleOnSubmitID();
  }, []);

  return (
    <div>
      {uploading === false ? (
        pizzaDetails && (
          <div className="px-5 py-4 font-sans" key={pizzaDetails._id}>
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
                <h1 className="text-2xl font-bold text-gray-900 ">
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
                {/* Price */}
                <div className="flex justify-between mt-3 item-center max-md:flex-col max-md:gap-y-5">
                  <select className="w-4/5 max-w-xs cursor-pointer select select-ghost bg-slate-300">
                    <option disabled>Üçretlerimiz</option>
                    <option>{statePizzaCart?.smallPrice}</option>
                    <option>{statePizzaCart?.mediumPrice}</option>
                    <option>{statePizzaCart?.largePrice}</option>
                  </select>
                  <div className="flex justify-end w-1/5 gap-3">
                    <button
                      onClick={() => dispatch(removeToCart(pizzaDetails))}
                      className="px-3 py-1 text-xs font-bold text-white uppercase bg-gray-800 rounded"
                    >
                      <FaMinus />
                    </button>
                    <button className="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded">
                      {statePizzaCart?.quantity || 0}
                    </button>
                    <button
                      onClick={() => dispatch(addToCart(pizzaDetails))}
                      className="px-3 py-1 text-xs font-bold text-white uppercase bg-gray-800 rounded"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-end ">
                  <button
                    onClick={() => dispatch(addToCart(pizzaDetails))}
                    className="px-5 py-3 mt-4 text-xs font-bold text-white uppercase bg-gray-800 rounded lg:-ml-5 "
                  >
                    Sepete Ekle
                  </button>
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
