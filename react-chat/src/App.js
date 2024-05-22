// src/App.js

import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Chatbox from './components/Chatbox';
import Welcome from './components/Welcome';
import { auth } from './firebase';

function App() {
  const user = auth.currentUser;

  return (
    <div className="App">
      <header className="App-header">
        <NavBar auth={auth} />
        {user ? <Chatbox firestore={firestore} /> : <Welcome />}
      </header>
    </div>
  );
}

export default App;
