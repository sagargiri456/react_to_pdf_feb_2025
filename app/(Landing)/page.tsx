"use client"
import { useState } from "react";
import Appbar from "../../components/Appbar/appbar";
import LandingMainComponent from "../../components/LandingMainComponent/page";

type selectedTemplatesProps = {
    id:string
    name:string
    imageUrl:string
}

const LandingPage: React.FC = () => {
    const [selectedTemplates, setSelectedTemplates] = useState<Array<selectedTemplatesProps>>([]);
     return (
        <div>
            <Appbar selectedTemplates={selectedTemplates}/>
            <LandingMainComponent selectedTemplates={selectedTemplates} setSelectedTemplates={setSelectedTemplates} />
        </div>
     )
}

export default LandingPage;