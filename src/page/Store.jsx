import React, { useState } from "react";
import { AiTwotoneDashboard } from "react-icons/ai";
import { Button, Container, Form, Table } from "react-bootstrap";
import ProductList from "../Components/ProductList";
import ClientProducts from "../Components/ClientProducts";
import { Link, Outlet } from "react-router-dom";
const Store = () => {
  const [active, setActive] = useState(true);
  return (
    <div className=" font-kalpurush">
      <h1 className="bg-black font-kalpurush text-white text-center py-3 text-4xl font-bold">
        আল-আরাফাত স্টোর
      </h1>
      <Container>
        <div className="flex mb-1 text-lg font-bold border rounded-md">
          <Link
            to=""
            className={`w-full text-center rounded-md p-2 ${
              active ? "" : "bg-slate-300"
            }`}
          >
            <button onClick={() => setActive(true)}>পণ্যের তালিকা</button>
          </Link>
          <Link
            to="/dashboard"
            className={`w-full text-center rounded-md p-2 ${
              active ? "bg-slate-100" : ""
            }`}
          >
            <button onClick={() => setActive(false)}>
              {" "}
              <AiTwotoneDashboard className="inline mb-1" />
              ড্যাশবোর্ড
            </button>
          </Link>
        </div>
        <Outlet />
      </Container>
    </div>
  );
};

export default Store;
