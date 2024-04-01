import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Store from "./components/AlArafat/Store";
import "bootstrap/dist/css/bootstrap.min.css";
import { MenuContextProvider } from "./assets/DataContext";
import Dashboard from "./components/AlArafat/Dashboard";
import CustomerTable from "./components/AlArafat/CustomerTable";
import ProductTable from "./components/AlArafat/ProductTable";

function App() {
  return (
    <MenuContextProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Store />}>
              <Route path="" element={<ProductTable />} />
              <Route path="customerTable" element={<CustomerTable />} />
            </Route>
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </MenuContextProvider>
  );
}

export default App;
