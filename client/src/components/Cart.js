import React from "react";

const Cart = ({ cart, onRemove, onChangeAmt }) => {
  return (
    <div>
      {/* @ You Xing or whoever is working on Cart: this is just temporary for me to test the add/remove/update cart functionality. Replace this with your actual cart code when ready */}
      <h2>Cart Items</h2>
      {cart.map((item) => {
        return (
          <div>
            <h3 onClick={() => onRemove(item.id)}>{item.id}</h3>
            <p>{item.amount}</p>
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
