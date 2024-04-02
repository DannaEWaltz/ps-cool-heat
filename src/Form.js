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
    <div className= "form"> 
      <form className="formContainer" onSubmit={handleSubmit}>
        <label className= "form-label">First & Last Name</label>
        <input className="form-input" type="text" value={name} onChange={e => setName(e.target.value)} />
  
        <label className="form-label">Phone Number</label>
        <input className="form-input" type="text" value={number} onChange={e => setNumber(e.target.value)} />
        <p className="form-disc">By providing your phone number, you consent to receive text message based communication</p>
          
        <label className="form-label">Email</label>
        <input className="form-input" type="email" value={email} onChange={e => setEmail(e.target.value)} />

        <label className="form-label">Comments</label>
        <textarea className="form-input" value={comments} onChange={e => setComments(e.target.value)} />

        <input className="form-submit" type="submit" value="Submit" />
       </form>
    </div>
  );
}

export default ContactUs;
