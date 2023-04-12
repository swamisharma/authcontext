import { useContext } from "react"
import { AuthContext } from "../context/Auth"
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Home() {
    const {setCurrentUser} = useContext(AuthContext);
    function handleLogout() {
        signOut(auth)
        .then(() => {
            setCurrentUser(false);
        })
    }

    return(
        <>
            <h1>Logged in successfully {auth.currentUser.displayName.split(" ")[0]}</h1>
            <button onClick={handleLogout}>Log Out</button>
        </>
    )
}