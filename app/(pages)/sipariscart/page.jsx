"use client";
import Image from "next/image";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";
import SiparisCartLayout from "@/app/(pages)/sipariscart/layout";
import "react-toastify/dist/ReactToastify.css";

export default function page() {
  const router = useRouter();
  const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  const stateCartCart = useSelector((state) => state.cart.cart);
  const itemPrice = stateCartCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const taxRate = 0.2;
  const taxRateConctulator = Math.round(itemPrice * taxRate * 100) / 100;
  const shippingPrice = itemPrice > 1500 ? 20 : 0;
  const totalPrice = itemPrice + taxRateConctulator + shippingPrice;
  const user = useSelector((state) => state.user.usersave);
  const [value, setValue] = useState({
    province: "",
    district: "",
    neighbourhood: "",
    apartment: "",
    email: "",
    phone: "",
  });

  const handleValue = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmitAdress = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/pizza/location",
        {
          _id: user._id,
          province: value.province,
          district: value.district,
          neighbourhood: value.neighbourhood,
          apartment: value.apartment,
          email: value.email,
          phone: value.phone,
        }
      );
      console.log(response);
      if (response.status === 200) {
        toast.success("Siparisiniz Adres Eklendi!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.log("🚀 ~ handleOnOrder ~ error:", error);
    }
  };
  const handleFinishOrder = async (e) => {
    debugger;
    e.preventDefault();
    try {
      const orderItems = stateCartCart.map((item) => ({
        pizza: item._id,
        quantity: item.quantity,
      }));
      const response = await axios.post(
        "http://localhost:5000/api/order/create-order",
        {
          user: user._id,
          items: orderItems,
          totalAmount: totalPrice,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("🚀 ~ consthandleFinishOrder= ~ response:", response);
      if (response.status === 200) {
        // ? await (await stripe).redirectToCheckout({ sessionId: response.data.sessionId, });
        await (
          await stripe
        ).redirectToCheckout({
          sessionId: response.data.sessionId,
        });

        toast.success("Siparisiniz Alındı!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        router.push("/success");
      }
    } catch (error) {
      console.log("🚀 ~ consthandleFinishOrder= ~ error:", error);
    }
  };
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/login");
    }
  }, []);
  return (
    <SiparisCartLayout>
      <div className="p-10 ">
        <div className="grid grid-cols-5 h-[80vh] max-md:grid-cols-1 max-md:h-full">
          <div className="col-span-3 rounded-sm ">
            {/* Cart Title */}
            <div className="p-5 font-sans text-2xl font-medium text-center ">
              Siparişleriniz
            </div>
            {/* Cart Items List */}
            <div
              className={`${
                stateCartCart.length > 3
                  ? "overflow-y-scroll scrollbar-thin scrollbar-track-inherit h-[70vh] bg-slate-100"
                  : "overflow-hidden "
              }`}
            >
              {/* Cart Item */}
              {stateCartCart.length > 0 ? (
                stateCartCart.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="grid grid-cols-5 p-2 m-2 border rounded-lg shadow-xl bg-slate-100"
                    >
                      <div className="grid col-span-1 place-items-center ">
                        <Image
                          src={item.image}
                          alt="pizza"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="grid col-span-4 p-5 ">
                        <div className="grid grid-cols-2">
                          <div className="block">
                            <div className="grid grid-cols-2">
                              <h1>{item.name}</h1>
                              <h1>{item.quantity}</h1>
                            </div>
                            <div className="grid grid-cols-2">
                              <h1>İçecek : {item.drink}</h1>
                              <h1>Adet: 1</h1>
                            </div>
                          </div>
                          <div>
                            <h1>Pizza İçerigi : {item.description}</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="grid h-[60vh] font-sans text-2xl place-items-center">
                  <h1>Siparişiniz Bulunmamaktadır </h1>
                </div>
              )}
              {/* Cart Total */}
              {stateCartCart.length > 0 && (
                <div className="flex justify-end w-full p-5">
                  <div className="flex flex-col">
                    <span className="p-5 ml-5 font-sans text-xl font-medium">
                      Toplam Tutar : {totalPrice || 0} TL
                    </span>
                    <div className="flex justify-end">
                      <button
                        className="px-3 py-2 font-sans font-bold text-white bg-green-500 rounded-lg"
                        onClick={handleFinishOrder}
                      >
                        Onayla
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Siparişlerim Adresi */}
          {user && user && (
            <div className="col-span-2 ">
              <div className="p-5 font-sans text-2xl font-medium text-center ">
                Teslimat Adresi
              </div>
              <form onSubmit={handleOnSubmitAdress}>
                <div className="grid grid-cols-2 p-2 mx-2 border rounded-lg shadow-xl gap-y-10 gap-x-5">
                  <h1 className="grid font-sans font-bold col-span-full place-items-center ">
                    Adres Bilgileri
                  </h1>
                  <label>
                    <h1>İl</h1>
                    <input
                      type="text"
                      name="province"
                      id="province"
                      value={value.province}
                      onChange={handleValue}
                      className="w-full h-10 p-5 border rounded-lg shadow-xl bg-slate-100"
                      placeholder="İl Adı"
                      required
                    />
                  </label>
                  <label>
                    <h1>İlçe</h1>
                    <input
                      type="text"
                      name="district"
                      placeholder="İlçe Adı"
                      value={value.district}
                      onChange={handleValue}
                      className="w-full h-10 p-5 border rounded-lg shadow-xl bg-slate-100"
                      required
                    />
                  </label>
                  <label>
                    <h1>Mahalle</h1>
                    <input
                      type="text"
                      name="neighbourhood"
                      id="neighbourhood"
                      value={value.neighbourhood}
                      onChange={handleValue}
                      className="w-full h-10 p-5 border rounded-lg shadow-xl bg-slate-100"
                      placeholder="Mahalle"
                      required
                    />
                  </label>
                  <label>
                    <h1>Daire</h1>
                    <input
                      type="text"
                      name="apartment"
                      id="apartment"
                      value={value.apartment}
                      onChange={handleValue}
                      className="w-full h-10 p-5 border rounded-lg shadow-xl bg-slate-100"
                      placeholder="Daire"
                      required
                    />
                  </label>
                  <label>
                    <h1>E-mail</h1>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={value.email}
                      onChange={handleValue}
                      className="w-full h-10 p-5 border rounded-lg shadow-xl bg-slate-100"
                      placeholder="E-mail Adresini yazın "
                    />
                  </label>
                  <label>
                    <h1>Telefon</h1>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      value={value.phone}
                      onChange={handleValue}
                      className="w-full h-10 p-5 border rounded-lg shadow-xl bg-slate-100"
                      placeholder="Telefon numarası"
                      required
                    />
                  </label>
                  <div className="grid col-span-full place-items-center">
                    <button className="flex items-center justify-center h-10 px-5 font-sans text-white bg-green-500 border rounded-lg shadow-xl">
                      Adres Ekle
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
          <ToastContainer />
        </div>
      </div>
    </SiparisCartLayout>
  );
}
