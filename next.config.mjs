/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
      "pk_test_51PI70905djJLEZUPjOEC30MouPA4CkP71M2URwEDKQPKWu0SCCUMchbmcpZejuLh0uskaFZvTVY9ScaEgeLGCUJo00usQbbdc2",
  },
};

export default nextConfig;
