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
        <div className=" min-h-[77vh] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] text-white " >
        <Navbar/>
        {children}
     </div>
        <Footetr/>
      </body>
      </SessionWrapper>
    </html>
  );
}


