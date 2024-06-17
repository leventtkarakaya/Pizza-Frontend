import React from "react";
import Image from "next/image";
import Logo from "@/public/pizza-banner.png";
import Logo1 from "@/public/logo.svg";
export default function page() {
  return (
    <div>
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2  justify-around items-center hidden">
          <div>
            <Image src={Logo} alt="Logo" width={500} height={500} />
          </div>
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center ">
          <form className="bg-white ">
            <Image
              src={Logo1}
              alt="Logo"
              width={100}
              height={100}
              className="ml-12 mb-3 "
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name=""
                id=""
                placeholder="E-Mail"
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
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name=""
                id=""
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="block w-full font-sans bg-gradient-to-r from-[#e9d5d0] to-[#d1411d] hover:text-[#a24747] mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Giriş Yap
            </button>
            <span className="text-sm ml-2 font-sans hover:text-[#d1411d] cursor-pointer">
              Üye olmak ister misiniz?
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
