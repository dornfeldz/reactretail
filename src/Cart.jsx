import {useContext} from "react";
import {Context} from "./AppLayout.jsx";

function Cart() {

    const {count} = useContext(Context);

    return (
        <div>
            <p>CART:</p>
            <p>Cart :{count}</p>
        </div>
    );
}

export default Cart;