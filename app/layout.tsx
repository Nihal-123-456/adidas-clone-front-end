import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adidas",
  description: "Adidas Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" 
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
        <header>
          <NavBar />
        </header>  
        <main>
          {children}
        </main>  
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
