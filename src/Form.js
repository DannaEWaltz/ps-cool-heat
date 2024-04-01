import React from 'react';

const Form = () => {
  return (
    <form>
      <label>
        First & Last Name:
        <input type="text" name="name" />
      </label>
      <br />
      <label>
        Phone Number:
        <input type="number" name="phone number" />
        By providing your phone number, you consent to receive text message based communication.
      </label>
      <br />
      <label>
        Describe the issue:
        <textarea name="issue" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
