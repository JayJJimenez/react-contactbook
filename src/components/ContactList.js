import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import Contact from './Contact';
import { prevElementSibling } from 'domutils';

const BASE_URL = 'https://json-server-ssb.herokuapp.com/contacts';


function ContactList() {
    const [contacts, setContacts] = useState([]);
  
    useEffect(() => {
      fetch(BASE_URL)
        .then(r => r.json())
        .then(contactData => setContacts(contactData))
    }, [])
  
    function deleteContact(contactId) {
      const URL = `${BASE_URL}/${contactId}`; // BASE_URL + `/${contactId}`
      const config = { method: "DELETE" };
      fetch(URL, config)
        .then(r => r.json())
        .then(() => {
          const newContacts = contacts.filter(contacts => contacts.id !== contactId);
          setContacts(newContacts);
        })
    }
  
    function addContact(contact) {
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact)
      }
  
      fetch(BASE_URL, config)
        .then(r => r.json())
        .then(newContact => {
          const newContacts = [...contacts, newContact];
          setContacts(newContacts);
        })
    }
  
    function updateContact(id, updatedContact) {
      fetch(`${BASE_URL}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedContact),
      })
        .then((r) => r.json())
        .then((updatedContact) => {
          const updatedContacts = contacts.map((contact) => {
            if (contact.id === updatedContact.id) return updatedContact;
            return contact;
          });
          setContacts(updatedContacts);
        });
    }
  
    const completeContact = id => {
        let updatedContacts = contacts.map(contact => {
            if (contact.id === id) {
                contact.isComplete = !contact.isComplete;
            }
            return contact;
        });
        setContacts(updatedContacts);
    };

    return (
        <div>
            <h1>Jonathan's Phonebook</h1>
            <ContactForm onSubmit={addContact} />
            <Contact 
            contacts={contacts}
            completeContact={completeContact}
            removeContact={deleteContact}
            updateContact={updateContact}
            /> 
        </div>
    );
}

export default ContactList;
