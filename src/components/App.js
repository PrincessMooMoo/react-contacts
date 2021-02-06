import { useState, useEffect } from 'react';
import ContactContext from '../contexts/ContactContext';
import './App.css';
import ContactProvider from '../providers/ContactProviders';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import AuthContext from '../contexts/AuthContext';
import LoginForm from './LoginForm';

const App = () => {

  const [user, setUser] = useState(null);


  const login = (username, password) => {
    if (username == 'captainhook' && password == 'supersecret') {
      setUser(username);
    }
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <div>
      <AuthContext.Provider value={{ user, login, logout }}>

        {!user
          ? <loginForm />
          : <ContactProvider>
            <LoginForm />
            <ContactList />
            <ContactForm />
          </ContactProvider>
        }

      </AuthContext.Provider>
    </div>
  );//update the JSX above

}

export default App;
