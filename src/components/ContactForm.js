import React, { useState, useEffect } from 'react';

const ContactForm = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [profileImageSrc, setProfileImageSrc] = useState('');

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const fileReader = new FileReader();

        fileReader.readAsDataURL(file);

        fileReader.onload = (event) => {
            setProfileImageSrc(event.target.result)
        }
    }

    return (
        <form>
            <label>First Name:</label>
            <input 
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <br />
            <label>Last Name:</label>
            <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <br/>
            <label>Phone Number:</label>
            <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <br/>
            <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br/>
            <label>Address</label>
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <br/>
            <img
                src={profileImageSrc}
                alt="Profile image preview"
                width="100px"
            />
            <input
                type="file"
                onChange={handleImageUpload}
            />
            <br/>
            <button type="submit">ADD CONTACT</button>
        </form>
    )
}

export default ContactForm;