import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { Post } from "./post";


// define a Post Datatype
export interface Post {
    id: string;
    userid: string;
    username: string;
    title: string;
    description: string;
}

export const Main = () => {

    // state used to keep track of the data that we get from DB
    const [postsList, setPostsList] = useState<Post[] | null>(null);

    // creating a variable reference to firebase DB collection posts
    const postRef = collection(db, 'posts');

    // function to get the posts from the collection
    const getPosts = async () => {
        const data = await getDocs(postRef);
        // de-structure the returning data retrieve only the info that is required
        setPostsList(
            // and cast as list of post
            data.docs.map((doc) => ({...doc.data(), id: doc.id})) as Post[]
        );
    };
    
    // This function will be called when we render the main/home page
    useEffect(() => {
        getPosts();
    }, [])

    return (
    <div>
        {postsList?.map((post) => (<Post post={post} />))}
    </div>)
}