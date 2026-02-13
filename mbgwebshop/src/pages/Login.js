import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  useEffect(() => {
    document.title = "Tindahan Co - Login";
  }, []);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();
    alert("Login successful (placeholder)");
    navigate("/profile");
  };

  return (
    <>
      <header><h1>Login</h1></header>
      <div className="container">
        <Navbar />
        <main>
          <form onSubmit={loginUser}>
            <label>Email Address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
          </form>
          <p>Don’t have an account? <Link to="/signup">Sign up here</Link></p>
        </main>
      </div>
      <Footer />
    </>
  );
}
export default Login;
