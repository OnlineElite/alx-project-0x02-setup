import Header from "@/components/layout/Header"
import {useState, useEffect} from "react"
import PostCard from "@/components/common/PostCard"
import {PostProps} from "@/interfaces"

const Posts: React.FC =()=>{

    const [posts, setPosts] = useState<PostProps[]>([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data: PostProps[] = await res.json();
            setPosts(data.slice(0, 10)); // Limit to 10 posts
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            setLoading(false);
        }
    };
    fetchPosts();
  }, []);


    return(
        <div>
            <Header/>
            {loading? 
                ( <div className="flex justify-center items-center mt-[40vh] font-extrabold text-black"><p>Loading posts...</p></div> ) 
            : 
                (<div className="list grid grid-cols-4 gap-2 m-3">
                    {posts.map(({title, body, userId} : PostProps , key : number) =>
                        <PostCard key={key} title = {title} content= {body} userId={userId}/>
                    )}
                </div>)}
        </div>
    )
}


export default Posts;