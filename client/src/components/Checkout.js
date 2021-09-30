import Cart from './Cart'

const Checkout = ({cart}) => {
    return (
    <div>
      <h2>Checkout</h2>
      {cart.map((item) => {
        return (
          <div>
            <h3>{item.id}</h3>
            <p>{item.amount}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout
