import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useMenuContext } from "../../assets/DataContext";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { LiaStoreAltSolid } from "react-icons/lia";
import { AiOutlineDashboard } from "react-icons/ai";
const Dashboard = () => {
  const [search, setSearch] = useState("");
  const { data } = useMenuContext();
  return (
    <div>
      <h1 className="bg-black text-white text-center py-3 text-4xl font-bold">
        ড্যাশবোর্ড
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
              <AiOutlineDashboard className=" inline mb-2" />
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
          <Button
            className="bg-green-900 text-white whitespace-nowrap text-sm"
            variant="success"
          >
            নতুন পণ্য যোগ
          </Button>
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
                      className="bg-blue-500 text-sm"
                      variant="primary"
                      onClick={() => handleAdd(e)}
                    >
                      আপডেট
                    </Button>
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
