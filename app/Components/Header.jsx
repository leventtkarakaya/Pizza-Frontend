"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import Bag from "@/public/bag.svg";
import Modal from "react-modal";
import avatar from "@/public/user.png";
import { useDispatch, useSelector } from "react-redux";
import { setUserController } from "@/app/context/Slice/userSlice";
import { BsXLg } from "react-icons/bs";
import success from "@/public/success-1.gif";
import axios from "axios";
Modal.setAppElement("body");
export default function Header() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [value, setValue] = useState({
    name: "",
    email: "",
    surName: "",
    password: "",
    passwordConfirm: "",
  });
  const [count, setCount] = useState(5);
  const user = useSelector((state) => state.user.usersave);
  const pizzaCarts = useSelector((state) => state.cart.cart);
  console.log("🚀 ~ Header ~ pizzaCarts:", pizzaCarts);
  const dispatch = useDispatch();
  function openModal() {
    setIsOpen(true);
    console.log("🚀 ~ openModal ~ modalIsOpen:", true);
  }
  function closeModal() {
    setIsOpen(false);
    console.log("🚀 ~ closeModal ~ modalIsOpen:", false);
  }

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const userProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:5000/api/auth/userUpdate",
        {
          userId: user?._id,
          name: value.name,
          surName: value.surName,
          email: value.email,
          password: value.password,
          passwordConfirm: value.passwordConfirm,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      setUploading(true);
      console.log("🚀 ~ userProfileUpdate ~ response:", response);
      if (response.status === 200) {
        dispatch(setUserController(response.data.user));
      }
    } catch (error) {
      console.log("🚀 ~ userProfileUpdate ~ error:", error);
    }
  };
  useEffect(() => {
    if (uploading) {
      setTimeout(() => {
        if (count > 0) {
          setCount(count - 1);
        } else {
          setIsOpen(false);
          setUploading(false);
          setValue({
            name: "",
            email: "",
            surName: "",
            password: "",
            passwordConfirm: "",
          });
        }
      }, 1000);
    }
  }, [uploading, count]);

  return (
    <>
      <div className="flex w-full justify-between items-center bg-gradient-to-r from-[#e9d5d0] to-[#d1411d] opacity-100 font-sans p-6">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={100} height={100} />
        </Link>
        <div className="flex items-center gap-12 text-white cursor-pointers">
          <Link
            href="/allFood"
            className="text-[20px] font-medium hover:text-[#d1411d] max-sm:hidden"
          >
            <p>Pizzalar</p>
          </Link>
          <Link
            href="/favoritePizza"
            className="text-[20px] font-medium hover:text-[#d1411d] max-sm:hidden"
          >
            <p>Favoriler</p>
          </Link>
          <Link
            href="/"
            className="text-[20px] font-medium hover:text-[#d1411d] max-sm:hidden"
          >
            <p>Sevilenler</p>
          </Link>
          {/* Admin */}
          {user?.role === "admin" && (
            <Link
              href="/addFood"
              className="text-[20px] font-medium hover:text-[#d1411d] max-sm:hidden"
            >
              <p>Pizza Ekle</p>
            </Link>
          )}
          <Link href={"/sipariscart"}>
            <div className="relative " tabIndex={0}>
              <Image src={Bag} alt="Logo" width={35} height={35} />
              <span className="absolute flex items-center justify-center w-5 h-5 text-sm text-white bg-black rounded-full top-6 -right-0">
                {pizzaCarts?.length || 0}
              </span>
            </div>
          </Link>
          {/* User */}
          <div className="cursor-pointer dropdown dropdown-end">
            <div
              role="button"
              tabIndex={0}
              className="mt-2 btn btn-ghost btn-circle avatar"
            >
              <div className="rounded-full w-14">
                <Image
                  src={avatar}
                  alt="Profile"
                  className="rounded-full"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52"
            >
              {user?._id !== undefined ? (
                <li>
                  {user && user?._id !== undefined ? (
                    <a
                      className="font-sans text-lg font-medium text-black"
                      onClick={openModal}
                    >
                      Profil
                    </a>
                  ) : (
                    <a className="hidden"></a>
                  )}
                </li>
              ) : (
                <li className="hidden"></li>
              )}
              {user && user?._id === undefined ? (
                <li>
                  <a
                    className="font-sans text-lg font-medium text-black"
                    href="/register"
                  >
                    Üye Ol
                  </a>
                </li>
              ) : (
                <li>
                  <a
                    className="font-sans text-lg font-medium text-black"
                    href="/login"
                  >
                    Giriş Yap
                  </a>
                </li>
              )}
              <li>
                <a
                  className="font-sans text-lg font-medium text-black"
                  onClick={() =>
                    localStorage.clear("persist:root") &&
                    window.location.reload()
                  }
                >
                  Çıkış
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          ariaHideApp={false}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/5 max-lg:h-3/6 h-4/5 rounded-lg bg-white max-sm:w-[80%] p-5 max-sm:h-[70%]"
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 hover:text-[#d1411d]"
          >
            <BsXLg size={20} />
          </button>
          <div className="mt-5 mb-5 font-sans text-2xl font-medium text-center ">
            Profil Ayarları
          </div>
          {uploading ? (
            <div className="flex flex-col items-center justify-center gap-y-5">
              <div className="w-1/2">
                <Image src={success} alt="success" width={300} height={300} />
              </div>
              <div className="w-1/2">
                <h2>Yükleme Tamamlamasına {count} Saniye Kaldı</h2>
              </div>
            </div>
          ) : (
            <form onSubmit={userProfileUpdate}>
              <div className="flex flex-col w-full gap-5 p-5 ">
                <input
                  type="text"
                  placeholder="E-mail"
                  name="email"
                  value={value?.email}
                  onChange={handleChange}
                  className="w-full p-3 input input-bordered input-md"
                />
                <input
                  type="text"
                  placeholder="İsim"
                  name="name"
                  value={value?.name}
                  onChange={handleChange}
                  className="w-full p-5 input input-bordered input-md"
                />
                <input
                  type="text"
                  placeholder="Soyisim"
                  name="surName"
                  value={value?.surName}
                  onChange={handleChange}
                  className="w-full p-5 input input-bordered input-md"
                />
                <input
                  type="text"
                  placeholder="Şifre"
                  name="password"
                  value={value?.password}
                  onChange={handleChange}
                  className="w-full p-5 input input-bordered input-md"
                />
                <input
                  type="text"
                  placeholder="Şifre Tekrar"
                  name="passwordConfirm"
                  value={value?.passwordConfirm}
                  onChange={handleChange}
                  className="w-full p-5 input input-bordered input-md"
                />
                <div className="flex justify-center">
                  <button className="btn font-sans font-medium text-clip bg-gradient-to-r from-[#e9d5d0] to-[#d1411d] text-white w-1/3 ">
                    Güncelle
                  </button>
                </div>
              </div>
            </form>
          )}
        </Modal>
      </div>
    </>
  );
}
