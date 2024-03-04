import {Outlet} from "react-router";
import Header from "./Header.jsx";
import {createContext, useState,} from "react";

//Create new context
export let Context = createContext();

function AppLayout() {
    let [count, setCount] = useState(1);

    return (
        //2: Provide value to child components
        <Context.Provider value={{count, setCount}}>
            <div>
                <Header/>
                <Outlet/>
                {count}
            </div>
        </Context.Provider>
    );
}

export default AppLayout;