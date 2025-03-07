import { useState } from "react";
import AppointmentLetter from "../Appointment/page";
import AppointmentLetterForm from "../Form/page";
import { useLocation } from "react-router";

//mapping the key of the template to the component. 
const TEMPLATE_COMPONENTS: Record<string, React.FC<{ formData: any }>> = {
    "appointment": AppointmentLetter,
  };

const FormAndTemplatePageComponent = () =>{
    const location = useLocation();
    const selectedTemplates: string[] = location.state?.selectedTemplates || [];
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
            {isSubmitted ?(
        <div>
          {selectedTemplates.map((template) => {
            const TemplateComponent = TEMPLATE_COMPONENTS[template];
            return TemplateComponent ? (
              <TemplateComponent key={template} formData={formData} />
            ) : (
              <p key={template}>Template {template} not found.</p>
            );
          })}
        </div>
      
  ) : <AppointmentLetterForm formData = {formData} handleChange={handleChange} setIsSubmitted={setIsSubmitted} setFormData = {setFormData}/>}
        </div>
    )
}


export default FormAndTemplatePageComponent;