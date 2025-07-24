import {CardProps, PostModalProps} from "@/interfaces"
import {useState} from "react"

const PostModal: React.FC<PostModalProps> =({isOpen, onClose, onSubmit})=>{

    const [post, setPost] = useState<CardProps>({
        title : "",
        content : "",
    })

    const handleTitleInput =(e)=> {
        setPost({...post, title : e.target.value})
    }

    const handleContentInput =(e)=>{
        setPost({...post, content : e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        onSubmit(post)
        setPost({title : "", content : ""})
        onClose()
    }

    if(!isOpen) return null    
    return(
        <div id="modal" className=" bg-gray-200 w-full sm:w-full md:w-[80vw] lg:w-[60vw] xl:w-[40vw] rounded-lg">
            <form action="" className="flex justify-between items-center flex-col py-5 px-10">
                <div id="title" className="flex justify-between items-start flex-col p-1 w-full ">
                    <label className="text-black font-extrabold" htmlFor="">Title</label>
                    <input value={post.title} onChange={(e)=> handleTitleInput(e)} type="text" placeholder="Enter title" className="w-full rounded p-1"/>
                </div>
                <div id="content" className="flex justify-between items-start flex-col p-1 w-full ">
                    <label className="text-black font-extrabold" htmlFor="">Content</label>
                    <textarea value={post.content} onChange={(e)=> handleContentInput(e)} className="w-full rounded p-1 min-h-60" placeholder="Enter content"  name="" id=""/>
                </div>
                <button onClick={handleSubmit} className="bg-gray-400 border-2 border-white border-solid rounded p-1 text-black font-bold w-full">Create</button>
            </form>
        </div>
    )
}

export default PostModal;