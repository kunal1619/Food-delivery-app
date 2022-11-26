import { doc,getDocs,query,setDoc } from "firebase/firestore";
import { fireStore } from "../firebase.config";
import { collection, orderBy } from "firebase/firestore";

//Saving the new items
export const saveItem = async (data) =>{
    await setDoc(doc(fireStore, "foodItems", `${Date.now()}`), data, {merge:true, //set doc method save karne k liye
    })                                                                    // merge:true bcz if we add data in future it will mrge that 
}
//store the data here for any future use


// access the data from here and show it to the main page

export const getAllFoodItems = async () => {
    const items = await getDocs(
        query(collection(fireStore, "foodItems"), orderBy("id", "desc")) //get doc method get karne k liye
    );                                                          // 👆means in decending order latest enter appear at top
    return items.docs.map((doc) => doc.data());
};


//we need to fetch data from getAllFoodItems at two places one at App.js and at createContainer to update data in constextProvider