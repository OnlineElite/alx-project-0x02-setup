import { type CardProps } from "@/interfaces"


const Card: React.FC<CardProps> =({title, content})=>{

    return(
        <div id="card" className=" bg-orange-200 rounded shadow-md hover:shadow-xl p-3 flex justify-btween items-center flex-col">
            <h2 className=" text-black font-bold w-full"> {title} </h2>
            <p className="w-full text-gray-500"> {content} </p>
        </div>
    )
}

export default Card;
