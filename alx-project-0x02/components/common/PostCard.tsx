
import {PostProps} from "@/interfaces"

const PostCard: React.FC<PostProps> =({title, content, userId})=>{

    return(
        <div id="PostCard" className=" bg-gray-300 rounded shadow-md hover:shadow-xl p-3 flex justify-btween items-center flex-col">
            <h2 className=" text-black font-bold w-full"> {title} </h2>
            <p className="w-full text-gray-500"> {content} </p>
            <p className="w-full font-bold text-blue-900"> {userId} </p>
        </div>
    )
}


export default PostCard;