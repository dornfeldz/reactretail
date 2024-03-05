import {Link} from "react-router-dom";
import CartItem from "./CartItem.jsx";

const items = [
    {
        "id": 1,
        "name": "Apple MacBook Pro",
        "quantity": 1,
        "price": 1999.99,
        "category": "Electronics"
    },
    {
        "id": 2,
        "name": "Organic Bananas",
        "quantity": 2,
        "price": 0.99,
        "category": "Groceries"
    },
    {
        "id": 3,
        "name": "Ceramic Non-Stick Pan Set",
        "quantity": 1,
        "price": 80.50,
        "category": "Kitchenware"
    },
    {
        "id": 4,
        "name": "LED Desk Lamp",
        "quantity": 1,
        "price": 35.99,
        "category": "Furniture"
    },
    {
        "id": 5,
        "name": "Bluetooth Headphones",
        "quantity": 1,
        "price": 89.99,
        "category": "Electronics"
    },
    {
        "id": 6,
        "name": "Organic Green Tea",
        "quantity": 4,
        "price": 4.99,
        "category": "Groceries"
    },
    {
        "id": 7,
        "name": "Yoga Mat",
        "quantity": 1,
        "price": 25.00,
        "category": "Sports"
    },
    {
        "id": 8,
        "name": "Stainless Steel Water Bottle",
        "quantity": 2,
        "price": 15.99,
        "category": "Sports"
    },
    {
        "id": 9,
        "name": "Novel: 'The Great Gatsby'",
        "quantity": 1,
        "price": 9.99,
        "category": "Books"
    },
    {
        "id": 10,
        "name": "4K HDR Monitor",
        "quantity": 1,
        "price": 349.99,
        "category": "Electronics"
    }
]
function Home() {
    return (
        <div>
            Home
             <Link to="/cart">To cart</Link>
            {items.map(item => <CartItem item={item} key={item.id}/> )}
        </div>
    );
}

export default Home;