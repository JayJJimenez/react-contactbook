import React from 'react';
import ContactForm from './ContactForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from  'react-icons/ti';

function Contact({ contacts, completeContact, removeContact, updateContact }) {
   const { id, firstName, lastName, email, number, instagram } = contacts

   function removeContact() {
       removeContact(id);
   }

   function handleChangeContactClick() {
       const updateContact = {
           firstName: firstName,
           lastName: lastName,
           email: email,
           number: number,
           instagram: instagram,
       }
       updateContact(id, updateContact)
   }
   
    // const [edit, setEdit] = useState({
    //     id: null,
    //     value: ''
    // });

    // const submitUpdate = value => {
    //     updateContact(edit.id, value);
    //     setEdit({
    //         id: null,
    //         value: ''
    //     });
    // };

    // if (edit.id) {
    //     return <ContactForm edit={edit} onSubmit={submitUpdate} />;
    // }

    return contacts.map((contact, index) => (
        <div
         className={contact.isComplete ? 'contact-row complete' : 'contact-row'}
         key={index}
         >
             <div key={contact.id} onClick={() => completeContact(contact.id)}>
                <p>{contact.firstName} {contact.lastName}</p> 
             </div>
             <div className="icons">
                 <RiCloseCircleLine
                 onClick={() => removeContact}
                 className='delete-icon'
                  />
                 <TiEdit
                 onClick={() => handleChangeContactClick}
                 className='edit-icon'
                  />
             </div>
         </div>
    ));
};

export default Contact;