import React, { useRef } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { useMenuContext } from "../Context/MenuContext";
const ClientProducts = () => {
  const { clientList, setClientList, data } = useMenuContext();
  const handlePrint = () => {
    if (window) {
      window.print();
    } else {
      console.log("Printing is not supported in this environment.");
    }
  };
  return (
    <div>
      <Table className=" text-center text-sm" striped bordered hover>
        <thead>
          <tr>
            <th> ক্রমিক </th>
            <th> পণ্যের নাম </th>
            <th> দর</th>
            <th>পরিমাণ</th>
            <th>মোট</th>
          </tr>
        </thead>
        <tbody>
          {clientList &&
            clientList.map((m, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{m.name}</td>
                  <td>
                    {m.rate}
                    <sub className=" text-[10px]">/{m.unit}</sub>
                  </td>
                  <td className="align-middle p-0 px-1 w-[15%]">
                    <input
                      type="number"
                      className=" outline-none text-center rounded-lg p-1  w-full h-full"
                    />
                  </td>
                  <td>{}</td>
                </tr>
              );
            })}
        </tbody>
        <tfoot>
          <tr>
            <th className=" text-right" colSpan={4}>
              সর্বমোট
            </th>
            <th>{} টাকা</th>
          </tr>
        </tfoot>
      </Table>
      <div className=" absolute bottom-5 right-5">
        <Button variant="success" onClick={handlePrint}>
          প্রিন্ট করুন
        </Button>
      </div>
    </div>
  );
};

export default ClientProducts;
