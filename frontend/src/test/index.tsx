import { useEffect, useRef, useState } from "react";

// const BASE_URL = 'https://jsonplaceholder.typicode.com';
interface Post {
    id:number;
    title:string;
}


export default function Demo(){
    const [error, setError] = useState();
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(0);

    const abortControllerRef = useRef<AbortController | null>(null);

    useEffect(()=>{
        const fetchPosts = async ()=> {
            abortControllerRef.current?.abort();
            abortControllerRef.current = new AbortController();

            setIsLoading(true);

            try{
                const response = await fetch(`/api/posts?page=${page}`, {
                    signal:abortControllerRef.current?.signal,
                });
                const posts = await response.json() as Post[];
                setPosts(posts);
            }catch(e:any){
                if(e.name === "AbortError"){
                    console.log("Aborted");
                    return;
                }
                setError(e);
            }finally{
                setIsLoading(false);
            }   

        }
        fetchPosts();
    },[page])

    if(error){
        return <div>Something went wrong! Please try again.</div>
    }
    return(
        <div>
            <h1>Data Fetching in React</h1>
            <button onClick={()=>setPage(page+1)}>Increment Page ({page})</button>
            {isLoading ? 
            <h1>Loading...</h1> : <>
                <ul>
                    {posts.map((post) => {
                        return <li key={post.id}>{post.title}</li>
                    })}
                </ul>
            </>}
        </div>
    )
}