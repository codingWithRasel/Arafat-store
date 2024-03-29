import React, { useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
// import data from "../assets/Alldata";
import { useMenuContext } from "../Context/MenuContext";
import { Link } from "react-router-dom";
const ProductList = (Props) => {
  const [search, setSearch] = useState("");

  const { handleAdd, data } = useMenuContext();
  return (
    <div>
      <div className="flex gap-2 mb-1 ">
        <Form.Control
          type="text"
          placeholder="এখানে সার্চ করুন"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to="clientProducts">
          <Button className=" whitespace-nowrap" variant="warning">
            ক্রেতার পণ্য
          </Button>
        </Link>
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
                      <Button
                        className=" py-1 text-sm"
                        variant="primary"
                        onClick={() => handleAdd(m)}
                      >
                        যুক্ত করুন
                      </Button>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
