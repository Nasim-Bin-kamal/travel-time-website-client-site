import { useEffect, useState } from 'react';
import initializeFirebase from '../firebase/firebase.init';
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, createUserWithEmailAndPassword, sendEmailVerification, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

initializeFirebase();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const useFirebase = () => {
    const auth = getAuth();

    const [user, setUser] = useState({});
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(true);


    //Register new user
    const newUserRegistration = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //set user name on profile
    const setUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // const newUser = { ...user, displayName: name };
            // setUser(newUser);
            window.location.reload();
        }).catch(error => {
            setErrorMsg(error.message);
        });
    }

    //verify user email
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                //email verification sent
            });
    }

    //implement sign out user 
    const handleSignOut = () => {
        setLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
        }).catch((error) => {
            // An error happened.
            console.log(error);
        }).finally(() => setLoading(false));

    }
    //trace the user login and logout
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    //sign in with email and password
    const singInProcess = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }



    return {
        newUserRegistration,
        singInProcess,
        signInWithGoogle,
        signInWithGithub,
        setErrorMsg,
        setLoading,
        setUser,
        setUserName,
        verifyEmail,
        handleSignOut,
        user,
        errorMsg,
        loading
    }

};

export default useFirebase;