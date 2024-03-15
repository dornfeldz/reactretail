import {useContext} from "react";
import {Context} from "./AppLayout.jsx";

function CartItem({item}) {

    const {cartItems, setCartItems} = useContext(Context);

    function deleteItem(itemToDelete){
        const newCartItems = cartItems.filter(item => item !== itemToDelete)

        setCartItems(newCartItems)
    }

    return (
        <div className="scale-90 sm:scale-100 border p-3 flex flex-col gap-3 rounded-xl">
            <p className="font-bold text-xl">{item.name}</p>
            <div className="h-32 overflow-hidden relative inline-block">
                <img className="w-[auto] h-[100%] border border-black rounded-md" src={item.imgPath} alt={item.name}/>
            </div>
            <p>Quantity: <span className="font-bold">{item.quantity}</span></p>
            <p className="w-48">Price: <span className="font-bold">{`$${item.price}`}</span></p>
            <p>Total price: <span className="font-bold">{`$${(item.price * item.quantity).toFixed(2)}`}</span></p>
            <div className="space-x-3">
                <button onClick={() => deleteItem(item)}
                        className="bg-yellow-300 px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition duration-300 active:bg-yellow-700">Delete item
                </button>
            </div>
        </div>
    );
}

export default CartItem;