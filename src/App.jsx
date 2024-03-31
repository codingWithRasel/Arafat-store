import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Store from "./page/Store";
import Dashboard from "./page/Dashboard";

const App = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://store-server-wodd.onrender.com/user")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <div className=" font-kalpurush">
        <Routes>
          <Route path="/" element={<Store data={data} />}></Route>
          <Route path="/dashboard" element={<Dashboard data={data} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
