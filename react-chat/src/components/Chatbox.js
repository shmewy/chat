// src/components/Chatbox.js

import React, { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';

const Chatbox = ({ firestore }) => {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('timestamp').limit(25);
  const [messages] = useCollectionData(query, { idField: 'id' });
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      await messagesRef.add({
        text: newMessage,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setNewMessage('');
    }
  };

  return (
    <div className="chatbox">
      {messages &&
        messages.map((msg) => (
          <div key={msg.id} className="message">
            {msg.text}
          </div>
        ))}
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chatbox;
