export default function Input({placeholder = "place holder", error = false}:{placeholder?: string, error?: boolean}){
    return   <input 
    type="text" 
    placeholder={placeholder} 
    className={`rounded py-2 px-2 w-full bg-white/90
        ${error ? "border-red-400 border-2" : ""}`}  />
}