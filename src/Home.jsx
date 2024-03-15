import {Link} from "react-router-dom";
import CartItem from "./CartItem.jsx";
import StoreItem from "./StoreItem.jsx";

const items = [
    {
        "id": 1,
        "name": "Apple MacBook Pro",
        "quantity": 1,
        "price": 1999.99,
        "category": "Electronics",
        "imgPath": "https://i.imgur.com/6pPuvNy.jpeg"
    },
    {
        "id": 2,
        "name": "Organic Bananas",
        "quantity": 1,
        "price": 0.99,
        "category": "Groceries",
        "imgPath": "https://i.imgur.com/t461F5Q.jpeg"
    },
    {
        "id": 3,
        "name": "Ceramic Non-Stick Pan Set",
        "quantity": 1,
        "price": 80.50,
        "category": "Kitchenware",
        "imgPath": "https://i.imgur.com/oKch6b6.jpeg"
    },
    {
        "id": 4,
        "name": "LED Desk Lamp",
        "quantity": 1,
        "price": 35.99,
        "category": "Furniture",
        "imgPath": "https://i.imgur.com/0pG1s4w.jpeg"
    },
    {
        "id": 5,
        "name": "Bluetooth Headphones",
        "quantity": 1,
        "price": 89.99,
        "category": "Electronics",
        "imgPath": "https://i.imgur.com/1XinWqj.jpeg"
    },
    {
        "id": 6,
        "name": "Organic Green Tea",
        "quantity": 1,
        "price": 4.99,
        "category": "Groceries",
        "imgPath": "https://i.imgur.com/lZYJFeA.jpeg"
    },
    {
        "id": 7,
        "name": "Yoga Mat",
        "quantity": 1,
        "price": 25.00,
        "category": "Sports",
        "imgPath": "https://i.imgur.com/kx6nqcS.jpeg"
    },
    {
        "id": 8,
        "name": "Stainless Steel Water Bottle",
        "quantity": 1,
        "price": 15.99,
        "category": "Sports",
        "imgPath": "https://i.imgur.com/dIySOUx.jpeg"
    },
    {
        "id": 9,
        "name": "Novel: 'The Great Gatsby'",
        "quantity": 1,
        "price": 9.99,
        "category": "Books",
        "imgPath": "https://i.imgur.com/a4xK36D.jpeg"
    },
    {
        "id": 10,
        "name": "4K HDR Monitor",
        "quantity": 1,
        "price": 349.99,
        "category": "Electronics",
        "imgPath": "https://i.imgur.com/B4kQvcV.jpeg"
    }
]
function Home() {
    return (
        <div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {items.map(item => <StoreItem item={item} key={item.id}/> )}
            </div>
        </div>
    );
}

export default Home;