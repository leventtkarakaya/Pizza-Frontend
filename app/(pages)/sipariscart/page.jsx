"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function page() {
  const stateCartCart = useSelector((state) => state.cart.cart);
  const router = useRouter();

  const user = useSelector((state) => state.user.usersave);
  console.log("🚀 ~ page ~ user:", user);
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

  const handleOnOrder = async (e) => {
    debugger;
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/pizza/order",
        {
          _id: user?._id,
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
        toast.success("Siparisiniz Alındı!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        router.push("/");
      }
    } catch (error) {
      console.log("🚀 ~ handleOnOrder ~ error:", error);
    }
  };
  console.log("🚀 ~ page ~ pizzaSlice:", stateCartCart);
  return (
    <>
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
                              <h1>Adet: 1</h1>
                            </div>
                            <div className="grid grid-cols-2">
                              <h1>İçecek</h1>
                              <h1>Adet: 1</h1>
                            </div>
                          </div>
                          <div>
                            <h1>Pizza İçerigi : Peyinir, Sogan, Domates,</h1>
                            <h1>Notlar: Kırmızı Zeytin</h1>
                          </div>
                          <div className="grid mt-3 col-span-full place-items-end">
                            <h1>Üçret: 20.00 TL</h1>
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
                <span className="flex justify-end w-full p-5 ">
                  Toplam Tutar : 100 TL
                </span>
              )}
            </div>
          </div>
          {/* Siparişlerim Adresi */}
          <div className="col-span-2 ">
            <div className="p-5 font-sans text-2xl font-medium text-center ">
              Teslimat Adresi
            </div>
            <form onSubmit={handleOnOrder}>
              <div className="grid grid-cols-2 p-2 mx-2 border rounded-lg shadow-xl gap-y-10 gap-x-5">
                <h1 className="grid font-sans font-bold col-span-full place-items-center ">
                  Adres Tanımlama
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
                    Şiparışı Tamamla
                  </button>
                </div>
              </div>
            </form>
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}
