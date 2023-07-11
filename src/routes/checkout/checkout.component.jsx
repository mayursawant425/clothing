import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout.style.scss"

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);

  return (
    cartItems.map((cartItem) => {
      const { id, name, quantity } = cartItem;

      return (
        <div key={id}>
          <span>{name}</span>
          <span>{quantity}</span>
          <br />
          <span onClick={() => addItemToCart(cartItem)}>inc</span>
          <br />
          <span onClick={() => removeItemFromCart(cartItem)}>dec</span>
        </div>
      );
    })
  );
}

export default Checkout;