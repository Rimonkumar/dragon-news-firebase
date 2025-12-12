import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import CatogoryNews from "../Pages/CatogoryNews";

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
            element: <h2>Authentication layout</h2>,

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