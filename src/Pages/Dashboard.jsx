import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { useMenuContext } from "../assets/DataContext";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { LiaStoreAltSolid } from "react-icons/lia";
import { AiOutlineDashboard } from "react-icons/ai";
import Banner from "../components/Banner";
import Search from "../components/Search";
import Button from "../components/Button";
const Dashboard = () => {
  const [search, setSearch] = useState("");
  const { data } = useMenuContext();
  return (
    <div>
      <Banner text={"ড্যাশবোর্ড"} />
      <Container>
        <div
          className="mt-2
         flex gap-2"
        >
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
            <AiOutlineDashboard className=" inline mb-2" />
            ড্যাশবোর্ড
          </Link>
        </div>
        <div className=" flex gap-2 py-2 z-50 bg-white sticky top-0">
          <Search onChange={(e) => setSearch(e.target.value)} />
          <Link to={"/update"}>
            <Button
              children={"নতুন পণ্য যোগ"}
              className={"whitespace-nowrap text-sm"}
              variant={"success"}
            />
          </Link>
        </div>
        <Table striped bordered hover className=" text-sm text-center">
          <thead>
            <tr>
              <th>পন্যের নাম</th>
              <th>দর</th>
              <th>কার্যক্রম</th>
            </tr>
          </thead>

          <tbody>
            {data
              .sort((a, b) => a.name.localeCompare(b.name, "bn"))
              .filter((f) => {
                return search.toLowerCase() === ""
                  ? f
                  : f.name.includes(search);
              })
              .map((e, i) => (
                <tr key={i}>
                  <td>{e.name}</td>
                  <td>
                    {e.rate}
                    <sub className=" text-[10px]">/{e.unit}</sub>{" "}
                  </td>
                  <td className=" p-1">
                    <Button
                      className={"text-sm"}
                      children={"আপডেট"}
                      onClick={() => handleAdd(e)}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot></tfoot>
        </Table>
      </Container>
    </div>
  );
};

export default Dashboard;
