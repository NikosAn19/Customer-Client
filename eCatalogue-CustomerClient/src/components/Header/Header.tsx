import mealIcon from "../../assets/icons/mealSVG.svg";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    // Κάνουμε navigate στο route "/category-products" και περνάμε το category name στο state
    navigate("/");
  };
  const handleNavigateToCart = () => {
    navigate("/cart");
  };
  return (
    <>
      <header className="header-container">
        <span onClick={() => handleNavigate()}>eCatalogue</span>
        <div className="order-icon">
          <img
            onClick={() => handleNavigateToCart()}
            src={mealIcon}
            alt="Παραγγελία"
          />
        </div>
      </header>
    </>
  );
}
