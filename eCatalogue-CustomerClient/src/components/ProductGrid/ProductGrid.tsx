import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

// Δείγμα δεδομένων. Θα μπορούσαν να έρχονται κι από API.
import appetizers from "../../assets/MenuImages/appetizers.jpg";
import pizza from "../../assets/MenuImages/pizza.jpg";
import coffee from "../../assets/MenuImages/coffee.jpeg";
import softDrinks from "../../assets/MenuImages/soft-drinks.jpg";

const productsData = [
  {
    id: 1,
    title: "Potatoes",
    description: "Deep fried potatoes",
    image: appetizers,
    price: 11,
  },
  {
    id: 2,
    title: "Pizza",
    description: "Special Pizza",
    image: pizza,
    price: 8,
  },
  {
    id: 3,
    title: "Coffee",
    description: "Of your choice",
    image: coffee,
    price: 5,
  },
  {
    id: 4,
    title: "Fanta",
    description: "your favorite beverage",
    image: softDrinks,
    price: 5,
  },
  {
    id: 5,
    title: "Fanta",
    description: "your favorite beverage",
    image: softDrinks,
    price: 5,
  },
  // ... όσες κατηγορίες θες
];

type ProductGridProps = {
  gridRef: React.RefObject<HTMLDivElement>;
};
export default function ProductGrid({ gridRef }: ProductGridProps) {
  return (
    <div className="productGrid-container">
      {/* Το marker div τοποθετείται στο πάνω μέρος */}
      <div ref={gridRef} style={{ height: "1px" }} />
      {productsData.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.description}
          img={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
}
