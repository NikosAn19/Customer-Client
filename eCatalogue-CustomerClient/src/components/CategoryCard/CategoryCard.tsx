import "./CategoryCard.css";

type CategoryCardProps = {
  name: string;
  image: string;
  items: number;
};
export default function CategoryCard({
  name,
  image,
  items,
}: CategoryCardProps) {
  return (
    <>
      <div className="categoryCard-container">
        <img className="category-img" src={image} alt="appetizers"></img>

        <span className="category-name">{name}</span>
        <span className="category-items-number">{items} items</span>
      </div>
    </>
  );
}
