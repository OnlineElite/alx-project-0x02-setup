import { type ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> =({size, shape, text})=>{

    let sizeClass = ""

    if (size === "small") sizeClass = "py-1 px-2 text-sm"
    else if (size === "medium") sizeClass = "py-2 px-4 text-md"
    if (size === "large") sizeClass = "py-3 px-6 text-lg"

    return(
        <button className= {` ${sizeClass} ${shape} mx-2 bg-blue-500 text-white hover:bg-blue-600 transition duration-200`} > {text} </button>
    )
}

export default Button;