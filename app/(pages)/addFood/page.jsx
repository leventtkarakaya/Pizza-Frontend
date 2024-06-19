import React from "react";

export default function page() {
  return (
    <>
      <div className="p-8 rounded border border-gray-200 lg:mt-16 lg:px-20 font-sans flex items-center flex-col">
        <h1 className="font-medium text-3xl">Admin Panel</h1>
        <p className="text-gray-600 mt-6">
          Listelemek istediginiz pizzayı seçiniz ve bilgilerinizi doldurunuz...
        </p>
        <form>
          <div className="mt-8 grid lg:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                İsim
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="input input-bordered w-full max-w-xs"
                placeholder="Pizza adını giriniz"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                Küçük Boy
              </label>
              <input
                type="text"
                name="priceSmall"
                className="input input-bordered w-full max-w-xs"
                placeholder="Kuçuk Boy Fiyatını giriniz"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                Orta Boy
              </label>
              <input
                type="text"
                name="priceMedium"
                className="input input-bordered w-full max-w-xs"
                placeholder="Orta Boy Fiyatını giriniz"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                Büyük Boy
              </label>
              <input
                type="text"
                name="priceBig"
                className="input input-bordered w-full max-w-xs"
                placeholder="Büyük Boy Fiyatını giriniz"
              />
            </div>
            <div className="mt-3">
              <label className="form-control w-full max-w-xs">
                <input
                  type="file"
                  className="file-input file-input-bordered file-input-md w-full max-w-xs "
                />
              </label>
            </div>
            <div className="mt-3">
              <select className="select select-ghost w-full max-w-xs input-bordered">
                <option disabled selected>
                  İçindekiler
                </option>
                <option>Hepsi</option>
                <option>Etli</option>
                <option>Sebzeli</option>
                <option>Soslu</option>
                <option>Peynirli</option>
                <option>Karışık</option>
              </select>
            </div>
          </div>
          <textarea
            className="textarea textarea-bordered w-full mt-10"
            placeholder="Açıklama yazın..."
          ></textarea>
          <div className="space-x-4 mt-8">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
            >
              Save
            </button>
            <button className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
