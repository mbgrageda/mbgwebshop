import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Signup() {
  useEffect(() => {
    document.title = "Tindahan Co - Signup";
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const signupUser = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }
    alert("Account created successfully!");
    setFirstName(""); setLastName(""); setEmail("");
    setPassword(""); setConfirm(""); setMobile(""); setAddress("");
  };

  return (
    <>
      <header><h1>Sign Up</h1></header>
      <div className="container">
        <nav><Link to="/login">Back to Login</Link></nav>
        <main>
          <form onSubmit={signupUser}>
            <label>First Name</label>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            <label>Last Name</label>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            <label>Email Address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <label>Confirm Password</label>
            <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} required />
            <label>Mobile Number</label>
            <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
            <label>Home Address</label>
            <textarea rows="3" value={address} onChange={(e) => setAddress(e.target.value)} required />
            <button type="submit">Create Account</button>
          </form>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </main>
      </div>
      <Footer />
    </>
  );
}
export default Signup;
