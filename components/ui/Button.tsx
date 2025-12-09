export default function Button({text}:{text: string}){
    return  <button className="bg-light-blue-500 text-white/90 hover:text-white px-2 py-1.5 md:px-3 md:py-2 box-border  hover:bg-blue-400 cursor-pointer rounded
    active:scale-95 transition-transform duration-150 ease-out text-sm md:text-base">
        {text}</button>
}