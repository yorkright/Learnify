import { assets } from "@/Assets/assets";
// import Sidebar from "@/components/AdminCompopnents/Sidebar";
import Image from "next/image";
import { ToastContainer } from 'react-toastify';


export default function layout ({children}){
  return (
    <>
    <div className="flex">
      <ToastContainer theme="dark"/>
        {/* <Sidebar/> */}
        <div className="flex flex-col w-full">
 
 {children}
        </div>
    </div>
   
    </>
  )
}