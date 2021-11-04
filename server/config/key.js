import prod from "./prod";
import dev from "./dev.js";

const GetKey = () => {
    if (process.env.NODE_ENV === "production") {
        return prod;
    } else {
        return dev;
    }
}

export default GetKey();