import React, { useState, useEffect, useRef } from 'react';
import { auth, firestore } from './firebase';
import firebase from 'firebase/app';

const Chat = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const dummy = useRef();

  useEffect(() => {
    const messagesRef = firestore.collection('messages');
    messagesRef.orderBy('createdAt').limit(50).onSnapshot((snapshot) => {
      const messages = snapshot.docs.map(doc => doc.data());
      setMessages(messages);
    });
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = user;

    await firestore.collection('messages').add({
      text: input,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });

    setInput('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="chat">
      <div className="messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.uid === user.uid ? 'sent' : 'received'}`}>
            <img src={msg.photoURL} alt="User Avatar" />
            <p>{msg.text}</p>
          </div>
        ))}
        <div ref={dummy}></div>
      </div>
      <form onSubmit={sendMessage}>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Say something..." />
        <button type="submit">Send</button>
      </form>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
};

export default Chat;
