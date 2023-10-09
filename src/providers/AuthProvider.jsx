import PropTypes from 'prop-types';
import { createContext } from 'react';
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

import auth from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';
export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user,setUser] = useState({})
    const [loading, setLoading] = useState(true)

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false);
        });
        return () =>{
            unSubscribe()
        }
    }, [])


console.log(user)






    const authentications = {
        googleLogin,
        createUser,
        signin,
        logOut,
        user,
        loading

    }

    return (
        <AuthContext.Provider value={authentications}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children:PropTypes.object.isRequired,

}

export default AuthProvider;