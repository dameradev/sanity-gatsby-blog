import React from "react";

import "./ContactUs.scss";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1>Contact us for exeptional travel design</h1>

      <form className="contact-us__form">
        <input type="text" placeholder="Enter your name" />
        <input type="email" placeholder="Enter your email" />
        <input type="Subject" placeholder="Subject" />
        <textarea name="message" placeholder="Your message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;
