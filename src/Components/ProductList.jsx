import React from "react";
import { Button, Form, Table } from "react-bootstrap";

import { Link } from "react-router-dom";
const ProductList = (Props) => {
  const { handleAdd, data, search } = Props;
  return (
    <div>
      <Table className=" text-center text-sm" striped bordered hover>
        <thead>
          <tr>
            <th>পণ্যের নাম </th>
            <th>দর</th>
            <th>কার্যক্রম</th>
          </tr>
        </thead>
        <tbody>
          {data
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
