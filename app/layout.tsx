import type { Metadata } from "next";
import { Inter, Bangers } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const bangers = Bangers({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pizza LAND",
  description: "Şehrin En iyi Pizzaları",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${bangers.className}`}>
        {children}
      </body>
    </html>
  );
}
