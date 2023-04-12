import { useContext, useState } from "react"
import { AuthContext } from "../context/Auth"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
    const { setCurrentUser } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleLogin() {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setCurrentUser(true);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    function handleEmail(e) {
        setEmail(e.target.value)
    }
    function handlePassword(e) {
        setPassword(e.target.value)
    }
    return (
        <>
            <h1>Login Here</h1>
            <input type="email" onChange={handleEmail}/>
            <input type="password" onChange={handlePassword}/>
            <button onClick={handleLogin}>Login</button>
        </>
    )
}