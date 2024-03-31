import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { Button, Container, Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
const Dashboard = (Props) => {
  const [search, setSearch] = useState("");
  const { data } = Props;
  return (
    <div>
      <h1 className="bg-black font-kalpurush text-white text-center py-3 text-4xl font-bold">
        ড্যাশবোর্ড
      </h1>

      <Container>
        <div className=" flex  text-xl my-1">
          <Link to="/">
            <Button variant="warning">
              {" "}
              <FaHome className="inline" /> স্টোর
            </Button>
          </Link>
        </div>
        <div className="flex gap-2 my-1">
          <Form.Control
            type="text"
            placeholder="এখানে সার্চ করুন"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button className="whitespace-nowrap">নতুন পন্য যোগ করুন</Button>
        </div>
        <Table className=" text-center text-sm" striped bordered hover>
          <thead>
            <tr>
              <th>পণ্যের নাম </th>
              <th>দর</th>
              <th>কার্যক্রম</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data
                .filter((f) => {
                  return f.name.includes(search);
                })
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((m, i) => {
                  return (
                    <tr key={i}>
                      <td>{m.name}</td>
                      <td>
                        {m.rate}
                        <sub className=" text-[10px]">/{m.unit}</sub>
                      </td>
                      <td className=" p-1">
                        <Button className=" py-1 text-sm" variant="secondary">
                          আপডেট
                        </Button>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Dashboard;
