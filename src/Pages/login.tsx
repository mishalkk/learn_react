import { auth, provider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


export const Login = () => {
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        
        // use google auth to get and wait async to get user details with token back
        const result = await signInWithPopup(auth, provider);
        console.log(result)
        // redirect to home page after login
        navigate('/');
    };

    return (
        <div>
            <p>Sign In with Google To Continue</p>
            <button onClick={signInWithGoogle}>Sign In with Google</button>
        </div>
    );
}