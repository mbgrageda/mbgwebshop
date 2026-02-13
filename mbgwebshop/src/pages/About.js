import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  useEffect(() => {
    document.title = "Tindahan Co - About";
  }, []);

  return (
    <>
      <header><h1>About Tindahan Co</h1></header>
      <div className="container">
        <Navbar />
        <main>
          <p>
            Tindahan Co is an online store that sells affordable technology products.
            <br /><br />
            Tindahan Co is founded by Marco Grageda
          </p>
        </main>
      </div>
      <Footer />
    </>
  );
}
export default About;
