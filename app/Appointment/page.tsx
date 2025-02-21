"use client";

import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

const AppointmentLetter = ({...props}) => {
  return (
    <div className="flex flex-col items-center p-6">
      {/* Header Section */}
      <div className="w-full max-w-2xl bg-white shadow-lg border rounded-md text-gray-900">
        <div className="relative p-6 bg-white border-b flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-4xl font-bold text-blue-900">WD</div>
            <div className="ml-2 text-blue-900 font-semibold text-lg">WEPPDEV TECHNOLOGIES</div>
          </div>
          <div className="text-sm text-gray-700 space-y-1">
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-blue-900" /> 09 Kalchuri Incubation Center, Bhopal, MP
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-blue-900" /> weppdev@gmail.com
            </div>
            <div className="flex items-center">
              <FaGlobe className="mr-2 text-blue-900" /> weppdev.tech
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-6">
          <h2 className="text-lg font-semibold text-center">APPOINTMENT LETTER</h2>
          <p className="mt-4">Weppdev Technologies</p>
          <p>09 Kalchuri Incubation Center</p>
          <p>Raisen Road, Bhopal</p>
          <p>Madhya Pradesh, 462022</p>
          <p className="mt-4">October 3, 2024</p>

          <p className="mt-4 font-semibold">{props.formData.name}</p>
          <p>Jyotish Path</p>
          <p>Ramkrishna Nagar</p>
          <p>Patna, Bihar, 800027</p>

          <p className="mt-6">Greetings <span className="font-semibold">{props.formData.name}</span>,</p>
          <p className="mt-2">We are pleased to confirm your appointment as a <span className="font-semibold">{props.formData.role}</span> at Weppdev Technologies, following your successful interview and your formal acceptance of the offer.</p>
          <p className="mt-2">Your joining date is <span className="font-semibold">{props.formData.date_of_joining}</span>, and we look forward to welcoming you to our team.</p>
          <p className="mt-2">Your working hours will be from <span className="font-semibold">{props.formData.time_from} to {props.formData.time_to}</span>, Monday to Friday.</p>
          <p className="mt-2">We expect all employees and interns to create a positive work environment, adhere to our company&apos;s work culture, and contribute to maintaining a collaborative, respectful, and productive workplace.</p>
          <p className="mt-4">Once again, congratulations on your appointment! We look forward to your contributions and your professional growth with us.</p>

          <p className="mt-6">Regards,</p>
          <p className="font-semibold">Diti Maurya</p>
          <p>Director</p>
          <p>Findun Innovations Private Limited</p>
          <p>Weppdev Technologies</p>
          <p className="mt-4 font-semibold">Karan Kumar</p>
          <p>Director</p>
          <p>Findun Innovations Private Limited</p>
          <p>Weppdev Technologies</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentLetter;
