import Card from "@/components/common/Card"
import PostModal from "@/components/common/PostModal"
import {CardProps} from "@/interfaces"
const data = [
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
]

const home: React.FC =()=>{

    return(
        <div className="m-3 ">
            <h1 className="mb-2">Welcome to the <span className="text-green-500">home</span> page</h1>
            <button className="bg-blue-400 rounded p-1 text-black font-bold mb-2">Add post</button>
            <div className="list grid grid-cols-4 gap-2 mb-3">
                {data.map(({title, content} : CardProps , key : number) =>
                    <Card key={key} title = {title} content= {content} />
                )}
            </div>
            <PostModal/>
        </div>
    )
}

export default home;
