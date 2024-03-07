import {Outlet} from "react-router";
import Header from "./Header.jsx";
import {createContext, useState,} from "react";

//Create new context
export let Context = createContext();

function AppLayout() {
    const [cartItems, setCartItems] = useState([]);
    const [storeItems, setStoreItems] = useState([]);
    const [quantity, setQuantity] = useState(1)


    return (
        //2: Provide value to child components
        <Context.Provider value={{cartItems, setCartItems, storeItems, setStoreItems, quantity, setQuantity}}>
            <div>
                <Header/>
                <Outlet/>
            </div>
        </Context.Provider>
    );
}

export default AppLayout;