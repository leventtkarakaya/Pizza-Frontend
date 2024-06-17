import { Inter, Bangers } from "next/font/google";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./globals.css";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const bangers = Bangers({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
  title: "Pizza Land",
  description: "Şehrin En iyi Pizzaları",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${bangers.className} `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
