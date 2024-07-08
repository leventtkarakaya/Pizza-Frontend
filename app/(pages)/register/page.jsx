"use client";
import { useState, useRef } from "react";
import React from "react";
import Image from "next/image";
import Logo from "@/public/pizza-banner.png";
import Logo1 from "@/public/logo.svg";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setImage } from "@/app/context/Slice/imageSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function page() {
  const [user, setUser] = useState({
    name: "",
    surName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    image: "",
  });
  const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const fileInputRef = useRef(null);

  const hendleValueChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = async (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    console.log("🚀 ~ handleImage ~ file:", file);
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/image/upload-image",
        formData
      );
      setUploading(false);
      if (uploading === false) {
        dispatch(setImage({ url: data.url, public_id: data.public_id }));
        setUser({ ...user, image: data.url });
      }
    } catch (error) {
      console.log("🚀 ~ handleImage ~ error:", error);
    }
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      setUploading(true);
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: user.name,
          surName: user.surName,
          email: user.email,
          password: user.password,
          passwordConfirm: user.passwordConfirm,
          image: user?.image,
        }
      );
      setUploading(false);
      const localStorageToken = {
        token: response.data.token,
        name: response.data.users.name,
        surName: response.data.users.surName,
        email: response.data.users.email,
      };
      if (response.status === 201 && uploading === false) {
        Cookies.set("user", localStorageToken.token);
        toast.success(response.message);
        router.push("/login");
      }
    } catch (error) {
      if (error) {
        switch (error.response.status) {
          case 400:
            window.alert(error.response.data.message);
            break;
          case 401:
            window.alert(error.response.data.message);
            break;
          case 404:
            window.alert(error.response.data.message);
            break;
          case 500:
            window.alert(error.response.data.message);
            break;
          default:
            break;
        }
      }
    }
  };

  return (
    <div>
      <div className="h-screen md:flex">
        <div className="relative items-center justify-around hidden w-1/2 overflow-hidden md:flex">
          <div>
            <Image src={Logo} alt="Logo" width={500} height={500} />
          </div>
        </div>
        <div className="flex items-center justify-center py-10 font-sans md:w-1/2 ">
          <form
            onSubmit={handleOnSubmit}
            className="flex flex-col items-center w-3/4 p-10 bg-gray-100 shadow-2xl rounded-xl"
          >
            <Image
              src={Logo1}
              alt="Logo"
              width={100}
              height={100}
              className="mb-3"
            />
            <div className="flex items-center px-3 py-2 mb-4 border-2 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                name="name"
                id="name"
                type="text"
                value={user.name}
                onChange={hendleValueChange}
                placeholder="Adınızı"
                className="pl-2 bg-gray-100 border-none outline-none"
                required
              />
            </div>
            <div className="flex items-center px-3 py-2 mb-4 border-2 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
              <input
                type="text"
                id="surName"
                name="surName"
                value={user.surName}
                onChange={hendleValueChange}
                placeholder="Soyadınızı"
                className="pl-2 bg-gray-100 border-none outline-none"
                required
              />
            </div>
            <div className="flex items-center px-3 py-2 mb-4 border-2 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                id="email"
                type="text"
                name="email"
                value={user.email}
                onChange={hendleValueChange}
                placeholder="E-mail Adresiniz"
                className="pl-2 bg-gray-100 border-none outline-none"
                required
              />
            </div>
            <div className="flex items-center px-3 py-2 border-2 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                id="password"
                type="text"
                name="password"
                value={user.password}
                onChange={hendleValueChange}
                placeholder="Sifreniz"
                className="pl-2 bg-gray-100 border-none outline-none"
                required
              />
            </div>
            <div className="flex items-center px-3 py-2 mt-4 border-2 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                name="passwordConfirm"
                id="passwordConfirm"
                type="text"
                value={user.passwordConfirm}
                onChange={hendleValueChange}
                placeholder="Sifreniz Tekrar"
                className="pl-2 bg-gray-100 border-none outline-none"
                required
              />
            </div>
            <div className="flex items-center w-2/4 mt-4 bg-gray-100">
              <input
                type="file"
                name="file"
                id="file"
                value={user.image}
                onChange={handleImage}
                ref={fileInputRef}
                accept=" .jpg, .jpeg, .png, .webp"
                className="w-full h-10 bg-gray-100 file-input"
              />
            </div>
            <button className="block w-1/2 font-sans bg-gradient-to-r from-[#e9d5d0] to-[#d1411d] mt-4 py-2 hover:text-[#a24747]  rounded-2xl text-white font-semibold mb-2">
              Üye Ol
            </button>
            <Link href="/login">
              <span className="text-sm ml-2 font-sans hover:text-[#d1411d] cursor-pointer">
                Zaten bir hesabın var mı?
              </span>
            </Link>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
