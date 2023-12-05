import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase-config/firebase.config";
import useAxios from "../hooks/useAxios";

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {

    const axios = useAxios();

    const [user,setUser] = useState()
    const [isLoading,setIsLoading] = useState(true)


    const createUser = (email,pass) =>{
        return createUserWithEmailAndPassword(auth,email,pass);
    }
    const updateUser = (name,photo) =>{
        setIsLoading(true)
        return updateProfile(auth.currentUser,{
            displayName : name,
            photoURL : photo,
        })
    }

    const loginUser = (email,pass) =>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const logOut = () =>{
        setIsLoading(true)
        return signOut(auth);
    }

    const provider = new GoogleAuthProvider();
    const googleLogin = () =>{
        return signInWithPopup(auth,provider);
    }

    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser);
            setUser(currentUser);
            setIsLoading(false);
            if(currentUser){
                const loggedUser = {email : currentUser.email}
                axios.post("/access-token",loggedUser)
                .then(res=>{
                    console.log(res.data);
                })

            }

            return ()=>{
                return subscribe();
            }
        })
    },[])






    const authInfo ={
        user,
        isLoading,
        createUser,
        loginUser,
        updateUser,
        logOut,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;