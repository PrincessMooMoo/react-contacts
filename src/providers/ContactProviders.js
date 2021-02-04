import { useState } from 'react';
import ContactContext from '../contexts/ContactContext';

const ContactProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);

    const addContact = (contact) => {
        setContacts([...contacts, contact]);
    }

    const removeContact = (index) => {
        setContacts(contacts.filter((contact, indx) => index !== indx))
    }

    return (
        <ContactContext.Provider value={ {contacts, addContact, removeContact} }>
            {children}
        </ContactContext.Provider>
    )
}

export default ContactProvider;