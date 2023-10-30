import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  getAuth,
  sendPasswordResetEmail,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../Firebase";

export const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  function githubSignIn() {
    const githubAuthProvider = new GithubAuthProvider();
    return signInWithPopup(auth, githubAuthProvider);
  }

  function logout() {
    // console.log("log out user ");
    return signOut(auth);
  }

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("log in user ", currentUser);
      getAuth();
      setUser(currentUser);
    });
    return () => {
      unsubsribe();
    };
  }, []);

  const values = { login, logout, signUp, googleSignIn, githubSignIn, user };

  return (
    <userAuthContext.Provider value={values}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
