import React from 'react';
import Form from './Form';

function App() {
  return (
    <div className="bg-psch">
      <header className="header">
        <h1>PS Cool Heat</h1>
        <h2>HVAC Services</h2>
        <p className="construct">
          Our website is under construction.
          Until our new design is ready, please fill out the form below so we may contact you!
        </p>
        <Form />
      </header>
    </div>
  );
}

export default App;
