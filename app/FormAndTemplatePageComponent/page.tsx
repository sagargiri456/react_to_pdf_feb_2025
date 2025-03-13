'use client'
import { Suspense, useState } from "react";
import AppointmentLetter from "@/components/Appointment/page";
import AppointmentLetterForm from "@/components/Form/page";
import { useSearchParams } from "next/navigation"; // ✅ Correct way to access query params

// Define types for selected templates
type SelectedTemplatesProps = {
    id: string;
    name: string;
    imageUrl: string;
};

// Define types for form data
type FormDataProps = {
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
};

// Define props for AppointmentLetterForm component
// type AppointmentLetterFormProps = {
//     formData: FormDataProps;
//     handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//     setIsSubmitted: (isSubmitted: boolean) => void;
// };

const SelectedTemplatesHandler = ({ formData, isSubmitted, handleChange, setIsSubmitted }: 
    { formData: FormDataProps, isSubmitted: boolean, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void, setIsSubmitted: (isSubmitted: boolean) => void }) => {
    
    const searchParams = useSearchParams();
    const selectedTemplates: SelectedTemplatesProps[] = JSON.parse(searchParams.get("selectedTemplates") || "[]");

    return (
        <div>
            {isSubmitted ? (
                selectedTemplates.map((template) => (
                    <div key={template.id}>
                        <AppointmentLetter template={template} formData={formData} />
                    </div>
                ))
            ) : (
                <AppointmentLetterForm 
                    formData={formData} 
                    handleChange={handleChange} 
                    setIsSubmitted={setIsSubmitted} 
                />
            )}
        </div>
    );
};

const FormAndTemplatePageComponent = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState<FormDataProps>({
        name: '',
        street: '',
        area: '',
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SelectedTemplatesHandler 
                formData={formData} 
                isSubmitted={isSubmitted} 
                handleChange={handleChange} 
                setIsSubmitted={setIsSubmitted} 
            />
        </Suspense>
    );
};

export default FormAndTemplatePageComponent;
