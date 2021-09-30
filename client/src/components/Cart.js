import React, { useEffect } from "react";

const Cart = ({ cart, onRemove, onChangeAmt, onCheckout }) => {
  const total_price = cart
    .reduce((acc, item) => (acc += item.price * item.amount), 0)
    .toFixed(2);
  const total_qty = cart.reduce((acc, item) => (acc += item.amount), 0);

  return (
    <div>
      <h1>Cart Items</h1>
      <div>
        <h2>Total price: ${total_price}</h2>
        <h2>Items in cart: {total_qty}</h2>
        <button onClick={onCheckout}>Checkout</button>
      </div>
      {cart.map((item) => {
        return (
          <div>
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} className="small" />
            <p>Quantity: {item.amount}</p>
            <button onClick={() => onRemove(item.id)}>delete</button>
            <button onClick={() => onChangeAmt(item.id, "inc")}>
              increase
            </button>
            <button onClick={() => onChangeAmt(item.id, "dec")}>
              decrease
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
