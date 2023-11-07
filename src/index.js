import React from "react";
import ReactDOM from "react-dom/client";
import "./all.min.css";
import "./index.css"
import firebaseConfig from "./firebase.config";
import "slick-carousel/slick/slick.css"; 
import App from "./App/App";
import { PersistGate } from 'redux-persist/integration/react'
import { store,persistor } from './redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
     <PersistGate loading={"loading"} persistor={persistor}>
        <App />
     </PersistGate>
    </Provider>
);
