import React from 'react';
import Form from './Form';
// import logo from './psch.png';
import banner from './BannerHead.png';

function App() {
  return (
    <div className="background">
      <img className="banner" src={banner} alt="banner"/>
      {/* <img className="logo" src={logo} alt="PSCH"/> */}
      <header className="header">
        <h1>~    ~    ~  PS Cool Heat  ~    ~    ~</h1>
        <h2>1745 Shea Center Drive #449, Highlands Ranch, CO 80129</h2>
        <h1>720-285-0145</h1>
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
