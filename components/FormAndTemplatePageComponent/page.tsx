import { useState } from "react";
import AppointmentLetter from "../Appointment/page";
import AppointmentLetterForm from "../Form/page";
import { useLocation } from "react-router";

interface FormDataType {
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
    starting_day: string;
    ending_day: string;
  }

  type selectedTemplatesProps = {
    id:string
    name:string
    imageUrl:string
}

const FormAndTemplatePageComponent = () =>{
    const location = useLocation();
    const selectedTemplates: selectedTemplatesProps[] = location.state?.selectedTemplates || [];
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
        
      
  ) : <AppointmentLetterForm formData = {formData} handleChange={handleChange} setIsSubmitted={setIsSubmitted} setFormData = {setFormData}/>}
        </div>
    )
}


export default FormAndTemplatePageComponent;