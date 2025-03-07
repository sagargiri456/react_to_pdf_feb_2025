"use client";

import React from "react";
import { usePDF } from "react-to-pdf";


interface AppointmentProps {
  formData: {
    name: string;
    street: string;
    area: string;
    city: string;
    state: string;
    zip: string;
    role: string;
    date_of_joining: string;
    time_from: string;
    time_to: string;
  };
}

const AppointmentLetter: React.FC<AppointmentProps> = ({ formData }) => {
  const {toPDF,targetRef} = usePDF({filename:'appointment.pdf'})
  // Function to capture and download the image
  

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      {/* Download Button */}
      <button
       onClick={() => toPDF()}
       className="mb-5 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md"
      >
        Download as Pdf
      </button>

      {/* Capture Area */}
      <div
        ref={targetRef}
        className="relative w-[800px] h-[1100px]  bg-white shadow-md overflow-hidden"
      >
        {/* ✅ Background Template Image */}
        <img
          src="/image.png" // Replace with your actual image path
          alt="Template"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* ✅ Text Overlay */}
        <div className="absolute inset-0 flex flex-col  justify-center text-black z-10 
    mt-80
 px-16">
          <h2 className="text-2xl font-bold text-center mt-8">APPOINTMENT LETTER</h2>

          {/* Company Details */}
          <p className="mt-6 font-semibold text-center">Weppdev Technologies</p>
          <p className="text-center">09 Kalchuri Incubation Center</p>
          <p className="text-center">Raisen Road, Bhopal, Madhya Pradesh, 462022</p>
          <p className="text-center font-semibold mt-4">October 3, 2024</p>

          {/* Candidate Details */}
          <div className="mt-6">
            <p className="font-semibold">{formData.name}</p>
            <p>{formData.street}, {formData.area}</p>
            <p>{formData.city}, {formData.state}, {formData.zip}</p>
          </div>

          {/* Appointment Letter Content */}
          <p className="mt-6">Greetings <span className="font-semibold">{formData.name}</span>,</p>
          <p className="mt-2">
            We are pleased to confirm your appointment as a 
            <span className="font-semibold"> {formData.role}</span> at Weppdev Technologies, following your 
            successful interview and your formal acceptance of the offer.
          </p>
          <p className="mt-2">
            Your joining date is <span className="font-semibold">{formData.date_of_joining}</span>, and we look 
            forward to welcoming you to our team.
          </p>
          <p className="mt-2">
            Your working hours will be from <span className="font-semibold">{formData.time_from} to {formData.time_to}</span>, 
            Monday to Friday.
          </p>
          <p className="mt-2">
            We expect all employees and interns to create a positive work environment, adhere to our company`$apos;`s 
            work culture, and contribute to maintaining a collaborative, respectful, and productive workplace.
          </p>
          <p className="mt-4">
            Once again, congratulations on your appointment! We look forward to your contributions and your professional 
            growth with us.
          </p>

          {/* Signature Section */}
          <div className="mt-6">
            <p className="font-semibold">Regards,</p>
            <p className="mt-4 font-semibold">Diti Maurya</p>
            <p>Director</p>
            <p>Findun Innovations Private Limited</p>
            <p>Weppdev Technologies</p>

            <p className="mt-6 font-semibold">Karan Kumar</p>
            <p>Director</p>
            <p>Findun Innovations Private Limited</p>
            <p>Weppdev Technologies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentLetter;
