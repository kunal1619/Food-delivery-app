import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import { StateProvider } from "./Context/StateProvider";
import initialState from "./Context/initialState";
import reducer from "./Context/Reducer";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
   <StateProvider initialState={initialState} reducer={reducer}>  {/* now we can access user information any where in component */}
    <App />
   </StateProvider>
  </BrowserRouter>
);