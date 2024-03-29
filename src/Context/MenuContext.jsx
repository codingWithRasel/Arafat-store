import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const MenuContext = createContext();

// Step 2: Create a provider component (optional)
export const MenuContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://store-server-wodd.onrender.com/user")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [clientList, setClientList] = useState([]);
  const handleAdd = (m) => {
    const AlreadyExist = clientList.map((c) => c.name).includes(m.name);
    if (!AlreadyExist) {
      setClientList((prev) => [...prev, m]);
    } else {
      alert("ইতিপূর্বে যুক্ত করা হয়েছে!!!");
    }
  };
  console.log(clientList);

  return (
    <MenuContext.Provider
      value={{
        data,
        setData,
        handleAdd,
        clientList,
        setClientList,
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
