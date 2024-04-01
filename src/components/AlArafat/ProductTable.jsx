import React, { useState } from "react";
import Table from "react-bootstrap/Table";

import { Button } from "react-bootstrap";
import { useMenuContext } from "../../assets/DataContext";

const ProductTable = () => {
  const { data, search, handleAdd } = useMenuContext();
  return (
    <div>
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
              return search.toLowerCase() === "" ? f : f.name.includes(search);
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
                    যুক্তকরুন
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
        <tfoot></tfoot>
      </Table>
    </div>
  );
};

export default ProductTable;
