import QuantitySpinner from "../QuantitySpinner/QuantitySpinner";
import "./CartProductCard.css";

type CartProductCardProps = {
  name: string;
  image: string;
  items: number;
  onClick?: () => void;
};
export default function CartProductCard({
  name,
  image,
  items,
  onClick,
}: CartProductCardProps) {
  return (
    <>
      <div className="cartProductCard-container" onClick={onClick}>
        <img className="cartProductCard-img" src={image} alt="appetizers"></img>
        <div className="cartProductCard-info-container">
          <span className="cartProductCard-name">{name}</span>
          <span className="cartProductCard-totalPrice">{items} €</span>
        </div>
        <div className="spinner-container">
          <QuantitySpinner initialValue={1} />
        </div>
      </div>
    </>
  );
}
