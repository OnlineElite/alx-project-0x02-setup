import Card from "@/components/common/Card"
import PostModal from "@/components/common/PostModal"
import Header from "@/components/layout/Header"
import {useState} from "react"
import {CardProps} from "@/interfaces"

const Home: React.FC =()=>{

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [posts, setPosts] = useState<CardProps[]>([
        {
            title : "Cars Company",
            content : "Applaying to a cars company for a job in the field of tech as a software enginieer"
        },
        {
            title : "Start up company",
            content : "Working in a start up company as a software enginieer in order to acuire experience"
        },
        {
            title : "Freelancer job",
            content : "Working as a freelancer in the field of tech in order to gane clients and build my own start up in the future"
        }
    ])

    const handleModal=()=>{
        setIsModalOpen(true)
    }

    const handleAddPost=(post : CardProps)=>{
        setPosts([...posts, post])
    }

    return(
        <div className=" ">
            <Header/>
            <div className="m-3">
                <h1 className="mb-2">Welcome to the <span className="text-green-500">home</span> page</h1>
                <button className="bg-blue-400 rounded p-1 text-black font-bold mb-2" onClick={handleModal} >Add post</button>
                <div className="list grid grid-cols-4 gap-2 mb-3">
                    {posts.map(({title, content} : CardProps , key : number) =>
                        <Card key={key} title = {title} content= {content} />
                    )}
                </div>
                <PostModal isOpen={isModalOpen} onClose={()=> setIsModalOpen(false)} onSubmit={handleAddPost} />
            </div>
        </div>
    )
}

export default Home;