import {Suspense} from "react";
import {Await, Link, useAsyncValue, useLoaderData, useNavigate} from "react-router-dom";

const Post = () => {
   const post: any = useAsyncValue();
    return(
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    )
};

export const SinglePage = () => {
    const {post, id}: any = useLoaderData();
    // const {id} = useParams();
    const navigate = useNavigate();
    // const [post,setPost]: any[] = useState(null);
    const goBack = () => navigate(-1);
    const goHome = () => navigate('/', {replace: true});

    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json()).then((data: any) => setPost(data))
    // },[id])
    return (
        <div>
            <button onClick={goBack}>Go back</button>
            <button onClick={goHome}>Go home</button>
            {post && (
                <>
                   <Suspense fallback={<h2>Post is loading...</h2>}>
                       <Await resolve={post}>
                           <Post />
                       </Await>
                   </Suspense>
                    <Link to={`/posts/${id}/edit`}>Edit this post</Link>
                </>
            )}
        </div>
    )
};

async function getPostById(id: any) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json()
}

export const postLoader = async ({params}: any) => {
    const id = params.id;

    return {post: getPostById(id), id};
}
