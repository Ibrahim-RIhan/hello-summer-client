import { createContext, useEffect, useState } from 'react';
import { app } from '../../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import axios from 'axios';


export const AuthContext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
           if(currentUser){
            axios.post('http://localhost:5000/jwt',{email : currentUser.email })
            .then(data => {
                console.log(data.data);
                localStorage.setItem('access_token', data.data.token);
            })
           }
           else{
            localStorage.removeItem('access_token');
           }

            setLoading(false);
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const updateUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
    const signUpEmailPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    const signInEmailPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true);
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
        updateUserProfile,
        setUser,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;