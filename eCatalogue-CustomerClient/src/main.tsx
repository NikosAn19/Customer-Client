import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router/dom";
import GlobalLayout from "./Global/GlobalLayouts/GlobalLayout.tsx";
import { createBrowserRouter } from "react-router";
import MainPage from "./Pages/MainPage/MainPage.tsx";
import CategoryProductsPage from "./Pages/CategoryProductsPage/CategoryProductsPage.tsx";
import SingleProductPage from "./Pages/SingleProductPage/SingleProductPage.tsx";
import { ProductProvider } from "./Context/ProductContext.tsx";
import CartPage from "./Pages/CartPage/CartPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProductProvider>
        <GlobalLayout>
          <MainPage />
        </GlobalLayout>
      </ProductProvider>
    ),
    errorElement: <div> ERROR 404 PAGE NOT FOUND</div>,
  },
  {
    path: "/category-products",
    element: (
      <ProductProvider>
        <GlobalLayout>
          <CategoryProductsPage />
        </GlobalLayout>
      </ProductProvider>
    ),
  },
  {
    path: "/single-product",
    element: (
      <ProductProvider>
        <GlobalLayout>
          <SingleProductPage />
        </GlobalLayout>
      </ProductProvider>
    ),
  },
  {
    path: "/cart",
    element: (
      <ProductProvider>
        <GlobalLayout>
          <CartPage />
        </GlobalLayout>
      </ProductProvider>
    ),
  },
]);
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
