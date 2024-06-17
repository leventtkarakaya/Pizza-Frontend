"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import Bag from "@/public/bag.svg";
import Modal from "react-modal";
import { BsXLg } from "react-icons/bs";

Modal.setAppElement("body");
export default function Header() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="flex w-full justify-between items-center bg-gradient-to-r from-[#e9d5d0] to-[#d1411d] opacity-100 font-sans p-6">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={100} height={100} />
        </Link>
        <div className="flex items-center text-white  cursor-pointer gap-12 ">
          <Link
            href="/allFood"
            className="text-[20px] font-medium hover:text-[#d1411d] max-sm:hidden "
          >
            <span>Pizzalar</span>
          </Link>
          <Link
            href="/"
            className="text-[20px] font-medium hover:text-[#d1411d] max-sm:hidden "
          >
            <span>Favoriler</span>
          </Link>
          <Link
            href="/"
            className="text-[20px] font-medium hover:text-[#d1411d] max-sm:hidden "
          >
            <span>Sevilenler</span>
          </Link>
          {/* Admin */}
          <Link
            href="/addFood"
            className="text-[20px] font-medium hover:text-[#d1411d] max-sm:hidden "
          >
            <span>Pizza Ekle</span>
          </Link>
          <Link href="/">
            <div className="relative ">
              <Image src={Bag} alt="Logo" width={35} height={35} />
              <span className="absolute top-6 -right-0  w-5 h-5 bg-black text-sm  rounded-full flex justify-center items-center text-white">
                0
              </span>
            </div>
          </Link>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-14 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52"
            >
              <li>
                <a
                  className="text-black text-lg font-medium font-sans"
                  onClick={openModal}
                >
                  Profil
                </a>
              </li>
              <li>
                <a className="text-black text-lg font-medium font-sans">
                  Ayarlar
                </a>
              </li>
              <li>
                <a className="text-black text-lg font-medium font-sans">
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
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/5 h-3/5 rounded-lg flex flex-col justify-center items-center gap-5 bg-white max-sm:w-[80%]  max-sm:h-[70%]"
        >
          <button onClick={closeModal} className="absolute top-4 right-4">
            <BsXLg size={20} />
          </button>
          <div className="text-2xl font-sans font-medium mt-5 mb-5">
            Admin Profil
          </div>
          <form>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="E-mail"
                className="input input-bordered input-md w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Şifre"
                className="input input-bordered input-md w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Şifre Tekrar"
                className="input input-bordered input-md w-full max-w-xs"
              />
              <button className="btn font-sans font-medium text-clip bg-gradient-to-r from-[#e9d5d0] to-[#d1411d] text-white">
                Kaydet
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
}
