const ContactItem = ({firstName, lastName, phoneNumber, profileImage}) => {
    return (
        <div>
            <img src={profileImage}/>
            <div>
                <p>{`${firstName} ${lastName}`}</p>
                <p>{`${phoneNumber}`}</p>
            </div>
            <div>
                <button>X</button>
            </div>
        </div>
    )

}

export default ContactItem;