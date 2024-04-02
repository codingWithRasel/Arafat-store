import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useMenuContext } from "../assets/DataContext";
import Button from "./Button";

const ProductTable = () => {
  const { data, search, handleAdd, clientList } = useMenuContext();
  return (
    <Table striped bordered hover className=" text-sm text-center">
      <thead>
        <tr>
          <th>পণ্যের নাম</th>
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
          .map((m, i) => (
            <tr key={i}>
              <td>{m.name}</td>
              <td>
                {m.rate}
                <sub className=" text-[10px]">/{m.unit}</sub>{" "}
              </td>
              <td className=" p-1">
                <Button
                  className={"text-xs px-2 py-[5px]"}
                  children={
                    clientList.some((s) => s.id === m.id)
                      ? "যুক্ত হয়েছে"
                      : "যুক্ত করুন"
                  }
                  onClick={() => handleAdd(m)}
                  variant={
                    clientList.some((s) => s.id === m.id)
                      ? "success"
                      : "primary"
                  }
                />
              </td>
            </tr>
          ))}
      </tbody>
      <tfoot></tfoot>
    </Table>
  );
};

export default ProductTable;
