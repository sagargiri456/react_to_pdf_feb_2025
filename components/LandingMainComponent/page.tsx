"use client";

import Card from "@/components/Card/page"
import ButtonCard from "@/components/ButtonCard/ButtonCard";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

interface LandingMainProps {
  selectedTemplates: string[];
  setSelectedTemplates: React.Dispatch<React.SetStateAction<string[]>>;
}

const LandingMainComponent:React.FC<LandingMainProps> = ({selectedTemplates,setSelectedTemplates}) =>{
    
    const [templates,setTemplates] = useState<{id:string;name:string}[]>([]);

      // Fetch templates from the backend
  useEffect(() => {
    async function fetchTemplates() {
      const res = await fetch("/uploadData.json");
      const data = await res.json();
      setTemplates(data);
    }
    fetchTemplates();
  }, []);

  const toggleSelection = (id: string) => {
    setSelectedTemplates((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };
  
    return (
        <div className="border-2  border-solid grid grid-cols-10 col-span-10 m-2" style={{height:"100%"}}>
            {templates.map((template) => (
                <div key={template.id} className="col-span-5" onClick={() => toggleSelection(template.id)}>
                <Card selectedTemplates={selectedTemplates} template={template}/>
                {template.name}
              </div>
      ))}
            <ButtonCard />
        </div>
    )
}
export default LandingMainComponent;