import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import CatogoryNews from "../Pages/CatogoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Authlayout from "../layouts/Authlayout";
import NewsDatils from "../Pages/NewsDatils";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../Pages/Loading";

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
                    hydrateFallbackElement:<Loading></Loading>,
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
            path: "/news-details/:id",
            element:(<PrivateRoute>
                <NewsDatils></NewsDatils>
            </PrivateRoute>
            ),
              loader: ()=> fetch("/news.json"),
               hydrateFallbackElement:<Loading></Loading>,
        },
        {
            path: "/error",
            element: <h2>error 404</h2>,

        },

    ]
);
export default router;