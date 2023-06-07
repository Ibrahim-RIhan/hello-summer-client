
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layout/Main/homeLayout';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      // errorElement : <ErrorElement></ErrorElement>,
      children : [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        }
      ]
    },
  ]);

export default router;