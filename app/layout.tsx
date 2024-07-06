import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProductProvider } from './components/ApiContext';
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BluTech Test",
  description: "Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#F6F6F6] bg-red500 text-black">
        <ProductProvider> 
          <NavBar/>
          {children}
          </ProductProvider>
       
        
        </body>
    </html>
  );
}
