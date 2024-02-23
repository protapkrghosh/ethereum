import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Connect from "@/SectionComs/Connect/Connect";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/connect',
        element: <Connect />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);
