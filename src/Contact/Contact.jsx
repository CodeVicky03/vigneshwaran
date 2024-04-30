import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_abhibcw", "template_2cub7aa", form.current, {
        publicKey: "symHIKZC1eW1MvCRw",
      })
      .then(
        () => {
          alert("Message Send Successful")
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <p>
        Get in <span>Touch</span>
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <input type="text" placeholder="First Name" name="from_firstname"/>
          <input type="text" placeholder="Second Name" name="from_secondname"/>
        </div>
        <input type="email" placeholder="Email Address" name="form_email"/>
        <textarea rows={5} placeholder="Message" name="message"></textarea>
        <input type="submit" value="Send Message" style={{backgroundColor:"#111111", color:"#f5f5f5", cursor:"pointer"}}/>
      </form>
    </div>
  );
};

export default Contact;
