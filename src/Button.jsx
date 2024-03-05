import {useContext} from "react";
import {Context} from "./AppLayout.jsx";

function Button() {

    const {count, setCount} = useContext(Context);

    return (
        <button onClick={() => setCount(count + 1)} className="border px-5">
          {count}
        </button>
    );
}

export default Button;