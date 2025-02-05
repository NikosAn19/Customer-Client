import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router/dom";
import GlobalLayout from "./Global/GlobalLayouts/GlobalLayout.tsx";
import { createBrowserRouter } from "react-router";
import MainPage from "./Pages/MainPage/MainPage.tsx";
import CategoryProductsPage from "./Pages/CategoryProductsPage/CategoryProductsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <GlobalLayout>
        <MainPage />
      </GlobalLayout>
    ),
    errorElement: <div> ERROR 404 PAGE NOT FOUND</div>,
  },
  {
    path: "/category-products",
    element: (
      <GlobalLayout>
        <CategoryProductsPage />
      </GlobalLayout>
    ),
  },
]);
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
