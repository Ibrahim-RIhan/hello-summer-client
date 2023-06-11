
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layout/Main/homeLayout';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ErrorElement from '../pages/ErrorPage/ErrorElement';
import PrivateRoute from './PrivateRoute';
import Instructors from '../pages/Instructors/Instructors';
import Classes from '../pages/Classes/Classes';
import Dashboard from '../layout/Dashboard/Dashboard';
import ManageUser from '../pages/Dashboard/Admin/ManageUser';
import AddClass from '../pages/Dashboard/Instructor/AddClass';
import ManageClasses from '../pages/Dashboard/Admin/ManageClasses';
import MyClasses from '../pages/Dashboard/Instructor/MyClasses';
import MyClasses from '../pages/Dashboard/Instructor/MyClasses';
import MySelectedClass from '../pages/Dashboard/Student/mySelectedClass';

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
          path: "/instructors",
          element : <Instructors></Instructors>
        },
        {
          path: "/classes",
          element : <Classes></Classes>
        },
       
      ]
    },
    {
      path : 'dashboard',
      element : <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      errorElement : <ErrorElement></ErrorElement>,
      children : [
        {
          path: 'dashboard/manageUser',
          element : <ManageUser></ManageUser>
        },
        {
          path: 'dashboard/manageClasses',
          element : <ManageClasses></ManageClasses>
        },
        {
          path: 'dashboard/addClass',
          element : <AddClass></AddClass>
        },
        {
          path: 'dashboard/myClass',
          element : <MyClasses></MyClasses>
        },
        {
          path: 'dashboard/selectedClass',
          element : <MySelectedClass></MySelectedClass>
        },
      ]
    }
  ]);

export default router;