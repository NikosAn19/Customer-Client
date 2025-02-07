import React, { createContext, useState, ReactNode, useContext } from "react";

export type Product = {
  img: string;
  title: string;
  description: string;
  price: number;
};

type ProductContextType = {
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product) => void;
};

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);

export const useProductContext = () => {
  const context = useContext(ProductContext);

  if (context === undefined) {
    throw new Error("OrderContext is undefined");
  }

  return context;
};

type ProductProviderProps = {
  children: ReactNode;
};

export const ProductProvider: React.FC<ProductProviderProps> = ({
  children,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <ProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
