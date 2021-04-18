import React from "react";

import "./ContactUsForm.scss";
const ContactForm = () => (
  <form className="contact-us__form">
    <input type="text" placeholder="Enter your name" />
    <input type="email" placeholder="Enter your email" />
    <input type="Subject" placeholder="Subject" />
    <textarea name="message" placeholder="Your message"></textarea>
    <button type="submit">Send</button>
  </form>
);

export default ContactForm;
