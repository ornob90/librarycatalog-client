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
import UpdateBook from "../pages/UpdateBook/UpdateBook";
import Error from "../pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
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
          <PrivateRoute>
            <AdminRoute>
              <AllBooks />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-book",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AddBook />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-book/:id",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <UpdateBook />
            </AdminRoute>
          </PrivateRoute>
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
