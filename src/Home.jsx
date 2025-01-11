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
        "imgPath": "https://res.cloudinary.com/duucjutx3/image/upload/v1736624555/react%20retail/l7jpe9gfke2vxz0txej5.jpg"
    },
    {
        "id": 2,
        "name": "Organic Bananas",
        "quantity": 1,
        "price": 0.99,
        "category": "Groceries",
        "imgPath": "https://res.cloudinary.com/duucjutx3/image/upload/v1736624555/react%20retail/zr2ql3qsuajosfhwr2aq.jpg"
    },
    {
        "id": 3,
        "name": "Ceramic Non-Stick Pan Set",
        "quantity": 1,
        "price": 80.50,
        "category": "Kitchenware",
        "imgPath": "https://res.cloudinary.com/duucjutx3/image/upload/v1736624555/react%20retail/d3qotcico6pjy82q7qdp.jpg"
    },
    {
        "id": 4,
        "name": "LED Desk Lamp",
        "quantity": 1,
        "price": 35.99,
        "category": "Furniture",
        "imgPath": "https://res.cloudinary.com/duucjutx3/image/upload/v1736625137/react%20retail/rydi4whkkiy2iqzemqx2.jpg"
    },
    {
        "id": 5,
        "name": "Bluetooth Headphones",
        "quantity": 1,
        "price": 89.99,
        "category": "Electronics",
        "imgPath": "https://res.cloudinary.com/duucjutx3/image/upload/v1736624555/react%20retail/bz6hhexcqvxat2tqhpgo.jpg"
    },
    {
        "id": 6,
        "name": "Organic Green Tea",
        "quantity": 1,
        "price": 4.99,
        "category": "Groceries",
        "imgPath": "https://res.cloudinary.com/duucjutx3/image/upload/v1736625137/react%20retail/poplotkpfqcpsdgwnjlu.jpg"
    },
    {
        "id": 7,
        "name": "Yoga Mat",
        "quantity": 1,
        "price": 25.00,
        "category": "Sports",
        "imgPath": "https://res.cloudinary.com/duucjutx3/image/upload/v1736624555/react%20retail/emcoywsc36bmqr8tkt3x.jpg"
    },
    {
        "id": 8,
        "name": "Stainless Steel Water Bottle",
        "quantity": 1,
        "price": 15.99,
        "category": "Sports",
        "imgPath": "https://res.cloudinary.com/duucjutx3/image/upload/v1736625137/react%20retail/ay6diytdgqko1ay2ctnl.jpg"
    },
    {
        "id": 9,
        "name": "Novel: 'The Great Gatsby'",
        "quantity": 1,
        "price": 9.99,
        "category": "Books",
        "imgPath": "https://res.cloudinary.com/duucjutx3/image/upload/v1736624555/react%20retail/pxuyrs2u6pcjkalz0ge7.jpg"
    },
    {
        "id": 10,
        "name": "4K HDR Monitor",
        "quantity": 1,
        "price": 349.99,
        "category": "Electronics",
        "imgPath": "https://res.cloudinary.com/duucjutx3/image/upload/v1736625137/react%20retail/zt2dyqjp6yyvkaxe74xx.jpg"
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