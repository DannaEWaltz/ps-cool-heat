//import React from 'react';
import React, { useState } from 'react';

export function ContactUs() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [comments, setComments] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const email = 'noreply@pscoolheat.com'; // hardcoded email

    fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, number, comments, email }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.error('Error:', error));
  }

  return (
    <div className= "grid grid-cols-6 gap-4"> 
      <form className="" onSubmit={handleSubmit}>
        <label className= "mx-2.5 my-2.5">First & Last Name</label>
        <input className="form-input" type="text" value={name} onChange={e => setName(e.target.value)} />
  
        <label className="mx-2.5 my-2.5">Phone Number</label>
        <input className="form-input" type="text" value={number} onChange={e => setNumber(e.target.value)} />
        <p className="form-disc">By providing your phone number, you consent to receive text message based communication</p>
        <label className="mx-2.5 my-2.5">Email</label>
        <input className="form-input" type="email" value={email} onChange={e => setEmail(e.target.value)} />

        <label className="mx-2.5 my-2.5">Comments</label>
        <textarea className="justify-items-center shadow-2xl" value={comments} onChange={e => setComments(e.target.value)} />

        <input className="form-submit" type="submit" value="Submit" />
       </form>
    </div>
  );
}

export default ContactUs;
