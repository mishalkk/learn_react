import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { async } from "@firebase/util";


export const Navbar = () => {

    // const [user, loading, error] = useAuthState(auth);
    const [user] = useAuthState(auth);

    const signUserOut = async () => {
        await signOut(auth);
    };

    return (
        <div className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
            </div>
            <div className="user">
                {user && (
                    <>
                        <p>{user?.displayName}</p>
                        {/* If the photoURL returns null make src an empty string */}
                        <img src={user?.photoURL || ""} width="30" height="30" alt="no img" />
                        <button onClick={signUserOut}>Log Out</button>
                    </>
                )}
            </div>
        </div>
    );
}