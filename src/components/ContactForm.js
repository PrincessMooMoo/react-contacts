import React from 'react';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            address: '',
            profileImageSrc: ''
        };
    }

    handleTextInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });

    }

    handleProfileImageUpload(event) {
        const file = event.target.files[0];
        const fileReader = new FileReader();

        fileReader.readAsDataURL(file);

        fileReader.onload = (event) => {
            this.setState({
                profileImageSrc: event.target.result
            })
        }
    }
    
    render() {

        const {firstName, lastName, phoneNumber, email, address} = this.state;

        return (
            <form>
                <label>First Name</label>
                <input type="text" 
                value={firstName} 
                onChange={this.handleTextInputChange} 
                name="firstName"/>
                <br />
                <input type="text" 
                value={lastName} 
                onChange={this.handleTextInputChange} 
                name="lastName"/>
                <br />
                <input type="tel" value={phoneNumber} onChange={this.handleTextInputChange} name="phoneNumber"/>
                <input type="email" value={email} onChange={this.handleTextInputChange}/>
                <input type="text" value={address} onChange={this.handleTextInputChange}/>

                <img src={profileImageSrc} alt="Profile image preview" width="100px"/>
                <input type="file"
                onChange={this.handleProfileImageUpload}
                />
                <br />
                <button type="submit">Add Contact</button>
            </form>
        )
    }
}
