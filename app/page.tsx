'use client'
import AppointmentLetterForm from "@/app/Form/page"
import { useState } from "react";
import AppointmentLetter from "./Appointment/page";

export default function Home() {
  const [isSubmitted,setIsSubmitted] = useState(false);
  const [formData,setFormData] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    role: '',
    date_of_joining: '',
    time_from: '',
    time_to: '',
    starting_day: '',
    ending_day: '',

});
const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
    console.log("changes Saved.")
}



  return (
    <div>
      {/* <AppointmentLetterForm formData = {formData} handleChange={handleChange} setFormData = {setFormData}/>
      {isSubmitted && <AppointmentLetter formData={formData} />} */}

      {isSubmitted ? <AppointmentLetter formData={formData} /> : <AppointmentLetterForm formData = {formData} handleChange={handleChange} setIsSubmitted={setIsSubmitted} setFormData = {setFormData}/>}
      
    </div>
  );
}
