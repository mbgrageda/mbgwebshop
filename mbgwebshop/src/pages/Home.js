import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  useEffect(() => {
    document.title = "Tindahan Co - Home";
  }, []);

  const featuredProducts = [
    { id: 1, name: "Wireless Mouse", price: 599, img: "/mouse.jpg" },
    { id: 2, name: "Keyboard", price: 1299, img: "/keyboard.jpg" },
    { id: 3, name: "Headset", price: 999, img: "/headset.jpg" },
  ];

  return (
    <>
      <header>
        <h1>Tindahan Co</h1>
        <p>Online Shopping Website</p>
      </header>

      <div className="container">
        <Navbar />

        <main>
          <h2>Featured Products</h2>

          <div className="products-grid">
            {featuredProducts.map((p) => (
              <div key={p.id} className="product">
                <img src={p.img} alt={p.name} />
                <p>{p.name}</p>
                <p>₱{p.price}</p>
              </div>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Home;
