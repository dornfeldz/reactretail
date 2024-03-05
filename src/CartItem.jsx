import {Link} from "react-router-dom";
import {useContext} from "react";
import {Context} from "./AppLayout.jsx";

function CartItem({item}) {

    const {cartItems, setCartItems} = useContext(Context);

    function deleteItem(itemToDelete){
        const newCartItems = cartItems.filter(item => item !== itemToDelete)

        setCartItems(newCartItems)
    }

    return (
        <div>
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: {item.price}</p>
            <p>Total price {item.price * item.quantity}</p>
            <button onClick={()=> deleteItem(item)} >Delete item</button>
            <button onClick={() => setCartItems([...cartItems, item])}>Add to cart</button>
            <p>---------------------------------</p>
        </div>
    );
}

export default CartItem;