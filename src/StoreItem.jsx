import {useContext} from "react";
import {Context} from "./AppLayout.jsx";

function StoreItem({item}) {
    const {cartItems, setCartItems} = useContext(Context);

  return (
      <div className="border">
        <p>{item.name}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Price: {item.price}</p>
        <p>Total price {item.price * item.quantity}</p>
        <button onClick={() => setCartItems([...cartItems, item])}>Add to cart</button>
      </div>
  );
}

export default StoreItem;