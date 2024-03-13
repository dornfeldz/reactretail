import {Link} from "react-router-dom";
import {useContext} from "react";
import {Context} from "./AppLayout.jsx";

function Header() {
    const {cartItems} = useContext(Context);

    return (
        <div className="flex justify-between px-5 py-4 bg-yellow-300 mb-6">
            <Link to="/">
                <h1 className="font-bold text-xl">Ecommerce Store</h1>
            </Link>
            <div className="relative">
                <Link to="/cart">
                    <img src="https://i.imgur.com/mAaNh2a.png" alt="shopping cart" className=""/>
                </Link>
                {cartItems.length > 0 && <p className="absolute bottom-4 left-3 text-yellow-300 bg-black text-xs px-2 py-1 rounded-full font-bold">{cartItems.length}</p>}
            </div>
        </div>
    );
}

export default Header;