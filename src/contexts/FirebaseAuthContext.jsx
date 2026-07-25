// import React from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { AuthContext } from './AuthContext';
import { auth } from '@/firebse/firebase';

const FirebaseAuthContext = ({children}) => {

    const provider = new GoogleAuthProvider();

    const createUserWithGoogle = () => {
        return signInWithPopup(auth,provider)
    }

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        createUserWithGoogle,
        createUser
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default FirebaseAuthContext;