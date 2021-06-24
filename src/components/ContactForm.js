import React, { useState, useEffect, useRef } from 'react';

function ContactForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });

        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className='contact-form'>
          {props.edit ? (
            <>
              <input
                placeholder='Update your item'
                value={input}
                onChange={handleChange}
                name='text'
                ref={inputRef}
                className='contact-input edit'
              />
              <button onClick={handleSubmit} className='contact-button edit'>
                Update
              </button>
            </>
          ) : (
            <>
              <input
                placeholder='Add a contact'
                value={input}
                onChange={handleChange}
                name='text'
                className='contact-input'
                ref={inputRef}
              />
              <button onClick={handleSubmit} className='contact-button'>
                Add contact
              </button>
            </>
          )}
        </form>
      );
    }
    
    export default ContactForm;