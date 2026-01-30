import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Board from "./pages/Board/ index";
import RootLayout from "./layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/:slug",
        element: <Board />,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
