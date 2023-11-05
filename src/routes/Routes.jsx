import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import BookByCategory from "../pages/BookByCategory.jsx/BookByCategory";
import BookDetail from "../pages/BookDetail/BookDetail";
import Borrowed from "../pages/Borrowed/Borrowed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/books/:category",
        element: <BookByCategory />,
      },
      {
        path: "/book/:id",
        element: <BookDetail />,
      },
      {
        path: "/borrowed",
        element: <Borrowed />,
      },
    ],
  },
]);

export default router;
