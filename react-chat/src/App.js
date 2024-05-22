import React, { useState, useEffect } from 'react';
import { auth, firestore } from './firebase';
import firebase from 'firebase/app';
import Login from './Login';
import Chat from './Chat';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <div className="App">
      {user ? <Chat user={user} /> : <Login />}
    </div>
  );
}

export default App;
