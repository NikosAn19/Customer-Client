import "./CategoryCard.css";

type CategoryCardProps = {
  name: string;
  image: string;
  items: number;
  onClick: () => void;
};
export default function CategoryCard({
  name,
  image,
  items,
  onClick,
}: CategoryCardProps) {
  return (
    <>
      <div className="categoryCard-container" onClick={onClick}>
        <img className="category-img" src={image} alt="appetizers"></img>

        <span className="category-name">{name}</span>
        <span className="category-items-number">{items} items</span>
      </div>
    </>
  );
}
