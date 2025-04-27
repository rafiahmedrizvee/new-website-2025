import { createBrowserRouter } from "react-router";
import Home from "../../Pages/Home/Home";
import Main from "../../Layout/Main";
import AboutUs from "../../Pages/About Us/About";
import Contact from "../../Pages/Contact/Contact";
import Blog from "../../Pages/Blog/Blog";
import NotFound from "../../Pages/Shared/Not Found/NotFound";


const router = createBrowserRouter([
        {
             path:"/",
             element:<Main/>,  
             children:[
                {
                        path:"/",
                        element:<Home/>
                },
                {
                        path:"/home",
                        element:<Home/>
                },
                {
                        path:"/about",
                        element:<AboutUs/>
                },
                {
                        path:"/blog",
                        element:<Blog/>
                },
                {
                        path:"/contact",
                        element:<Contact/>
                },
             ],
        },
        {
                path:"*",
                element:<NotFound/>
        }
]);

export default router;