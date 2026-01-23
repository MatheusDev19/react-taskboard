import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/main/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/software-engineer",
        element: <div>Software Engineer Page</div>,
      },
      {
        path: "/requisition-engineer",
        element: <div>Requisition Engineer Page</div>,
      },
    ],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
