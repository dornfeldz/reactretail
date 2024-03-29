import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className="mt-16 px-10 py-6 w-full bg-yellow-300 h-48">
            <div className="grid grid-cols-2 gap-6">
                <h2 className="text-xl font-bold">ReactRetail</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 font-medium">
                    <Link className="mb-6" to="/">Home</Link>
                    <Link to="/cart">Cart</Link>
                    <Link className="mb-6" to="/contact">Contact</Link>
                    <Link to="/career">Career</Link>
                    <Link to="https://github.com/lilxoli/ecommerce" target="_blank">GitHub</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;