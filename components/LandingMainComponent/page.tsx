"use client";

import Card from "@/components/Card/page"
import ButtonCard from "@/components/ButtonCard/ButtonCard";
import {  useTemplateStore } from "@/store/useTemplateStore";
import { useEffect } from "react";
// import { prisma } from "@/lib/prisma";

type selectedTemplatesProps = {
  id:string
  name:string
  imageUrl:string
}

interface LandingMainProps {
  selectedTemplates: selectedTemplatesProps[];
  setSelectedTemplates: React.Dispatch<React.SetStateAction<selectedTemplatesProps[]>>;
}

const LandingMainComponent:React.FC<LandingMainProps> = ({selectedTemplates,setSelectedTemplates}) =>{
    
    
    const fetchTemplates = useTemplateStore((state)=>state.fetchTemplates)
    const templates = useTemplateStore((state)=>state.templates)
  
  useEffect(() => {
    // const fetchData = async () => {
    //   const data = ;
     
    // };
    fetchTemplates()
    // fetchData();
  }, []);
  
  const toggleSelection = (template:selectedTemplatesProps) => {
    setSelectedTemplates((prev) =>
      prev.some((t) => t.id === template.id)
    ? prev.filter((t) => t.id !== template.id) // Remove object if it exists
    : [...prev, { id:template.id, name: template.name, imageUrl: template.imageUrl }] // Add new object (you may need actual data)
);
  };
  
    return (
        <div className="border-2  border-solid grid grid-cols-10 col-span-10 m-2" style={{height:"100%"}}>
            {templates.map((template) => (
                <div key={template.id} className="col-span-5" onClick={() => toggleSelection(template)}>
                <Card selectedTemplates={selectedTemplates} template={template}/>
                {template.name}
              </div>
      ))}
            <ButtonCard />
        </div>
    )
}
export default LandingMainComponent;