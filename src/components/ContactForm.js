import React, { useState, useRef, useContext } from 'react';
import ContactContext from '../contexts/ContactContext';
import { useContacts } from '../hooks';

const ContactForm = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [profileImageSrc, setProfileImageSrc] = useState('');

    const fileInput = useRef();

    const { addContact } = useContacts();

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const fileReader = new FileReader();

        fileReader.readAsDataURL(file);

        fileReader.onload = (event) => {
            setProfileImageSrc(event.target.result)
        }
    }

    const clearInputs = () => {
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setEmail('');
        setAddress('');
        serProfileImageSrc('');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addContact({
            fistName,
            lastName,
            phoneNumber,
            email,
            address,
            profileImage: profileImageSrc
        });
        clearInputs();
    }

    return (
        <form className="ContactForm" onSubmit={handleSubmit}>
            <div className="ContactForm_avatar-wrapper">
                <img
                    src={profileImageSrc || 'https://via.placeholder.com/150'}
                    alt='Profile image preview'
                    onClick={() => fileInput.current.click()}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <input
                    ref={fileInput}
                    type="file"
                    onChange={handleImageUpload}
                />
                <button type="submit">ADD CONTACT</button>
            </div>
        </form>
    )
}

export default ContactForm;