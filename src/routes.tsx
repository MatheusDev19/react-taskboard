import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout";
import Board from "./pages/Board";

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
