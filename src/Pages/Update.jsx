import { v4 as uuid } from "uuid";
import axios from "axios";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
const Update = () => {
  const unique_id = uuid();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    id: "",
    name: "",
    rate: "",
    unit: "কেজি",
    qty: 1,
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value, id: unique_id });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://store-server-wodd.onrender.com/user/", product)
      .then((res) => navigate("/dashboard"))
      .catch((err) => console.log(err));
  };

  return (
    <div className=" h-screen flex justify-center items-center">
      <Container>
        <div className="border px-2 py-3 rounded-md bg-neutral-50">
          <h1 className="mb-4 text-xl font-bold text-center">নতুন পণ্য যোগ</h1>
          <form onSubmit={handleSubmit}>
            <div className=" flex flex-col gap-3">
              <div className=" w-full">
                <div>
                  <input
                    className=" outline-none w-full border mb-2 py-1 px-2 rounded-md "
                    type="text"
                    name="name"
                    placeholder="পণ্যের নাম "
                    value={product.name}
                    autoComplete="off"
                    onChange={handleChange}
                    required
                    autoFocus
                  />
                </div>
                <div>
                  <input
                    className=" outline-none w-full border mb-2 py-1 px-2 rounded-md "
                    type="number"
                    name="rate"
                    placeholder="পণ্যের দর "
                    autoComplete="off"
                    value={product.rate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className=" pl-1 mr-3" htmlFor="cars">
                    ইউনিট
                  </label>
                  <select
                    className=" outline-none bg-white border p-1 w-20 rounded-md"
                    id="cars"
                    name="unit"
                    value={product.unit}
                    onChange={handleChange}
                  >
                    <option value="কেজি">কেজি</option>
                    <option value="পিস">পিস</option>
                  </select>
                </div>
              </div>

              <div className=" text-lg justify-center gap-3 flex">
                <Button
                  children={"সাবমিট"}
                  type={"submit"}
                  className={"p-2 bg-orange-400 hover:bg-orange-500 w-[40%]"}
                />
                <Link
                  to={"/dashboard"}
                  className=" bg-green-700 p-2 px-3   text-white rounded-md"
                >
                  পিছনে ফিরুন
                </Link>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Update;
