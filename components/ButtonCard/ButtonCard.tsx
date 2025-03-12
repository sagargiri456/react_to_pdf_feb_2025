import { UploadButton } from "@/utils/uploadthing";
import { useTemplateStore } from "@/store/useTemplateStore";

const ButtonCard:React.FC = () =>{
  const addTemplate = useTemplateStore((state) => state.addTemplate);

  
    return (
        <div className="border-2 border-solid flex p-2 m-2 justify-center items-center" style={{height:"20rem",width:"30rem"}}>
            
            <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={async (res) => {
                  // Do something with the response
                  console.log("Files: ", res);
                    alert("Upload Completed");

                    if (res && res.length > 0) {
                      const uploadedFile = res[0]; // Get the first uploaded file
                      console.log(uploadedFile)

                      const newTemplate = {
                        id: uploadedFile.key, // Unique key from UploadThing
                        name: uploadedFile.name,
                        imageUrl: uploadedFile.ufsUrl, // Use the actual uploaded URL
                      };
                      

                      await addTemplate(newTemplate); // 
                      console.log("after addTemplate in ButtonCard.tsx")
                    }
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