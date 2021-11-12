import { useEffect, useState } from "react"
// import { initializeAuth } from "../Firebase/firebase.init";
import initializeAuth from "../Firebase/firebase.init";
// import { getAuth, signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider, signInUsingGoogle } from "firebase/auth";
// signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification 
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

initializeAuth()
const auth = getAuth();

const useFirebase = () => {
    const [error, setError] = useState('')
    // const [login, setlogin] = useState(false)
    const [user, setUser] = useState({});

    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
            })
    }

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
        })
            .catch((error) => {

            });

    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                // User is signed out
                // ...
            }
        });

    }, [])

    return {
        user,
        signInUsingGoogle,
        logOut,
        setError, error


    }
}
export default useFirebase;