import {Outlet} from "react-router";
import Header from "./Header.jsx";
import {createContext, useState,} from "react";
import Footer from "./Footer.jsx";

//1: Create new context
export const Context = createContext();

function AppLayout() {
    const [cartItems, setCartItems] = useState([]);
    const [storeItems, setStoreItems] = useState([]);
    const [quantity, setQuantity] = useState(1)


    return (
        //2: Provide value to child components
        <Context.Provider value={{cartItems, setCartItems, storeItems, setStoreItems, quantity, setQuantity}}>
            <div>
                <Header/>
                <div className="w-[76rem] m-[0_auto] justify-center">
                    <Outlet/>
                </div>
                <Footer/>
            </div>
        </Context.Provider>
    );
}

export default AppLayout;