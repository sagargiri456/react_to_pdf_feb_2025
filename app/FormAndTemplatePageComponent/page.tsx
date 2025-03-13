'use client'
import { useState } from "react";
import AppointmentLetter from "@/components/Appointment/page";
import AppointmentLetterForm from "@/components/Form/page";
import { useSearchParams } from "next/navigation"; // ✅ Correct way to access query params


  type selectedTemplatesProps = {
    id:string
    name:string
    imageUrl:string
}

const FormAndTemplatePageComponent = () =>{
    const searchParams = useSearchParams();
    const selectedTemplates: selectedTemplatesProps[] = JSON.parse(searchParams.get("selectedTemplates") || "[]");

     const [isSubmitted,setIsSubmitted] = useState(false);
     const [formData,setFormData] = useState({
        name: '',
        street: '',
        area:'',
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
    }
    return(
        <div>
            {/* {isSubmitted ?<AppointmentLetter formData={formData} /> : <AppointmentLetterForm formData = {formData} handleChange={handleChange} setIsSubmitted={setIsSubmitted} setFormData = {setFormData}/>} */}
            {isSubmitted ?(selectedTemplates.map((template)=>
            <div key={template.id}>
                  <AppointmentLetter  template={template} formData={formData}/>
           </div>)
        
      
  ) : <AppointmentLetterForm formData = {formData} handleChange={handleChange} setIsSubmitted={() => setIsSubmitted(true)} />}
        </div>
    )
}



export default FormAndTemplatePageComponent;