import {  useNavigate } from "react-router";

type selectedTemplatesProps = {
    id:string
    name:string
    imageUrl:string
}

type AppbarProps = {
    selectedTemplates:selectedTemplatesProps[];
}

const Appbar:React.FC<AppbarProps> = ({selectedTemplates}) =>{
   
    const navigate = useNavigate();
    return(
        <div className="h-20 flex justify-between text-xl border-2 border-solid p-2 items-center">
            Accenra AI
            <div>
                <button onClick={()=>navigate("/formpage",{state:{selectedTemplates}})}>Next</button>
            </div>
        </div>
    )
}

export default Appbar;