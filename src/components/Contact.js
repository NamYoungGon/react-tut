import React from 'react';
import userButton from './userButton';

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contactList: [
                {name: "철수", tel:"010-1234-6789"},
                {name: "미영", tel:"010-6242-1152"},
                {name: "혜미", tel:"010-5123-4576"},
                {name: "구종", tel:"010-4321-6432"}
            ]
        };
    }

    render() {
        return (
            <div>
                <ul>
                    { 
                        this.state.contactList.map((contact, i) => {
                            return (
                                <ContactInfo name={contact.name} tel={contact.tel} key={i}/>
                            );
                        }) 
                    }
                </ul>
                { userButton({name: "생성"}) }
            </div>
        )
    }
}

class ContactInfo extends React.Component {
    render() {
        return (
            <li>Name: { this.props.name }, Tel: { this.props.tel } </li>
        )
    }
}

export default Contact;