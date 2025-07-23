

const PostModal: React.FC =()=>{

    return(
        <div id="modal" className=" bg-blue-100 w-full sm:w-full md:w-[80vw] lg:w-[60vw] xl:w-[40vw] rounded-lg">
            <form action="" className="flex justify-between items-center flex-col py-5 px-10">
                <div id="title" className="flex justify-between items-start flex-col p-1 w-full ">
                    <label className="text-black font-extrabold" htmlFor="">Title</label>
                    <input type="text" placeholder="Enter title" className="w-full rounded p-1"/>
                </div>
                <div id="content" className="flex justify-between items-start flex-col p-1 w-full ">
                    <label className="text-black font-extrabold" htmlFor="">Content</label>
                    <textarea className="w-full rounded p-1 min-h-60" placeholder="Enter content"  name="" id=""/>
                </div>
                <button className="bg-blue-400 rounded p-1 text-black font-bold w-full">Create</button>
            </form>
        </div>
    )
}

export default PostModal;