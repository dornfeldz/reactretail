import {useContext} from "react";
import {Context} from "./AppLayout.jsx";

function CartItem({item}) {

    const {cartItems, setCartItems} = useContext(Context);

    function deleteItem(itemToDelete){
        const newCartItems = cartItems.filter(item => item !== itemToDelete)

        setCartItems(newCartItems)
    }

    return (
        <div className="border">
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: {item.price}</p>
            <p>Total price {item.price * item.quantity}</p>
            <div className="space-x-3">
                <button onClick={()=> deleteItem(item)} className="border">Delete item</button>
                <button onClick={() => setCartItems([...cartItems, item])} className="border">Add to cart</button>
            </div>
        </div>
    );
}

export default CartItem;