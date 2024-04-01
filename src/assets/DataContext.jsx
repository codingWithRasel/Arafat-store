import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const MenuContext = createContext();

// Step 2: Create a provider component (optional)
export const MenuContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [clientList, setClientList] = useState([]);
  useEffect(() => {
    axios
      .get("https://store-server-wodd.onrender.com/user")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleAdd = (e) => {
    if (!clientList.includes(e)) {
      const updatedItems = [...clientList, e];
      setClientList(updatedItems);
    } else {
      alert("অলরেডি পন্যটি যুক্ত হয়েছে!!!");
    }
  };
  const handleQty = (m, value) => {
    const updateClientList = clientList.map((item) => {
      if (item.name === m.name) {
        return { ...item, qty: value };
      }
      return item;
    });
    setClientList(updateClientList);
    // let ind = -1;
    // clientList.forEach((data, index) => {
    //   if (data.name === m.name) ind = index;
    // });
    // const tempArr = clientList;
    // tempArr[ind].qty = value;
    // setClientList([...tempArr]);
  };

  const calculateTotalPrice = () => {
    return clientList.reduce((total, item) => total + item.rate * item.qty, 0);
  };
  return (
    <MenuContext.Provider
      value={{
        data,
        search,
        setSearch,
        clientList,
        handleAdd,
        handleQty,
        calculateTotalPrice,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

// Step 3: Create the custom useContext hook
export const useMenuContext = () => {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error("useCustomContext must be used within a CustomProvider");
  }
  return context;
};
