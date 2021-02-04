import { useState, useEffect } from 'react';
import ContactContext from '../contexts/ContactContext';
import './App.css';
import ContactProvider from '../providers/ContactProvider';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const App = () => {

  return (
    <div>
      <ContactProvider>
        <ContactList />
        <ContactForm />
      </ContactProvider>
    </div>
  );

}

export default App;
