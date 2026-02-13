import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {
  useEffect(() => {
    document.title = "Tindahan Co - Profile";
  }, []);

  return (
    <>
      <header><h1>User Profile</h1></header>
      <div className="container">
        <Navbar />
        <main>
          <h2>User Information</h2>
          <p><strong>First Name:</strong> Marco Angelo</p>
          <p><strong>Last Name:</strong> Grageda</p>
          <p><strong>Email:</strong> tindahanco@gmail.com</p>
          <p><strong>Mobile Number:</strong> 09610805566</p>
          <p><strong>Home Address:</strong> Manila, Philippines</p>
        </main>
      </div>
      <Footer />
    </>
  );
}
export default Profile;
