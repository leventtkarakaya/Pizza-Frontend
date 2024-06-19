import React from "react";
import Image from "next/image";
import quattrostagioni from "@/public/quattro-stagioni.webp";
import quattroformaggi from "@/public/quattro-formaggi.webp";
export default function ContentArea() {
  return (
    <div className="container mx-auto mt-6  ">
      <div className="grid grid-cols-4 w-full gap-x-16 gap-y-5 px-3 max-sm:grid-cols-1 max-lg:grid-cols-2  max-sm:px-8">
        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 -mt-6 h-60 overflow-hidden  rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40  ">
            <Image
              src={quattrostagioni}
              alt="quattro stagioni"
              width={200}
              height={200}
              className="object-cover ml-11 mt-6 "
            />
          </div>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Tailwind card
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              felis ligula.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              type="button"
              className="select-none w-full rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Daha Fazla
            </button>
          </div>
        </div>
        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 -mt-6 h-60 overflow-hidden  rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40  ">
            <Image
              src={quattroformaggi}
              alt="quattro stagioni"
              width={200}
              height={200}
              className="object-cover ml-10 mt-6 "
            />
          </div>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Tailwind card
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              felis ligula.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              type="button"
              className="select-none w-full rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Daha Fazla
            </button>
          </div>
        </div>
        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 -mt-6 h-60 overflow-hidden  rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40  ">
            <Image
              src={quattrostagioni}
              alt="quattro stagioni"
              width={200}
              height={200}
              className="object-cover ml-10 mt-8 "
            />
          </div>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Tailwind card
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              felis ligula.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              type="button"
              className="select-none w-full rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Daha Fazla
            </button>
          </div>
        </div>
        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 -mt-6 h-60 overflow-hidden  rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40  ">
            <Image
              src={quattrostagioni}
              alt="quattro stagioni"
              width={200}
              height={200}
              className="object-cover ml-8 mt-8 "
            />
          </div>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Tailwind card
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              felis ligula.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              type="button"
              className="select-none w-full rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Daha Fazla
            </button>
          </div>
        </div>
        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 -mt-6 h-60 overflow-hidden  rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40  ">
            <Image
              src={quattrostagioni}
              alt="quattro stagioni"
              width={200}
              height={200}
              className="object-cover ml-8 mt-8 "
            />
          </div>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Tailwind card
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              felis ligula.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              type="button"
              className="select-none w-full rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Daha Fazla
            </button>
          </div>
        </div>
        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 -mt-6 h-60 overflow-hidden  rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40  ">
            <Image
              src={quattrostagioni}
              alt="quattro stagioni"
              width={200}
              height={200}
              className="object-cover ml-8 mt-8 "
            />
          </div>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Tailwind card
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              felis ligula.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              type="button"
              className="select-none w-full rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Daha Fazla
            </button>
          </div>
        </div>
        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 -mt-6 h-60 overflow-hidden  rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40  ">
            <Image
              src={quattrostagioni}
              alt="quattro stagioni"
              width={200}
              height={200}
              className="object-cover ml-8 mt-8 "
            />
          </div>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Tailwind card
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              felis ligula.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              type="button"
              className="select-none w-full rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Daha Fazla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
