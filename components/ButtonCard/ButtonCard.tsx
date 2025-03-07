import { CiCirclePlus } from "react-icons/ci";
import { UploadButton } from "@/utils/uploadthing";
const ButtonCard:React.FC = () =>{
    // const handleUploadButton = ()=>{

    // }
    return (
        <div className="border-2 border-solid flex p-2 m-2 justify-center items-center" style={{height:"20rem",width:"30rem"}}>
            
            <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  // Do something with the response
                  console.log("Files: ", res);
                  alert("Upload Completed");
                }}
                onUploadError={(error: Error) => {
                  // Do something with the error.
                  alert(`ERROR! ${error.message}`);
                }}
              />
        </div>
  )
}

export default ButtonCard