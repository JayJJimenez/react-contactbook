import React, { useState, useEffect, useRef } from 'react';

function ContactForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      contactName: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='contact-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update contact name'
            value={input.contactName}
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
            placeholder='Add a Contact'
            value={input.contactName}
            onChange={handleChange}
            name='text'
            className='contact-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='contact-button'>
            Add a Contact
          </button>
        </>
      )}
    </form>
  );
}

export default ContactForm;