
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layout/Main/homeLayout';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ErrorElement from '../pages/ErrorPage/ErrorElement';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../pages/Dashboard/Dashboard';

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      errorElement : <ErrorElement></ErrorElement>,
      children : [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element : <Register></Register>
        },
        {
          path: "/dashboard",
          element : <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        }
      ]
    },
  ]);

export default router;