import { useState } from "react";
import QuantitySpinner from "../QuantitySpinner/QuantitySpinner";
import "./SingleProductCard.css";

type SingleProductCardProps = {
  img: string;
  title: string;
  description: string;
  price: number;
};

export default function SingleProductCard({
  img,
  title,
  description,
  price,
}: SingleProductCardProps) {
  const [currentPrice, setCurrentPrice] = useState(price);

  // Συνάρτηση που καλείται κάθε φορά που αλλάζει η ποσότητα στο QuantitySpinner
  const handleQuantityChange = (quantity: number) => {
    // Υπολογισμός της νέας τιμής με βάση την αρχική τιμή και την ποσότητα
    setCurrentPrice(price * quantity);
  };
  return (
    <div className="singleProductCard-wrapper">
      <img src={img} className="singleProductCard-img"></img>
      <span className="singleProductCard-Title">{title}</span>
      <span className="singleProductCard-Description">{description}</span>
      <span className="singleProductCard-Price">
        {currentPrice.toFixed(2)} €
      </span>

      <QuantitySpinner onChange={handleQuantityChange} />
      <button className="add-to-cart-bttn">Add</button>
    </div>
  );
}
