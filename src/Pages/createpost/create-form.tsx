import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface CreateFormData {
    title: string;
    description: string;
}


export const CreateForm = () => {
    // use to navigate back to home page after creating a post
    const navigate = useNavigate();

    const [user] = useAuthState(auth);

    const schema = yup.object().shape({
        title: yup.string().required("You must add a Title."),
        description: yup.string().required("You must add description"),

    });

    const {register, handleSubmit, formState: {errors} } = useForm<CreateFormData>({
        resolver: yupResolver(schema),
    });

    // create a variable that is a reference to firebase collections(tables)
    const postRef = collection(db, "posts");

    const onCreatePost = async (data: CreateFormData) => {
        // send the input to firebase DB
        // add doc to which collection - postRef
        await addDoc(postRef,  {
            title: data.title,
            description: data.description,
            // you can replace the above 2 lines of code with
            // ...data,
            username: user?.displayName,
            userid: user?.uid,
        })

        // navigate back to home page
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit(onCreatePost)}>
            <input placeholder="Title..." {...register("title")} />
            <p style={{color: 'red'}}>{errors.title?.message}</p>
            <textarea placeholder="Description" {...register("description")} />
            <p style={{color: 'red'}}>{errors.description?.message}</p>
            {/* input type-submit is import. Do not use button as it won't work with react-hook-form */}
            <input type='submit' value='Create Post' className="submitForm" />
        </form>
    );
}