import Header from "@/components/layout/Header"
import {useState, useEffect} from "react"
import PostCard from "@/components/common/PostCard"
import {PostProps} from "@/interfaces"

const Posts: React.FC =({posts})=>{


    return(
        <div>
            <Header/>
            <div className="list grid grid-cols-4 gap-2 m-3">
                {posts.map(({title, body, userId} : PostProps , key : number) =>
                    <PostCard key={key} title = {title} content= {body} userId={userId}/>
                )}
            </div>
        </div>
    )
}

export const getStaticProps  = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data: PostProps[] = await res.json();
        return {
            props: {posts: data.slice(0, 20)}  // only the first 10
        };
  } catch (error) {
        return {
            props: { posts: [] }
        };
  }
};

export default Posts;
