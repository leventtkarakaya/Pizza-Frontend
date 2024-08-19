"use client";
import React, { useState, useRef } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setImage } from "@/app/context/Slice/imageSlice";
import { setPizza } from "@/app/context/Slice/pizzaSlice";
import "react-toastify/dist/ReactToastify.css";
import Protected from "@/app/Components/Protected";

export default function page() {
  const [valueController, setValueController] = useState({
    name: "",
    smallPrice: "",
    mediumPrice: "",
    largePrice: "",
    category: "",
    description: "",
    image: "",
  });
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setUploading.image(e.target.files[0]);
  };
  const dispatch = useDispatch();
  const [uploading, setUploading] = useState(false);
  const handleValueChange = (e) => {
    setValueController({
      ...valueController,
      [e.target.name]: e.target.value,
    });
    console.log(valueController);
  };
  const handleImage = async (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/image/upload-image",
        formData
      );
      setUploading(false);
      setValueController({
        ...valueController,
        image: data.url,
      });
      if (uploading === false) {
        dispatch(setImage({ url: data.url, public_id: data.public_id }));
      }
      console.log(data);
    } catch (error) {
      console.log("🚀 ~ handleImage ~ error:", error);
    }
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/pizza/addFood",
        {
          name: valueController.name,
          smallPrice: valueController.smallPrice,
          mediumPrice: valueController.mediumPrice,
          largePrice: valueController.largePrice,
          category: valueController.category,
          description: valueController.description,
          image: valueController.image,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("🚀 ~ file: page.jsx:handleOnSubmit ~ response:", response);
      if (response.status === 200) {
        dispatch(response.data);
        dispatch(setPizza(response.data.pizza));
      }
    } catch (error) {
      console.log("🚀 ~ file: page.jsx:handleOnSubmit ~ error:", error);
    }
  };
  return (
    <Protected>
      <div className="flex flex-col items-center p-8 font-sans border border-gray-200 rounded lg:mt-16 lg:px-20">
        <h1 className="text-3xl font-medium">Admin Panel</h1>
        <p className="mt-6 text-gray-600">
          Listelemek istediginiz pizzayı seçiniz ve bilgilerinizi doldurunuz...
        </p>
        <form onSubmit={handleOnSubmit} encType="multipart/form-data">
          <div className="grid gap-4 mt-8 lg:grid-cols-2">
            {/* name */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                İsim
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={valueController.name}
                onChange={handleValueChange}
                className="w-full max-w-xs input input-bordered"
                placeholder="Pizza adını giriniz"
              />
            </div>
            {/* small */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Küçük Boy
              </label>
              <input
                type="text"
                name="smallPrice"
                id="smallPrice"
                value={valueController.smallPrice}
                onChange={handleValueChange}
                className="w-full max-w-xs input input-bordered"
                placeholder="Kuçuk Boy Fiyatını giriniz"
              />
            </div>
            {/* medium */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Orta Boy
              </label>
              <input
                type="text"
                name="mediumPrice"
                id="mediumPrice"
                value={valueController.mediumPrice}
                onChange={handleValueChange}
                className="w-full max-w-xs input input-bordered"
                placeholder="Orta Boy Fiyatını giriniz"
              />
            </div>
            {/* large */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Büyük Boy
              </label>
              <input
                type="text"
                name="largePrice"
                id="largePrice"
                value={valueController.largePrice}
                onChange={handleValueChange}
                className="w-full max-w-xs input input-bordered"
                placeholder="Büyük Boy Fiyatını giriniz"
              />
            </div>
            {/* image */}
            <div className="mt-3">
              <label className="w-full max-w-xs form-control">
                <input
                  type="file"
                  name="image"
                  alt="image"
                  accept=" .jpg, .png, .jpeg, .gif, .webp"
                  onChange={handleImage || handleFileChange}
                  ref={fileInputRef}
                  className="w-full max-w-xs file-input file-input-bordered file-input-md "
                />
              </label>
            </div>
            {/* category */}
            <div className="mt-3">
              <select
                className="w-full max-w-xs select select-ghost input-bordered"
                name="category"
                value={valueController.category}
                onChange={handleValueChange}
              >
                <option value="Hepsi">Hepsi</option>
                <option value="Etli">Etli</option>
                <option value="Sebzeli">Sebzeli</option>
                <option value="Soslu">Soslu</option>
                <option value="Peynirli">Peynirli</option>
                <option value="Karışık">Karışık</option>
              </select>
            </div>
          </div>
          {/* description */}
          <textarea
            className="w-full mt-10 textarea textarea-bordered"
            name="description"
            id="description"
            value={valueController.description}
            onChange={handleValueChange}
            placeholder="Açıklama yazın..."
          ></textarea>
          <div className="mt-8 space-x-4">
            <button
              type="submit"
              className="px-8 py-2 text-white bg-gradient-to-tr from-[#e9d5d0] to-[#d1411d] rounded"
            >
              Kayıt
            </button>
            <button className="px-8 py-2 text-gray-600 bg-white border border-gray-200 rounded cursor-pointer hover:bg-gray-100 active:bg-gray-200 ">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Protected>
  );
}
