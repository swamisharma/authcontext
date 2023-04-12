import { createContext, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null);

export default function MyProvider({children}) {
    const [currentUser, setCurrentUser] = useState(false);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setCurrentUser(true);
        }
    });

    return (
        <>
            <AuthContext.Provider value={{currentUser, setCurrentUser}}>
                {children}
            </AuthContext.Provider>
        </>
    )
}