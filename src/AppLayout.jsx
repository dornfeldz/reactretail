import {Outlet} from "react-router";
import Header from "./Header.jsx";
import {createContext, useState,} from "react";
import Footer from "./Footer.jsx";

export const Context = createContext();

function AppLayout() {
    const [cartItems, setCartItems] = useState([]);
    const [storeItems, setStoreItems] = useState([]);
    const [quantity, setQuantity] = useState(1)


    return (
        <Context.Provider value={{cartItems, setCartItems, storeItems, setStoreItems, quantity, setQuantity}}>
            <div className="appLayout">
                    <Header/>
                <div className="md:w-[50rem] lg:w-[55rem] xl:w-[78rem] m-[0_auto] justify-center">
                    <Outlet/>
                </div>
                <Footer/>
            </div>
        </Context.Provider>
    );
}

export default AppLayout;