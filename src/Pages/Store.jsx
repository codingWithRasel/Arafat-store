import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Link, Outlet } from "react-router-dom";
import { useMenuContext } from "../assets/DataContext";
import { Button } from "react-bootstrap";
import { LiaStoreAltSolid } from "react-icons/lia";
import { AiOutlineDashboard } from "react-icons/ai";

const Store = () => {
  const { setSearch } = useMenuContext();

  return (
    <div>
      <h1 className="bg-black text-white text-center py-3 text-4xl font-bold">
        আল-আরাফাত স্টোর
      </h1>
      <Container>
        <div className=" flex gap-2 my-2">
          <Link
            to="/"
            className={`w-full  rounded-md text-2xl bg-slate-300 text-center border  py-2 `}
          >
            <button>
              <LiaStoreAltSolid className=" inline mb-2 -mr-2" /> স্টোর
            </button>
          </Link>
          <Link
            to="/dashboard"
            className={`w-full  rounded-md text-2xl bg-slate-300 text-center border  py-2`}
          >
            <button>
              <AiOutlineDashboard className=" inline mb-2 " />
              ড্যাশবোর্ড
            </button>
          </Link>
        </div>
        <div className="flex gap-2 my-2">
          <InputGroup>
            <Form.Control
              placeholder="এখানে সার্চ করুন"
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
          <Link to={"/customerTable"}>
            <Button
              className="bg-gray-500 text-white  h-full whitespace-nowrap text-sm"
              variant="secondary"
            >
              ক্রেতার পণ্য
            </Button>
          </Link>
        </div>
        <Outlet />
      </Container>
    </div>
  );
};

export default Store;
