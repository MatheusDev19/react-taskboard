import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/main/main";
import Board from "../pages/Board/board";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/:slug",
        element: <Board />,
      },
    ],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
