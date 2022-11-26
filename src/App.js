import React from 'react'
import { async } from '@firebase/util'
import { Route, Routes } from 'react-router-dom'
import { Header } from './Component'
import {MainContainer} from './Component'
import {CreateContainer} from './Component'
import {AnimatePresence} from "framer-motion"
import { useStatevalue } from './Context/StateProvider'
import { getAllFoodItems } from './utils/firebaseFunction'
import { actionType } from './Context/Reducer'
import { useEffect } from 'react'

const App = () => {
  const [{foodItems}, dispatch] = useStatevalue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type : actionType.SET_FOOD_ITEMS,    //By this we store our updated data in stateProvider so that we can access that anywhere
        foodItems : data
      })
    });
  };
  useEffect(()=>{
    fetchData();
  },[]);

  
  //exitBeforeEnter
  return (
     <AnimatePresence mode='wait'>
      <div className='w-screen h-auto flex flex-col bg-primary'>
    <Header/>
    <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
      <Routes>
        <Route path="/*" element={<MainContainer/>}/>
        <Route path='/createItem' element={<CreateContainer/>}/>
      </Routes>
    </main>
    </div>
    </AnimatePresence>
  )
   
    
}

export default App
