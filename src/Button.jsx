import {useContext} from "react";
import {Context} from "./AppLayout.jsx";

function Button() {

    const {count, setCount} = useContext(Context);

    return (
        <button onClick={() => setCount(currentCount++)}>
          {count}
        </button>
    );
}

export default Button;