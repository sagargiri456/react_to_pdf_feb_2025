"use client";

import LandingPage from "@/components/Landing/page";
import {BrowserRouter,Routes,Route} from 'react-router';
import FormAndTemplatePageComponent from '@/components/FormAndTemplatePageComponent/page'

export default function Home() {


  return (
    <div>
      {/* <AppointmentLetterForm formData = {formData} handleChange={handleChange} setFormData = {setFormData}/>
      {isSubmitted && <AppointmentLetter formData={formData} />} */}

      {/* {isSubmitted ? <AppointmentLetter formData={formData} /> : <AppointmentLetterForm formData = {formData} handleChange={handleChange} setIsSubmitted={setIsSubmitted} setFormData = {setFormData}/>} */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/formpage" element={<FormAndTemplatePageComponent/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
