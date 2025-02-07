import { useEffect, useRef, useState } from "react";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import ProductMenuHeader from "../../components/ProductMenuHeader/ProductMenuHeader";
import "./CategoryProductsPage.css";
import { useLocation } from "react-router-dom";

export default function CategoryProductsPage() {
  // Ανάκτηση του state από το useLocation
  const location = useLocation();
  // Εξασφαλίζουμε ότι υπάρχει το state, με fallback κενή τιμή αν δεν υπάρχει
  const category = location.state?.categoryName || "Default Category";
  const [headerOpacity, setHeaderOpacity] = useState(1);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current && gridRef.current) {
        const headerRect = headerRef.current.getBoundingClientRect();
        const gridRect = gridRef.current.getBoundingClientRect();

        // Έλεγχος: αν το κάτω μέρος του header είναι πάνω ή ίσο του πάνω μέρους του grid,
        // τότε θεωρούμε ότι το grid "αγγίγει" το header.
        if (headerRect.bottom >= gridRect.top) {
          setHeaderOpacity(0);
        } else {
          setHeaderOpacity(1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <ProductMenuHeader
        headerCategoryTitle={category}
        headerOpacity={headerOpacity}
        headerRef={headerRef}
      />
      <ProductGrid gridRef={gridRef} />
    </>
  );
}
