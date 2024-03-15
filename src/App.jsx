import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AppLayout from "./AppLayout.jsx";
import Cart from "./Cart.jsx";
import Home from "./Home.jsx";
import NotFound from "./NotFound.jsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppLayout/>,
            children:[
                {
                    path:"/cart",
                    element: <Cart/>
                },
                {
                    path:"/",
                    element: <Home/>
                },
                {
                    path:"*",
                    element: <NotFound/>
                }
            ]
        }
    ]
);

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;