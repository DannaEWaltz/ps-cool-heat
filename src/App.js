import React from 'react';
import Form from './Form';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="PS Cool Heat">
      <header className="HVAC Services">
        <img src={logo} className="PSCH" alt="PSCH" />
        <p>
          Our website is under construction!

          Until our new design is ready to reveal, please fill out the form below so we can contact you!
        </p>
      <h1>PS Cool Heat</h1>
      <Form />
      </header>
    </div>
  );
}

export default App;
