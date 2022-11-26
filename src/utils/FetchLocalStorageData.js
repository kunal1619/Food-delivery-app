export const fetchUser = () =>{
    const userInfo = localStorage.getItem("user") !== "undefined" ? JSON.parse(localStorage.getItem("user")) : localStorage.clear();

    
    return userInfo;

}
//agar koi user rha toh uski information milegi other wise null, intial state ko pass kr denge taki refresh karne pe page reload na ho hamne local storage me user ki value store kr lii hai


export const fetchCart = () =>{
    const cartInfo = localStorage.getItem("cartItems") !== "undefined" ? JSON.parse(localStorage.getItem("cartItems")) : localStorage.clear();

    
    return cartInfo ? cartInfo : [];

}
//here we store cart data to local storage so that if someone refresh cart information will not empty

