import {useContext} from "react";
import {Context} from "./AppLayout.jsx";

function StoreItem({item}) {
    const {cartItems, setCartItems} = useContext(Context);
    const {quantity, setQuantity} = useContext(Context);

    function decreaseQuantity(item) {
        if(item.quantity > 1){
            const newQuantity = item.quantity - 1;
            setQuantity(newQuantity);
            item.quantity = newQuantity;
            return item.quantity;
        }

    }

    function increaseQuantity(item) {
        const newQuantity = item.quantity + 1;
        setQuantity(newQuantity);
        item.quantity = newQuantity;
        return item.quantity;
    }

  return (
      <div className="border">
          <p>{item.name}</p>
          <button onClick={()=>decreaseQuantity(item)}>-</button>
          <p>Quantity: {item.quantity}</p>
          <button onClick={()=>increaseQuantity(item)}>+</button>
          <p>Price: {item.price}</p>
          <p>Total price {item.price * item.quantity}</p>
          <button onClick={() => setCartItems([...cartItems, item])}>Add to cart</button>
      </div>
  );
}

export default StoreItem;