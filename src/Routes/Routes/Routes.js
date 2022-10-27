import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../../components/AboutUs/AboutUs";
import Blog from "../../components/Blog/Blog";
import Courses from "../../components/Courses/Courses";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import FAQ from "../../components/FAQ/FAQ";
import Home from "../../components/Home/Home";
import LogIn from "../../components/LogIn/LogIn";
import Profile from "../../components/Profile/Profile";
import Register from "../../components/Register/Register";
import CoursesLayout from "../../layouts/CoursesLayout";
import Main from "../../layouts/Main";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Tutorials from "../../components/Tutorials/Tutorials";
import CourseDetail from "../../components/CourseDetail/CourseDetail";
import Checkout from "../../components/Checkout/Checkout";

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
                path: '/tutorialCategories',
                element: <CoursesLayout></CoursesLayout>,
                children: [
                    {
                        path: '/tutorialCategories',
                        element: <Courses></Courses>,
                        loader: () => fetch('https://tutorial-academy-server-fahimahmedkhan.vercel.app/tutorialCategories'),
                    },
                    {
                        path: '/tutorialCategories/:id',
                        element: <Tutorials></Tutorials>,
                        loader: ({ params }) => fetch(`https://tutorial-academy-server-fahimahmedkhan.vercel.app/tutorialCategories/${params.id}`)
                    }
                ]
            },
            {
                path: '/tutorial/:id',
                element: <CourseDetail></CourseDetail>,
                loader: ({ params }) => fetch(`https://tutorial-academy-server-fahimahmedkhan.vercel.app/tutorial/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://tutorial-academy-server-fahimahmedkhan.vercel.app/tutorial/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
            }
        ]
    }
])