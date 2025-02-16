import CategoryCard from "../CategoryCard/CategoryCard";
import "./CategoryGrid.css";
import { useNavigate } from "react-router-dom";

// Δείγμα δεδομένων. Θα μπορούσαν να έρχονται κι από API.
import appetizers from "../../assets/MenuImages/appetizers.jpg";
import pizza from "../../assets/MenuImages/pizza.jpg";
import coffee from "../../assets/MenuImages/coffee.jpeg";
import softDrinks from "../../assets/MenuImages/soft-drinks.jpg";

const categoriesData = [
  { id: 1, name: "Appetizers", image: appetizers, items: 11 },
  { id: 2, name: "Pizza", image: pizza, items: 8 },
  { id: 3, name: "Coffee", image: coffee, items: 5 },
  { id: 4, name: "Soft Drinks", image: softDrinks, items: 5 },
  // ... όσες κατηγορίες θες
];

export default function CategoryGrid() {
  const navigate = useNavigate();

  const handleNavigate = (category: string) => {
    // Κάνουμε navigate στο route "/category-products" και περνάμε το category name στο state
    navigate("/category-products", { state: { categoryName: category } });
  };
  return (
    <div className="categoryGrid-container">
      {categoriesData.map((category) => (
        <CategoryCard
          key={category.id}
          name={category.name}
          image={category.image}
          items={category.items}
          onClick={() => handleNavigate(category.name)}
        />
      ))}
    </div>
  );
}
