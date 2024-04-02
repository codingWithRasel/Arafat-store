import React from "react";
import { Link, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { LiaStoreAltSolid } from "react-icons/lia";
import { AiOutlineDashboard } from "react-icons/ai";

import { useMenuContext } from "../assets/DataContext";
import Banner from "../components/Banner";
import Search from "../components/Search";
import Button from "../components/Button";

const Store = () => {
  const { setSearch } = useMenuContext();

  return (
    <div>
      <Banner text={"স্টোর"} />
      <Container>
        <div className=" flex gap-2 mt-2">
          <Link
            to="/"
            className={`w-full  rounded-md text-2xl bg-slate-300 text-center border  py-2 `}
          >
            <LiaStoreAltSolid className=" inline mb-2 -mr-2" /> স্টোর
          </Link>
          <Link
            to="/dashboard"
            className={`w-full  rounded-md text-2xl bg-slate-300 text-center border  py-2`}
          >
            <AiOutlineDashboard className=" inline mb-2 " />
            ড্যাশবোর্ড
          </Link>
        </div>
        <div className="flex gap-2 py-2 z-50 bg-white sticky top-0 ">
          <Search onChange={(e) => setSearch(e.target.value)} />
          <Link to={"/customerTable"}>
            <Button className="whitespace-nowrap " children={"ক্রেতার পণ্য"} />
          </Link>
        </div>
        <Outlet />
      </Container>
    </div>
  );
};

export default Store;
