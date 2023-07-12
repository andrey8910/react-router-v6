import {useAuth} from "../hook/useAuth";
import {useNavigate} from "react-router-dom";

export const PersonalPage = () => {
    const {signOut} = useAuth();
    const navigate = useNavigate();
    return(
        <>
            <h1>Personal page</h1>
            <button onClick={() => signOut(() => navigate('/', {replace: true}))}>LogOut</button>
        </>

    )
}
