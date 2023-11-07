import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import BookByCategory from "../pages/BookByCategory.jsx/BookByCategory";
import BookDetail from "../pages/BookDetail/BookDetail";
import Borrowed from "../pages/Borrowed/Borrowed";
import AllBooks from "../pages/AllBooks/AllBooks";
import AddBook from "../pages/AddBook/AddBook";
import Read from "../pages/Read/Read";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

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
        element: (
          <PrivateRoute>
            <BookByCategory />
          </PrivateRoute>
        ),
      },
      {
        path: "/book/:id",
        element: (
          <PrivateRoute>
            <BookDetail />
          </PrivateRoute>
        ),
      },
      {
        path: "/borrowed",
        element: (
          <PrivateRoute>
            <Borrowed />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-books",
        element: (
          <AdminRoute>
            <AllBooks />
          </AdminRoute>
        ),
      },
      {
        path: "/add-book",
        element: (
          <AdminRoute>
            <AddBook />
          </AdminRoute>
        ),
      },
      {
        path: "/read/:id",
        element: (
          <PrivateRoute>
            <Read />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
