import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import  Context from "./context/AuthContext.tsx";
import CartContextProvider from "./context/CartContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartContextProvider>
    <Context>
      <App />
      </Context>
      </CartContextProvider>
  </React.StrictMode>
);
