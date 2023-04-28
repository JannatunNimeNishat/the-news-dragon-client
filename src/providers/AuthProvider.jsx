import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext(null);

  
const AuthProvider = ({children}) => {
   
    const[ user, setUser] = useState(null);
    //to avoid rase condition -> private route is getting user null so it redirect the user to login again on reload
    const [loading,setLoading] = useState(true);

    //createUser or register new user
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    //update user profile
    const updateUser = (name,photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }
    //login a user
    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    //logout
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, loggedUser =>{
            console.log('login user inside auth sate observer',loggedUser);
            setUser(loggedUser);
            setLoading(false);
        })

        return ()=>{
            unSubscribe();
        }

    },[])

    const authInfo = {
        user,
        createUser,
        signIn,
        updateUser,
        logOut,
        loading
    }




    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;