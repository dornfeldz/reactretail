import {Outlet} from "react-router";
import Header from "./Header.jsx";
import {createContext, useState,} from "react";

//Create new context
export let Context = createContext();

function AppLayout() {
    const [count, setCount] = useState(1);
    const [cartItems, setCartItems] = useState([]);

    return (
        //2: Provide value to child components
        <Context.Provider value={{count, setCount, cartItems, setCartItems}}>
            <div>
                <Header/>
                <Outlet/>
                {count}
            </div>
        </Context.Provider>
    );
}

export default AppLayout;