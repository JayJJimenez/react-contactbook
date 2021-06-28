import ContactForm from './ContactForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from  'react-icons/ti';
import { useState } from 'react';

// function Contact({ contacts, completeContact, deleteContact, updateContact }) {
//    const { id, contactName, email, number, instagram } = contacts
// console.log(contacts)

//    function handleChangeContactClick() {
//        const updateContact = {
//            contactName: contactName,
//            email: email,
//            number: number,
//            instagram: instagram,
//        }
//        updateContact(id, updateContact)
//    }
   
//     const [edit, setEdit] = useState({
//         id: null,
//         value: ''
//     });

//     const submitUpdate = value => {
//         updateContact(edit.id, value);
//         setEdit({
//             id: null,
//             value: ''
//         });
//     };

//     if (edit.id) {
    const Contact = ({ contacts, completeContact, deleteContact, updateContact }) => {
        const [edit, setEdit] = useState({
          id: null,
          value: ''
        });
      
        const submitUpdate = value => {
          updateContact(edit.id, value);
          setEdit({
            id: null,
            value: ''
          });
        };
      
        if (edit.id) {
        return <ContactForm edit={edit} onSubmit={submitUpdate} />;
    }

    return contacts.map((contact, index) => (
        <div
         className={contact.isComplete ? 'contact-row complete' : 'contact-row'}
         key={index}
         >
             <div key={contact.id} onClick={() => completeContact(contact.id)}>
                {contact.contactName}
             </div>
             <div className="icons">
                 <RiCloseCircleLine
                 onClick={() => deleteContact(contact.id)}
                 className='delete-icon'
                  />
        <TiEdit
          onClick={() => setEdit({ id: contact.id, value: contact.contactName })}
          className='edit-icon'
        />
             </div>
         </div>
    ));
};

export default Contact;