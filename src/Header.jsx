import Button from "./Button.jsx";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="flex justify-between px-5 py-4 bg-yellow-300 mb-6">
            <Link to="/">
                <h1 className="font-bold text-xl">Ecommerce Store</h1>
            </Link>
            <Link to="/cart">
                <img src="https://i.imgur.com/mAaNh2a.png" alt="shopping cart"/>
            </Link>
        </div>
    );
}

export default Header;