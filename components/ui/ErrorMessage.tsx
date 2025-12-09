
import { ShieldAlert } from "lucide-react";


export default function ErrorMessage(){
    return (
        <div className="flex items-center mt-2 gap-1">
            <ShieldAlert className="text-red-400"/>
            <p className="text-red-400"><span className="font-normal text-sm md:text-base">Error message!</span></p></div>
    )

}