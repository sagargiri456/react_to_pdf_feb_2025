import Image from "next/image";
interface CardProps{

    selectedTemplates: string[];
    template:{id:string;name:string};
}

const Card:React.FC<CardProps> = ({selectedTemplates,template}) =>{
    return (
        <div className="border-2 col-span-5 rounded-xl border-solid flex p-2 m-2 justify-center items-center" style={{height:"20rem",width:"30rem"}}>
            <input type="checkbox" checked={selectedTemplates.includes(template.id)} readOnly />
            <Image src="/image1.avif" className="relative inset-0 w-full h-full object-cover z-0" alt="image Not COming" width={200} height={100} />
        </div>
    )
}

export default Card;