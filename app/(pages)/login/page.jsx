"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/public/pizza-banner.png";
import Logo1 from "@/public/logo.svg";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUserController } from "@/app/context/Slice/userSlice";
export default function page() {
  const [users, setUser] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch();

  const handleValue = (e) => {
    setUser({
      ...users,
      [e.target.name]: e.target.value,
    });
    console.log(users);
  };

  const handleOnSubmit = async (e) => {
    debugger;
    e.preventDefault();
    try {
      setUploading(true);
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email: users.email, password: users.password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setUploading(false);
      console.log("🚀 ~ handleOnSubmit ~ response:", response);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        dispatch(setUserController(response.data.user));
        router.push("/");
      }
    } catch (error) {
      console.log("🚀 ~ handleOnSubmit ~ error:", error);
    }
  };

  return (
    <>
      <div className="h-screen md:flex">
        <div className="relative items-center justify-around hidden w-1/2 overflow-hidden md:flex">
          <div>
            <Image src={Logo} alt="Logo" width={500} height={500} />
          </div>
        </div>
        <div className="flex items-center justify-center py-10 font-sans md:w-1/2">
          <form
            onSubmit={handleOnSubmit}
            className="flex flex-col items-center w-1/2 p-10 bg-gray-100 shadow-2xl h-1/2 rounded-xl"
          >
            <Image
              src={Logo1}
              alt="Logo"
              width={100}
              height={100}
              className="mb-3"
            />
            {/* E-mail Input */}
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
                value={users.email}
                onChange={handleValue}
                placeholder="E-Mail"
                className="pl-2 bg-gray-100 border-none outline-none"
              />
            </div>
            {/* Password Input */}
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
                value={users.password}
                onChange={handleValue}
                placeholder="Password"
                className="pl-2 bg-gray-100 border-none outline-none"
              />
            </div>
            <button
              type="submit"
              className="block w-1/2 font-sans bg-gradient-to-r from-[#e9d5d0] to-[#d1411d] hover:text-[#a24747] mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Giriş Yap
            </button>
            <Link href="/register">
              <p className="text-sm ml-2 font-sans hover:text-[#d1411d] cursor-pointer">
                Üye olmak ister misiniz?
              </p>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
