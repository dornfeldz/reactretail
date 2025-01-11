import {Link} from "react-router-dom";
import {useContext} from "react";
import {Context} from "./AppLayout.jsx";
import { HiOutlineShoppingCart } from "react-icons/hi2";

function Header() {
    const {cartItems} = useContext(Context);

    return (
        <div className="sticky top-0 z-50 flex justify-between w-full px-5 py-4 mb-6 bg-yellow-300">
            <Link to="/">
                <h1 className="text-xl font-bold">ReactRetail</h1>
            </Link>
            <div className="relative">
                <Link to="/cart">
                    <HiOutlineShoppingCart/>
                </Link>
                {cartItems.length > 0 && <p className="absolute px-2 py-1 text-xs font-bold text-yellow-300 bg-black rounded-full bottom-4 left-3">{cartItems.length}</p>}
            </div>
        </div>
    );
}

export default Header;