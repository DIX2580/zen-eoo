import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head"; // Import Head from 'next/head'
import "./globals.css";
import StarsCanvas from "@/components/sub/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZENEX",
  description: "This is our identity",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        {/* Include the script tag in the head */}
        <script src="//code.tidio.co/jwn8eul7p2ebwozvjz5oaz7w5fciwzgl.js" async></script>
      </Head>
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden relative`}>
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <StarsCanvas />
        </div>
        <div className="relative z-10">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
