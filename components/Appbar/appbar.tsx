'use client'

import { useRouter } from "next/navigation";

type selectedTemplatesProps = {
    id: string;
    name: string;
    imageUrl: string;
}

type AppbarProps = {
    selectedTemplates: selectedTemplatesProps[];
}

const Appbar: React.FC<AppbarProps> = ({ selectedTemplates }) => {
    const router = useRouter();

    const handleNextClick = () => {
        router.push(`/FormAndTemplatePageComponent?selectedTemplates=${encodeURIComponent(JSON.stringify(selectedTemplates))}`);
    };

    return (
        <div className="h-20 flex justify-between text-xl border-2 border-solid p-2 items-center">
            Accenra AI
            <div>
                <button onClick={handleNextClick}>Next</button>
            </div>
        </div>
    );
}

export default Appbar;
