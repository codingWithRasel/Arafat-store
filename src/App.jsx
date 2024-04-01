import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Store from "./Pages/Store";
import Dashboard from "./Pages/Dashboard";
import ProductTable from "./components/ProductTable";
import CustomerTable from "./components/CustomerTable";
import { MenuContextProvider } from "./assets/DataContext";
import Update from "./Pages/Update";

function App() {
  return (
    <MenuContextProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Store />}>
              <Route path="" element={<ProductTable />} />
            </Route>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/update" element={<Update />} />
            <Route path="/customerTable" element={<CustomerTable />} />
          </Routes>
        </BrowserRouter>
      </div>
    </MenuContextProvider>
  );
}

export default App;
