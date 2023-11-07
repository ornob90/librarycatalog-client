import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import auth, { googleProvider } from "../Firebase/firebase.config";
import AuthContext from "../Context/AuthContext";
import BASE_URL from "../api/api";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUpMethod = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInMethod = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutMethod = () => {
    setLoading(true);

    return signOut(auth);
  };

  const googleSignInMethod = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curUser) => {
      const userEmail = curUser?.email;

      const loggedUser = { email: userEmail };

      setUser(curUser);
      setLoading(false);

      if (curUser) {
        axios
          .post(BASE_URL + "/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token response", res.data);
          });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    signUpMethod,
    signInMethod,
    googleSignInMethod,
    signOutMethod,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
