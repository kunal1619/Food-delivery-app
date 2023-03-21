import { fetchCart, fetchUser } from "../utils/FetchLocalStorageData"

const userInfo = fetchUser();
const cartInfo = fetchCart();

const initialState = {
    user : userInfo,
    foodItems : null,
    cartShow : false,
    cartItems : cartInfo
};

export default initialState;