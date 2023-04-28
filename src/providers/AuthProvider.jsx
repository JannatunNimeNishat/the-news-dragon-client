import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    // const user = {displayName: 'ni7'}
    const user = null;


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

    const authInfo = {
        user,
        createUser,
        signIn,
        updateUser
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