import { createBrowserRouter, RouterProvider } from "react-router";
import Shopping from "../pages/Shopping";
import Form from "../pages/Form";
import LocalUserSearch from "../pages/Search";
import Toggle from "../pages/Toggle";
import ImageSlide from "../pages/ImageSlide";


const routers = createBrowserRouter([
    {
        path:"/", element : <Form/>
    },
    {
        path:"/cart",element: <Shopping/>
    },
    {
        path:"/search",element: <LocalUserSearch/>
    },
    {
        path:"/image",element: <ImageSlide/>
    },
    {
        path:"/toggle",element: <Toggle/>
    },
])

const AppRouter =()=>{
    return(
        <div>
            <RouterProvider router= {routers}/>
        </div>
    )
}

export default AppRouter;
