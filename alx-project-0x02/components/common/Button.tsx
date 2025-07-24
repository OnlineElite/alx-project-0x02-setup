import {ButtonProps} from "@/interfaces"

const Button: React.FC<ButtonProps> =({size, shape, text})=>{

    let sizeClass = ""

    if (size === "sm") sizeClass = "py-1 px-2 text-sm"
    else if (size === "md") sizeClass = "py-2 px-4 text-md"
    if (size === "lg") sizeClass = "py-3 px-6 text-lg"

    return(
        <button className= {` ${sizeClass} ${shape} mx-2 bg-blue-500 text-white hover:bg-blue-600 transition duration-200`} > {text} </button>
    )
}

export default Button;