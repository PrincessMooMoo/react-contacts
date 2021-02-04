import { useContext } from 'react';
import ContactContext from '../contexts/ContactContext';

export const useContacts = () => useContext(ContactContext);