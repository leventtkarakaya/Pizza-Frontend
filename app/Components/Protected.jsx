"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setUserController } from "@/app/context/Slice/userSlice";

export default function ProtectedRoute({ children }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.usersave);
  const router = useRouter();
  const getUser = async () => {
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
