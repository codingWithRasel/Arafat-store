import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { LiaStoreAltSolid } from "react-icons/lia";
import { AiOutlineDashboard } from "react-icons/ai";
import InputGroup from "react-bootstrap/InputGroup";
import { useMenuContext } from "../assets/DataContext";
import Banner from "../components/Banner";
import Search from "../components/Search";

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
        <div className="flex gap-2 py-2 z-50 bg-white sticky top-0 ">
          <Search onChange={(e) => setSearch(e.target.value)} />
          <Link to={"/customerTable"}>
            <Button
              className="bg-yellow-400 font-bold px-4 h-full whitespace-nowrap text-sm"
              variant="warning"
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
