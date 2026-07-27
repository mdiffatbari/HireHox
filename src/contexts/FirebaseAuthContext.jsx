// import React from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { AuthContext } from './AuthContext';
import { auth } from '@/firebse/firebase';
import { useEffect, useState } from 'react';

const FirebaseAuthContext = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const provider = new GoogleAuthProvider();

    const createUserWithGoogle = () => {
        return signInWithPopup(auth,provider)
    }

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const userStatus =  onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                console.log("currentUserHave", currentUser);
                setUser(currentUser)
            }
            else{
                setUser(null)
            }
        })
        return () => {
            userStatus();
        }
    }, [])

    const userInfo = {
        user,
        createUserWithGoogle,
        createUser,
        logInUser ,
        signOutUser
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default FirebaseAuthContext;