import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog";
import Courses from "../Pages/Courses";
import FAQ from "../Pages/FAQ";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import Register from "../Pages/Register";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<div>404 not found</div>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'courses',
                element:<Courses></Courses>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/faq',
                element:<FAQ />
            },
            {
                path:'/blog',
                element:<Blog />
            },
            {
                path:'/profile',
                element:<Profile />
            }

        ]
    }
])