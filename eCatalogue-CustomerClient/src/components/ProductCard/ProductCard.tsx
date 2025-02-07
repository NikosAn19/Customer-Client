import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../Context/ProductContext";
import QuantitySpinner from "../QuantitySpinner/QuantitySpinner";
import "./ProductCard.css";

type ProductCardProps = {
  title: string;
  img: string;
  description: string;
  price: number;
};

export default function ProductCard({
  title,
  img,
  description,
  price,
}: ProductCardProps) {
  const { setSelectedProduct } = useProductContext();
  const navigate = useNavigate();

  const handleClick = () => {
    setSelectedProduct({
      title,
      img,
      description,
      price,
    });
    navigate("/single-product");
  };
  return (
    <>
      <div className="productCard-container" onClick={handleClick}>
        <img src={img} id="productImg"></img>
        <div className="productInfo-container">
          <span id="productTitle">
            <b>{title}</b>
          </span>
          <span id="productDescription">{description}</span>
          <span id="price">{price}€</span>
          {/* <QuantitySpinner /> */}
        </div>
      </div>
    </>
  );
}
