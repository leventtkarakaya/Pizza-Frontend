"use client";
import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "@/app/Components/Protected";

export default function layout({ children }) {
  const [stripePromise, setStripePromise] = useState(null);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      setStripePromise(
        loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
      );
    }
  }, []);

  useEffect(() => {
    if (stripePromise) {
      stripePromise.then((stripe) => {
        console.log("Stripe SDK yüklü:", stripe);
      });
    }
  }, [stripePromise]);

  return (
    <ProtectedRoute>
      <Elements stripe={stripePromise}>{children}</Elements>
    </ProtectedRoute>
  );
}
