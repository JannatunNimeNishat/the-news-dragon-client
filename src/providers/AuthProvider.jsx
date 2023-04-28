import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext(null);

  
const AuthProvider = ({children}) => {
   
    const[ user, setUser] = useState(null);


    //createUser or register new user
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    //update user profile
    const updateUser = (name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }
    //login a user
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    //logout
    const logOut = ()=>{
        return signOut(auth)
    }
    
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, loggedUser =>{
            console.log('login user inside auth sate observer',loggedUser);
            setUser(loggedUser);
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
        logOut
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