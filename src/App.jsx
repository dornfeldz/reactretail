import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AppLayout from "./AppLayout.jsx";
import Cart from "./Cart.jsx";
import Home from "./Home.jsx";

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