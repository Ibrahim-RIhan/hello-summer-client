import { createContext, useEffect, useState } from 'react';
import { app } from '../../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({ children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const updateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
    const signUpEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const signInEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }


    const authInfo = {
        user,
        loading,
        setLoading,
        signUpEmailPassword,
        signInEmailPassword,
        signInGoogle,
        logOut,
        updateProfile,
        setUser,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;