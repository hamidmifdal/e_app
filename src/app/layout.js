import { Inter } from "next/font/google";
import {Navbar,Footer} from '@/index'
import "./globals.css";
import { CartProvider } from "@/utils/cartContext";
// import { store } from '../../store'
// import { Provider } from 'react-redux'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "hamid.shop online",
  description: "Discover a wide range of high-quality products at unbeatable prices. Shop online for fashion, electronics, home essentials, and more.Feel free to adjust it based on the specific offerings and style of your shop!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
           <Navbar />
            {children}
          <Footer />
         
      </body>

    </html>
  );
}
