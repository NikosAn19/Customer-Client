import SingleProductCard from "../../components/SingleProductCard/SingleProductCard";
import "./SingleProductPage.css";
import { useProductContext } from "../../Context/ProductContext";

export default function SingleProductPage() {
  const { selectedProduct } = useProductContext();
  return (
    <>
      <button className="singleProductPage-backbttn"> ← </button>
      <SingleProductCard
        img={selectedProduct ? selectedProduct.img : ""}
        title={selectedProduct ? selectedProduct.title : ""}
        description={selectedProduct ? selectedProduct.description : ""}
        price={selectedProduct ? selectedProduct.price : 0}
      />
    </>
  );
}
