import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import BlogDetails from "../Pages/Blog/BlogDetails";
import CourseDetails from "../Pages/Courses/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import PremiumCourseContent from "../Pages/Courses/PremiumCourseContent";
import ErrorPage from "../Pages/ErrorPage";
import FAQ from "../Pages/FAQ";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://teach-me-server.vercel.app/courses')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/faq',
                element: <FAQ />
            },
            {
                path: '/blog',
                element: <Blog />,
                loader: () => fetch('https://teach-me-server.vercel.app/blog')
            },
            {
                path:'/blog/:id',
                element:<BlogDetails />,
                loader: ({params}) => fetch(`https://teach-me-server.vercel.app/blog/${params.id}`)
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://teach-me-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/courses/content/:id',
                element: <PrivateRoute><PremiumCourseContent></PremiumCourseContent></PrivateRoute>,
                loader: ({ params }) => fetch(`https://teach-me-server.vercel.app/courses/${params.id}`)
            }

        ]
    }
])