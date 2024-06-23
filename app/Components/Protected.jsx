"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setUserController } from "@/app/context/Slice/userSlice";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const user = useSelector((state) => state.user.user);
  const pizza = useSelector((state) => state.pizza.pizza);
  console.log("🚀 ~ ProtectedRoute ~ pizza:", pizza);
  const dispatch = useDispatch();

  console.log("🚀 ~ getUser ~ user:", user);
  const getUser = async () => {
    debugger;
    try {
      const response = await axios.get(
        "http://localhost:5000/api/auth/get-user",
        {
          token: localStorage.getItem("token"),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("🚀 ~ getUser ~ response:", response);
      if (response.status === 200) {
        dispatch(
          setUserController(response.data.data.user && response.data.user)
        );
      } else {
        router.push("/");
        localStorage.removeItem("token");
      }
    } catch (error) {
      console.log("🚀 ~ getUser ~ error:", error);
    }
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user]);

  if (localStorage.getItem("token")) {
    return children;
  } else {
    return null;
  }
}
