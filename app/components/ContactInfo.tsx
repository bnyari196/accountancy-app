import React from 'react'

import { CiAlarmOn } from "react-icons/ci";
import { TbPhoneCall } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";

const ContactInfo = () => {
  return (
<div className="flex flex-col md:flex-row flex-wrap p-5 justify-center items-center gap-6 text-stone-100">
  {/* Card 1 */}
  <div className="card w-90 bg-gray-800 shadow-md card-lg">
    <div className="card-body">
      <h2 className="card-title justify-center"><TbPhoneCall /></h2>
      <p>Just a phone call away PagChomp</p>
      <p>Call us today: <span className="font-semibold">074 8573 1689</span></p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="card w-90 bg-gray-800 shadow-md card-lg">
    <div className="card-body">
      <h2 className="card-title justify-center"> <TfiEmail /></h2>
      <p>Email us by filling out the form below</p>
      <p>Or email us at:<span className="font-semibold"> tamas.omagh2002@gmail.com</span></p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="card w-90 bg-gray-800 shadow-md card-lg">
    <div className="card-body">
      <h2 className="card-title justify-center"><FaWhatsapp /></h2>
      <p>More Description</p>
    </div>
  </div>
</div>


  )
}

export default ContactInfo
