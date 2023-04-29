import Button from "../button/button.component";
import "./cart-dropdown.style.scss"

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>Go To Cart</Button>
    </div>
  );
}

export default CartDropdown;