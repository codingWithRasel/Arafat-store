import React, { useEffect, useState, useRef } from "react";

import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { useMenuContext } from "../../assets/DataContext";
const CustomerTable = () => {
  const { clientList, handleQty, calculateTotalPrice } = useMenuContext();
  return (
    <div className=" mt-1">
      <Table striped bordered hover className=" text-center text-sm" id="table">
        <thead>
          <tr>
            <th className=" px-0 w-5">ক্র</th>
            <th className=" px-0">পন্যের নাম</th>
            <th className=" px-0 w-10">দর</th>
            <th className="px-0 w-16">পরিমাণ</th>
            <th className=" px-0 w-16">মোট </th>
          </tr>
        </thead>
        <tbody className=" text-xs">
          {clientList.map((m, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{m.name}</td>
              <td className=" text-xs px-0">
                {m.rate}
                <span className=" text-[9px]">/{m.unit}</span>{" "}
              </td>

              <td className="bg-blue-500 align-middle px-0">
                <input
                  className="bg-transparent outline-none text-center border-none w-16"
                  type="number"
                  value={m.qty}
                  onChange={(e) => handleQty(m, e.target.value)}
                />
              </td>
              <td className=" px-0">{m.qty * m.rate}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th className=" text-right" colSpan={3}>
              সর্বমোট
            </th>
            <th
              className=" text-sm px-0
            "
              colSpan={2}
            >
              {calculateTotalPrice() + " টাকা"}
            </th>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};

export default CustomerTable;
