"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/pizza-banner.png";
import Logo1 from "@/public/logo.svg";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function page() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const handleValue = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      setUploading(true);
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email: user.email, password: user.password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("🚀 ~ handleOnSubmit ~ response:", response);
      setUploading(false);
      if (response.success === true && uploading === false) {
        alert(response.message);
      }
    } catch (error) {
      console.log("🚀 ~ handleOnSubmit ~ error:", error);
    }
  };
  return (
    <div>
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2  justify-around items-center hidden">
          <div>
            <Image src={Logo} alt="Logo" width={500} height={500} />
          </div>
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center font-sans">
          <form
            onSubmit={handleOnSubmit}
            className="bg-gray-100 w-1/2 h-1/2 items-center rounded-xl shadow-2xl flex flex-col p-10"
          >
            <Image
              src={Logo1}
              alt="Logo"
              width={100}
              height={100}
              className="mb-3"
            />
            {/* E-mail Input */}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
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
                onChange={handleValue}
                placeholder="E-Mail"
                className="pl-2 outline-none border-none bg-gray-100"
              />
            </div>
            {/* Password Input */}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
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
                onChange={handleValue}
                placeholder="Password"
                className="pl-2 outline-none border-none bg-gray-100"
              />
            </div>
            <button
              type="submit"
              className="block w-1/2 font-sans bg-gradient-to-r from-[#e9d5d0] to-[#d1411d] hover:text-[#a24747] mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Giriş Yap
            </button>
            <Link href="/register">
              <span className="text-sm ml-2 font-sans hover:text-[#d1411d] cursor-pointer">
                Üye olmak ister misiniz?
              </span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
