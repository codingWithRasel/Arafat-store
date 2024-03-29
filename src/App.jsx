import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Store from "./page/Store";
import { MenuContextProvider } from "./Context/MenuContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import Banner from "./Components/Banner";
import ProductList from "./Components/ProductList";
import ClientProducts from "./Components/ClientProducts";

const App = () => {
  return (
    <MenuContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Store />}>
            <Route path="" element={<ProductList />} />
            <Route path="clientProducts" element={<ClientProducts />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </MenuContextProvider>
  );
};

export default App;
