import { useEffect, useState } from "react"
// import { initializeAuth } from "../Firebase/firebase.init";
import initializeAuth from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

initializeAuth()

const useFirebase = () => {

    const [error, setError] = useState('')
    const [login, setlogin] = useState(false)
    const [user, setUser] = useState({});

    const auth = getAuth();
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
        setError, login, error


    }
}
export default useFirebase;