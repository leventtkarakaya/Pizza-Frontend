import React from "react";
import Link from "next/link";
export default function Cancel() {
  return (
    <>
      <div className="pt-[18vh]">
        <div className="h-screen font-sans ">
          <div className="p-6 bg-white md:mx-auto">
            <div className="text-[#ff0000] text-4xl text-center font-bold">
              <h1>Ödeme İşlemi Iptal Edildi</h1>
            </div>
            <div className="text-center">
              <h3 className="text-base font-semibold text-center text-gray-900 md:text-2xl">
                Ödene işlemi gerçekleştirirken bir sorunla karşılaştık.
              </h3>
              <p className="my-2 text-gray-900">
                Ödeme islemi sırasında bir sorunla karsılastık.
              </p>
              <p> İyi Günler Dileriz </p>
              <div className="py-10 text-center">
                <Link
                  href={"/"}
                  className="px-12 py-3 font-semibold text-white bg-gradient-to-r from-[#e9d5d0] to-[#d1411d] rounded-full "
                >
                  Geri Dön
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
