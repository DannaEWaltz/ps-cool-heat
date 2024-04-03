//import React from 'react';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export function ContactUs() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [comments, setComments] = useState('');
  const [email, setEmail] = useState('');

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   const emailRec = 'djzionmiller@gmail.com'; // hardcoded email

  //   fetch('/send-email', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ name, number, comments, email:email, emailRec:emailRec }),
  //   })
  //   .then(response => response.json())
  //   .then(data => console.log("this is the data", data))
  //   .catch((error) => console.error('Error:', error));
  // }

  function handleSubmit(e) {
    e.preventDefault();

    const templateParams = {
      name: name,
      number: number,
      comments: comments,
      email: email,
    };

    emailjs.send('service_87if8jb', 'template_350aems', templateParams, 'ARzbnXAOZqMTd3FA0')
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

  return (
    <div className="form">
      <form className="formContainer" onSubmit={handleSubmit}>
        <div className="form-field">
          <label className="form-label">First & Last Name</label>
          <input className="form-input" type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="form-field">
          <label className="form-label">Phone Number</label>
          <input className="form-input" type="text" value={number} onChange={e => setNumber(e.target.value)} placeholder="By providing your phone number, you consent to receive text message based communication." />
        </div>
        <div className="form-field">
          <label className="form-label">Email</label>
          <input className="form-input" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="form-field">
          <label className="form-label">Comments</label>
          <textarea className="form-input" value={comments} onChange={e => setComments(e.target.value)} />
        </div>
        <input className="form-submit" type="submit" value="Submit" />
      </form>
    </div>

    // <div className= "form"> 
    //   <form className="formContainer" onSubmit={handleSubmit}>
    //   <div className="form-field">
    //     <label className= "form-label">First & Last Name</label>
    //     <input className="form-input" type="text" value={name} onChange={e => setName(e.target.value)} />
    //   </div>
    //   <div className="form-field">
    //     <label className="form-label">Phone Number</label>
    //     <input className="form-input" type="text" value={number} onChange={e => setNumber(e.target.value)} placeholder= "By providing your phone number, you consent to receive text message based communication."/>
    //     {/* <p className="form-disc">By providing your phone number, you consent to receive text message based communication</p> */}
    //   </div>
    //   <div className="form-field">   
    //     <label className="form-label">Email</label>
    //     <input className="form-input" type="email" value={email} onChange={e => setEmail(e.target.value)} />
    //   </div>
    //   <div className="form-field">
    //     <label className="form-label">Comments</label>
    //     <textarea className="form-input" value={comments} onChange={e => setComments(e.target.value)} />
    //   </div>
    //     <input className="form-submit" type="submit" value="Submit" />
    //    </form>
    // </div>
  );
}

export default ContactUs;
