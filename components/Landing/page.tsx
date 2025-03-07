"use client"
import { useState } from "react";
import Appbar from "../Appbar/appbar";
import LandingMainComponent from "../LandingMainComponent/page";



const LandingPage: React.FC = () => {
    const [selectedTemplates, setSelectedTemplates] = useState<Array<string>>([]);
     return (
        <div>
            <Appbar selectedTemplates={selectedTemplates}/>
            <LandingMainComponent selectedTemplates={selectedTemplates} setSelectedTemplates={setSelectedTemplates} />
        </div>
     )
}

export default LandingPage;