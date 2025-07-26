import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footetr from "@/components/Footetr";
import SessionWrapper from "./component/SessionWrapper";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata = {
  title: "Learnify ✔",
  description: "Guiding paths to new knowledge",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className=" min-h-[77vh]  " >
        <Navbar/>
        {children}
     </div>
        <Footetr/>
      </body>
      </SessionWrapper>
    </html>
  );
}


