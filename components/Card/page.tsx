interface CardProps{

    selectedTemplates: string[];
    template:{id:string;name:string};
}

const Card:React.FC<CardProps> = ({selectedTemplates,template}) =>{
    return (
        <div className="border-2 col-span-5 rounded-xl border-solid flex p-2 m-2 justify-center items-center" style={{height:"20rem",width:"30rem"}}>
            <input type="checkbox" checked={selectedTemplates.includes(template.id)} readOnly />
            <img src="/image1.avif" className="relative inset-0 w-full h-full object-cover z-0" alt="image Not COming" />
        </div>
    )
}

export default Card;