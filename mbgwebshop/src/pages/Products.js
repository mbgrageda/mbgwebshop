import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";

function Products() {
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    document.title = "Tindahan Co - Products";
  }, []);

  const products = [
    { id: 1, name: "Wireless Mouse", price: 599, img: "/mouse.jpg" },
    { id: 2, name: "Keyboard", price: 1299, img: "/keyboard.jpg" },
    { id: 3, name: "Headset", price: 999, img: "/headset.jpg" },
  ];

  const handleAdd = (p) => {
    addToCart(p);
    alert(p.name + " added to cart!");
  };

  return (
    <>
      <header>
        <h1>Products</h1>
      </header>

      <div className="container">
        <Navbar />

        <main>
          <h2>All Products</h2>

          <div className="products-grid">
            {products.map((p) => (
              <div key={p.id} className="product">
                <img src={p.img} alt={p.name} />
                <p>{p.name}</p>
                <p>₱{p.price}</p>
                <button onClick={() => handleAdd(p)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Products;
