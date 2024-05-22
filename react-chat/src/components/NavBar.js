// src/components/NavBar.js

import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const NavBar = ({ auth }) => {
  const handleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
  };

  const handleSignOut = async () => {
    await auth.signOut();
  };

  return (
    <div className="navbar">
      {auth.currentUser ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleSignIn}>Sign In with Google</button>
      )}
    </div>
  );
};

export default NavBar;
