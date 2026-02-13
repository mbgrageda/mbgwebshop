import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  useEffect(() => {
    document.title = "Tindahan Co - Cart";
  }, []);

  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const shippingFee = cartItems.length > 0 ? 80 : 0;
  const total = subtotal + shippingFee;

  const handleCheckout = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    if (!fullName || !mobile || !address) {
      alert("Please complete your Name, Mobile, and Address.");
      return;
    }

    alert(
      "Order placed!\n\n" +
        "Name: " + fullName +
        "\nPayment: " + paymentMethod +
        "\nTotal: ₱" + total
    );

    clearCart();
    setOrderPlaced(true);

    setFullName("");
    setMobile("");
    setAddress("");
    setPaymentMethod("COD");
  };

  return (
    <>
      <header>
        <h1>Cart & Checkout</h1>
      </header>

      <div className="container">
        <Navbar />
        <main>
          <h2>Your Cart</h2>

          {cartItems.length === 0 ? (
            <p>{orderPlaced ? "Thank you! Your order was placed." : "Your cart is empty."}</p>
          ) : (
            <>
              {cartItems.map((item, index) => (
                <div key={index} className="product">
                  <p><strong>{item.name}</strong></p>
                  <p>₱{item.price}</p>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </div>
              ))}

              <button onClick={clearCart} style={{ marginTop: 10 }}>
                Clear Cart
              </button>

              <hr />

              <h2>Checkout</h2>
              <form onSubmit={handleCheckout}>
                <label>Full Name</label>
                <input value={fullName} onChange={(e) => setFullName(e.target.value)} required />

                <label>Mobile Number</label>
                <input value={mobile} onChange={(e) => setMobile(e.target.value)} required />

                <label>Delivery Address</label>
                <textarea rows="3" value={address} onChange={(e) => setAddress(e.target.value)} required />

                <label>Payment Method</label>
                <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                  <option value="COD">Cash on Delivery (COD)</option>
                  <option value="GCash">GCash</option>
                  <option value="Card">Credit/Debit Card</option>
                </select>

                <div style={{ marginTop: 12 }}>
                  <p>Subtotal: ₱{subtotal}</p>
                  <p>Shipping Fee: ₱{shippingFee}</p>
                  <h3>Total: ₱{total}</h3>
                </div>

                <button type="submit" style={{ marginTop: 10 }}>
                  Place Order
                </button>
              </form>
            </>
          )}
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Cart;
