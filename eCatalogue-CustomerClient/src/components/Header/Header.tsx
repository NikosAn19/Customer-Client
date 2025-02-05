import mealIcon from "../../assets/icons/mealSVG.svg";
import "./Header.css";
export default function Header() {
  return (
    <>
      <header className="header-container">
        <span>eCatalogue</span>
        <div className="order-icon">
          <img src={mealIcon} alt="Παραγγελία" />
        </div>
      </header>
    </>
  );
}
