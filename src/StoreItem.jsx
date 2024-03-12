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
      <div className="border p-3 flex flex-col gap-3 rounded-xl">
          <p className="font-bold text-xl">{item.name}</p>
          <div className="h-32 overflow-hidden relative inline-block">
              <img className="w-[auto] h-[100%] border border-black rounded-md" src={item.imgPath} alt={item.name}/>
          </div>
          <div className="flex">
              <p className="w-48">Price: <span className="font-semibold">${item.price}</span></p>
              {item.quantity > 1 ?
                  <p className="mr-3">Total price:<span className="font-bold">{` $${(item.price * item.quantity).toFixed(2)}`}</span></p> :""}

          </div>
          <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
                  <button className="bg-yellow-300 w-7 h-7 rounded-full font-semibold hover:bg-yellow-400 transition duration-300 active:bg-yellow-700" onClick={() => decreaseQuantity(item)}>-</button>
                  <p>Quantity: <span className="font-bold">{item.quantity}</span></p>
                  <button className="bg-yellow-300 w-7 h-7 rounded-full font-semibold hover:bg-yellow-400 transition duration-300 active:bg-yellow-700" onClick={() => increaseQuantity(item)}>+</button>
              </div>
              <button className="bg-yellow-300 px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition duration-300 active:bg-yellow-700" onClick={() => setCartItems([...cartItems, item])}>Add to cart</button>
          </div>
      </div>
  );
}

export default StoreItem;