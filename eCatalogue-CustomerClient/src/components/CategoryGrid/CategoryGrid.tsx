import CategoryCard from "../CategoryCard/CategoryCard";
import "./CategoryGrid.css";

// Δείγμα δεδομένων. Θα μπορούσαν να έρχονται κι από API.
import appetizers from "../../assets/Menu Images/appetizers.jpg";
import pizza from "../../assets/Menu Images/pizza.jpg";
import coffee from "../../assets/Menu Images/coffee.jpeg";
import softDrinks from "../../assets/Menu Images/soft-drinks.jpg";

const categoriesData = [
  { id: 1, name: "Appetizers", image: appetizers, items: 11 },
  { id: 2, name: "Pizza", image: pizza, items: 8 },
  { id: 3, name: "Coffee", image: coffee, items: 5 },
  { id: 4, name: "Soft Drinks", image: softDrinks, items: 5 },
  // ... όσες κατηγορίες θες
];

export default function CategoryGrid() {
  return (
    <div className="categoryGrid-container">
      {categoriesData.map((category) => (
        <CategoryCard
          key={category.id}
          name={category.name}
          image={category.image}
          items={category.items}
        />
      ))}
    </div>
  );
}
