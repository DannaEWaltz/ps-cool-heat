import React from 'react';
import Form from './Form';

function App() {
  return (
    <div className="background">
      <header className="header">
        <h1>~    ~    ~  PS Cool Heat  ~    ~    ~</h1>
        <h2>1745 Shea Center Drive #449, Highlands Ranch, CO 80129</h2>
        <h1>720-285-0145</h1>
        <h3>HVAC: Installation, Maintenance, Repair 24/7</h3>
        <p className="construct">
          Our website is under construction.
          Until our new design is ready, please fill out the form below so we may contact you!
        </p>
        <img className="logo" src="/psch.png" alt="PSCH"/>
        <Form />
      </header>
    </div>

  );
}

export default App;
