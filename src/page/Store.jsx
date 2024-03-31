import React, { useState } from "react";
import { AiTwotoneDashboard } from "react-icons/ai";
import { Button, Container, Form } from "react-bootstrap";

import ProductList from "../Components/ProductList";
import ClientProducts from "../Components/ClientProducts";
import { Link } from "react-router-dom";

const Store = (Props) => {
  const { data } = Props;
  const [active, setActive] = useState(true);
  const [search, setSearch] = useState("");
  const [clientList, setClientList] = useState([]);

  const handleAdd = (e) => {
    if (!clientList.includes(e)) {
      const updatedItems = [...clientList, e];
      setClientList(updatedItems);
    } else {
      alert("অলরেডি পন্যটি যুক্ত হয়েছে!!!");
    }
  };

  const handleQty = (value, m) => {
    let ind = -1;
    clientList.forEach((data, index) => {
      if (data.name === m.name) ind = index;
    });
    const tempArr = clientList;
    tempArr[ind].qty = value;
    setClientList([...tempArr]);
  };
  return (
    <div>
      <h1 className="bg-black font-kalpurush text-white text-center py-3 text-4xl font-bold">
        আল-আরাফাত স্টোর
      </h1>
      <Container>
        <div className="flex gap-2 my-1 justify-between text-lg font-bold  rounded-md">
          <button
            className="bg-slate-200 rounded-md flex-1 py-2 text-center"
            onClick={() => setActive(true)}
          >
            পণ্যের তালিকা
          </button>

          <Link
            className="bg-slate-200 rounded-md flex-1 py-2 text-center"
            to="/dashboard"
          >
            <button>
              {" "}
              <AiTwotoneDashboard className="inline mb-1" />
              ড্যাশবোর্ড
            </button>
          </Link>
        </div>
        <div className="flex my-1 gap-2">
          <Form.Control
            type="text"
            placeholder="এখানে সার্চ করুন"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            className=" whitespace-nowrap"
            variant="warning"
            onClick={() => setActive(false)}
          >
            ক্রেতার পণ্য
          </Button>
        </div>
        <div className={active ? "" : "hidden"}>
          <ProductList data={data} handleAdd={handleAdd} search={search} />
        </div>
        <div className={active ? "hidden" : ""}>
          <ClientProducts handleQty={handleQty} clientList={clientList} />
        </div>
      </Container>
    </div>
  );
};

export default Store;
