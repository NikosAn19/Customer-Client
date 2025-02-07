import "./ProductMenuHeader.css";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
  headerCategoryTitle: string;
  headerOpacity: number;
  headerRef: React.RefObject<HTMLDivElement>;
};
export default function ProductMenuHeader({
  headerOpacity,
  headerRef,
  headerCategoryTitle,
}: HeaderProps) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    // Μεταβαίνεις στην αρχική σελίδα (ή σε όποιο route επιθυμείς)
    navigate("/");
  };
  return (
    <div className="category-wrapper" ref={headerRef}>
      <div className="category-topbar">
        <button onClick={handleBackClick} className="backButton">
          ←
        </button>
      </div>
      <span
        style={{
          opacity: headerOpacity,

          display: "block",
          padding: "10px",
        }}
        id="category-name"
      >
        {headerCategoryTitle}
      </span>
    </div>
  );
}
