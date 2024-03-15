import {useContext} from "react";
import {Context} from "./AppLayout.jsx";
import CartItem from "./CartItem.jsx";
import {Link} from "react-router-dom";


function Cart() {
    const {cartItems} = useContext(Context);

    return (
        <div className="h-full min-h-screen">
            <Link to="/" className="underline underline-offset-[3px] px-5 text-blue-700">&larr; Home</Link>
            {cartItems.length > 0 ? <div className=" mt-6 max-w-[60rem] grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {cartItems.map(item => <CartItem item={item} key={item.id}/>)}
            </div> : <h2 className="font-semibold text-2xl text-center mt-16">Your Cart is empty!</h2> }
        </div>
    );
}

export default Cart;