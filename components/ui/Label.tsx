export default function Label({text, error = false}:{text: string, error?: boolean}){
    return <p className="mb-2"><span className="font-medium text-gray-800">{text}
    {error && <span className="ml-1 text-red-400">*</span>}
   </span></p>
}