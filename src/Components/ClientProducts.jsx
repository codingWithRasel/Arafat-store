import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { Button, Form, Table } from "react-bootstrap";

const ClientProducts = (Props) => {
  const { clientList, handleQty, search } = Props;

  const [subtotal, setSubtotal] = useState(null);

  const handlePrice = () => {
    let ans = 0;
    clientList.map((item) => {
      ans += item.qty * item.rate;
    });
    setSubtotal(ans);
  };
  useEffect(() => {
    handlePrice();
  });

  const emtpyMessage = "কোন পণ্য যুক্ত করা হয়নি!!!";
  return (
    <div>
      {clientList.length === 0 ? (
        <p className="border-2 rounded-md border-purple-400 bg-slate-100 py-2 font-bold text-center text-2xl text-purple-400">
          {emtpyMessage}
        </p>
      ) : (
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
              {clientList
                .filter((f) => {
                  return f.name.includes(search);
                })
                .map((m, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{m.name}</td>
                      <td>
                        {m.rate}
                        <sub className=" text-[10px]">/{m.unit}</sub>
                      </td>
                      <td className="align-middle p-0 px-1 w-[15%]">
                        <Form.Control
                          className="bg-transparent text-center rounded-full"
                          type="number"
                          value={m.qty}
                          onChange={(e) => handleQty(e.target.value, m)}
                        />
                      </td>
                      <td>{m.qty * m.rate}</td>
                    </tr>
                  );
                })}
            </tbody>
            <tfoot>
              <tr>
                <th className=" text-right" colSpan={4}>
                  সর্বমোট
                </th>
                <th>{subtotal} টাকা</th>
              </tr>
            </tfoot>
          </Table>
        </div>
      )}
    </div>
  );
};

export default ClientProducts;
