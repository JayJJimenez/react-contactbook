import React from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className="contact-app">
      <ContactList />
    </div>
  );
}

export default App;
