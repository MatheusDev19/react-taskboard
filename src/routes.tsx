import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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

export function AppRouter() {
  return <RouterProvider router={router} />;
}
