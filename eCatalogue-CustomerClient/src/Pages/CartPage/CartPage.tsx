import CartGrid from "../../components/CartGrid/CartGrid";
import "./CartPage.css";
export default function CartPage() {
  return (
    <>
      <div className="cart-header">Cart</div>
      <CartGrid />
      <div className="cartBttn-wrapper">
        <button className="cart-button">
          <span id="sendOder-text">Send Order</span>
          <span id="totalPrice-text">33 €</span>
        </button>
      </div>
    </>
  );
}
