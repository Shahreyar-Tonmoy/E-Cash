/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
  FacebookAuthProvider
} from "firebase/auth";
import app from "./Firebase.init.js";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const axiosPublic = UseAxiosPublic()
const googleProvider = new GoogleAuthProvider();
const FbProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        console.error('Error creating user:', error);
        setLoading(false);
        throw error;
      });
  };

  const updateUserInfo = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        console.error('Error signing in:', error);
        setLoading(false);
        throw error;
      });
  };

  const SignInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
      .catch((error) => {
        console.error('Error signing in with Google:', error);
        setLoading(false);
        throw error;
      });
  };

  const SignInWithFb = () => {
    setLoading(true);
    return signInWithPopup(auth, FbProvider)
      .catch((error) => {
        console.error('Error signing in with Facebook:', error);
        setLoading(false);
        throw error;
      });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth)
      .catch((error) => {
        console.error('Error signing out:', error);
        setLoading(false);
        throw error;
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = {email : userEmail};
      setLoading(false);
      setUser(currentUser);

      if(currentUser){
        const userInfo = {email: currentUser.email};
        axiosPublic.post('/jwt', userInfo)
          .then(res => {
            if(res.data.token){
              localStorage.setItem("access-token", res.data.token);
            }
          })
          .catch((error) => {
            console.error('Error getting JWT:', error);
          });
      } else {
        localStorage.removeItem("access-token");
      }
    });

    return () => {
      unSubscribe();
    };

  }, []);

  const AuthInfo = {
    user,
    SignInWithGoogle,
    loading,
    createUser,
    signInUser,
    logOut,
    updateUserInfo,
    SignInWithFb
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
