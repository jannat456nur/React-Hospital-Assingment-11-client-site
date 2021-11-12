import { useEffect, useState } from "react"
// import { initializeAuth } from "../Firebase/firebase.init";
import initializeAuth from "../pages/Firebase/firebase.init";
import { getAuth, signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

initializeAuth()

const useFirebase = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState();
    const [error, setError] = useState('')
    const [login, setlogin] = useState(false)
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // const auth = getAuth();
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePassChange = (e) => {
        setPass(e.target.value)
    }
    const toogleLogIn = e => {
        setlogin(e.target.checked)
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, pass)
        if (pass.length < 6) {
            setError('password should be 6 character')
            return;
        }
        login ? processLogin(email, pass) : createnewuser(email, pass);


    }
    const processLogin = (email, pass) => {
        signInWithEmailAndPassword(auth, email, pass)
            .then(result => {
                const user = result.user;
                setUser(user)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const createnewuser = (email, pass) => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then((result) => {
                const user = result.user;
                setUser(user)
                console.log(user)
                setError('')
                // verifyEmail()

            })
            .catch(error => {
                setError(error.message)
            })
    }
    const verify = () => {
        const auth = getAuth();
        sendEmailVerification(auth.currentUser)
            .then((result) => {
                console.log(result)
            });
    }

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
        verify,
        handleRegistration,
        toogleLogIn,
        handleEmailChange,
        handlePassChange, setError, login, error


    }
}
export default useFirebase;