import React from "react";
import Table from "react-bootstrap/Table";
import { useMenuContext } from "../assets/DataContext";
import Banner from "./Banner";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LiaStoreAltSolid } from "react-icons/lia";
const CustomerTable = () => {
  const { clientList, handleQty, calculateTotalPrice } = useMenuContext();
  return (
    <div className=" mt-1">
      <Banner text={"ক্রেতার পণ্য"} />{" "}
      <Container>
        <div className="flex gap-2 py-2 z-50 bg-white sticky top-0 ">
          <Link
            to="/"
            className={`w-full  rounded-md text-2xl bg-slate-300 text-center border  py-2 `}
          >
            <button>
              <LiaStoreAltSolid className=" inline mb-2 -mr-2" /> স্টোর
            </button>
          </Link>
        </div>

        <Table
          striped
          bordered
          hover
          className=" text-center text-sm"
          id="table"
        >
          <thead>
            <tr>
              <th className=" px-0 w-5">ক্র</th>
              <th className=" px-0"> পণ্যের নাম</th>
              <th className=" px-0 w-[50px]">দর</th>
              <th className=" px-0 w-16">পরিমাণ</th>
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
                    className="bg-transparent placeholder:text-black outline-none text-center border-none w-16"
                    type="number"
                    // value={m.qty}
                    placeholder={m.qty}
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
              <th className=" text-sm px-0" colSpan={2}>
                {calculateTotalPrice() + " টাকা"}
              </th>
            </tr>
          </tfoot>
        </Table>
      </Container>
    </div>
  );
};

export default CustomerTable;
