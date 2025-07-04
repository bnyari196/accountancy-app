import React from 'react'
import { CiAlarmOn } from "react-icons/ci";
import { TbPhoneCall } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="p-1.5 bg-rose-900 text-white flex items-center ">
        <CiAlarmOn />
        <span className="px-5"> Mon - Sun: 8:30am - 5pm</span>
        <TbPhoneCall/>
        <span className="px-5">074 8573 1689</span>
        <TfiEmail />
        <span className="px-5">tamas.nyari04@gmail.com</span>
        <FaWhatsapp />
        <span className="px-5"></span>
    </div>
  )
}

export default Banner
