import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import CatogoryNews from "../Pages/CatogoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Authlayout from "../layouts/Authlayout";

const router = createBrowserRouter(
    [
        {
            path:'/',
            element: <HomeLayout></HomeLayout>,
            children:[
                {
                    path : "",
                    element:<Home></Home>
                },
                {
                    path : "/category/:id",
                    element:<CatogoryNews></CatogoryNews>,
                    loader: ()=> fetch("/news.json"),
                },

            ],
        },
        {
            path: "/auth",
            element: <Authlayout></Authlayout>,
            children:[
                {
                    path:"/auth/login",
                    element:<Login></Login>
                },
                {
                    path:"/auth/register",
                    element:<Register></Register>
                },
            ],

        },
        
        {
            path: "/news",
            element: <h2>News layout</h2>,

        },
        {
            path: "/error",
            element: <h2>error 404</h2>,

        },

    ]
);
export default router;