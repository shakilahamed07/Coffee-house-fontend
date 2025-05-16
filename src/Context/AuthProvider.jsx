import React from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({children}) => {

    //* Create user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //* Login user
    const LoginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userInfo = {
        createUser,
        LoginUser,
        
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;