import { ChangeProfile } from "../components/ChangeProfile";
import { AppContext } from "../App";
import { useContext } from "react";


export const Profile = () => {
    const {username} = useContext(AppContext)
    return (
    <div>
        {username}'s Profile Page
        <ChangeProfile />
    </div>);
}