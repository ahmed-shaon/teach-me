import React from 'react';
import {createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //login through social media
    const googleProvider = new GoogleAuthProvider();
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const githubProvider = new GithubAuthProvider();
    const loginWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }
    const facebookProvider = new FacebookAuthProvider();
    const loginWithFacebook = () => {
        return signInWithPopup(auth, facebookProvider);
    }

    //Manual User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        return signOut(auth);
    }



    //Get User update
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })

        return () => {
            unsubscribe();
        }
    },[]) 
 
    const authInfo = {user, 
        createUser,
        verifyEmail, 
        updateUserProfile, 
        userLogin,
        loginWithGoogle,
        loginWithFacebook,
        loginWithGithub, 
        logOut}
    return (
        <AuthContext.Provider  value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;