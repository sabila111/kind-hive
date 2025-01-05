import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/home/Home";
import Error from "../eroor/Error";
import AllVolunteer from "../pages/allVlounteer/AllVolunteer";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddVolunteer from "../pages/addVolunteer/AddVolunteer";
import PrivateRoute from "../privateRoute/PrivateRoute";
import VolunteerNeedDetails from "../pages/details/VolunteerNeedDetails";

    const router = createBrowserRouter([
        {
          path: "/",
          element:<MainLayout></MainLayout>,
          errorElement:<Error></Error>,
          children: [
            {
              path: "/",
              element:<Home></Home> ,
            },
            {
              path: "allVolunteerNeed",
              element:<AllVolunteer></AllVolunteer> ,
            },
            {
              path: "addVolunteerNeed",
              element:<PrivateRoute><AddVolunteer></AddVolunteer></PrivateRoute> ,
            },
            {
              path: "volunteerNeedDetails/:id",
              element:<PrivateRoute> <VolunteerNeedDetails></VolunteerNeedDetails></PrivateRoute> ,
              loader: ({params})=> fetch(`http://localhost:5000/volunteer/${params.id}`)
            },
            {
              path: "/login",
              element:<Login></Login> ,
            },
            {
              path: "/register",
              element:<Register></Register> ,
            },
          ],
        },
      ]);


export default router;