import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { name, email, message };

    try {
      const response = await fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Error sending message. Please try again later.");
      }
    } catch (error) {
      alert("Error sending message. Please try again later.");
    }
  };

  return (
    <div className="parent">
      <h1>Contact Me</h1>
      <form action="" className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          className="form-input"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        ></textarea>

        <input type="submit" value="Submit" className="form-submit-button" />
      </form>
      <a href="https://www.linkedin.com/in/david-santos98/" target="_blank">
        <img src="./assets/linkedin.png" alt="" />
      </a>
      <a href="https://www.instagram.com/naifemusic/" target="_blank">
        <img src="./assets/instagram.png" alt="" />
      </a>
      <a href="https://github.com/DavidSantos-98" target="_blank">
        <img src="./assets/github.png" alt="" />
      </a>
    </div>
  );
};

export default Contact;