import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  useEffect(() => {
    document.title = "Tindahan Co - Contact";
  }, []);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    alert("Thank you for your message!");
    setName("");
    setMessage("");
  };

  return (
    <>
      <header><h1>Contact Us</h1></header>
      <div className="container">
        <Navbar />
        <main>
          <form onSubmit={submitForm}>
            <label>Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} required />
            <label>Message</label>
            <textarea rows="4" value={message} onChange={(e) => setMessage(e.target.value)} required />
            <button type="submit">Send Message</button>
          </form>
        </main>
      </div>
      <Footer />
    </>
  );
}
export default Contact;
