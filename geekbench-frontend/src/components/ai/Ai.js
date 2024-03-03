import React, { useState } from "react";
import axios from "axios";
const Ai = () => {
  const [result, setResult] = useState([]);
  const url = "http://localhost:5000/ai";
  const initialState = {
    budget: "",
    useCase: "",
  };

  const [data, setData] = useState(initialState);

  const handleChangeU = (event) => {
    console.log(event.target.name);

    setData({ ...data, useCase: event.target.value });
  };

  const handleChangeB = (event) => {
    console.log(event.target.name);

    setData({ ...data, budget: event.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(url, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response);
          setResult(response.data.result);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container text-start mt-4">
      <form>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ width: "inherit", backgroundColor: "#fff", color: "#000" }}
          >
            Select use case
          </button>
          <ul
            className="dropdown-menu"
            aria-labelledby="dropdownMenuButton1"
            style={{ maxHeight: "200px", overflowY: "auto" }}
          >
            <li
              className="dropdown-item"
              name="useCase"
              value="1"
              onClick={handleChangeU}
            >
              Gaming
            </li>
            <li
              className="dropdown-item"
              name="useCase"
              value="2"
              onClick={handleChangeU}
            >
              Video Editing
            </li>
            <li
              className="dropdown-item"
              name="useCase"
              value="3"
              onClick={handleChangeU}
            >
              Ai Model Traning
            </li>
            <li
              className="dropdown-item"
              name="useCase"
              value="4"
              onClick={handleChangeU}
            >
              Office use
            </li>
            <li
              className="dropdown-item"
              name="useCase"
              value="6"
              onClick={handleChangeU}
            >
              General use
            </li>
          </ul>
        </div>

        <div className="dropdown mt-3">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ width: "inherit", backgroundColor: "#fff", color: "#000" }}
          >
            Select your budget
          </button>
          <ul
            className="dropdown-menu"
            aria-labelledby="dropdownMenuButton1"
            style={{ maxHeight: "200px", overflowY: "auto" }}
          >
            <li
              className="dropdown-item"
              name="budget"
              value="75000"
              onClick={handleChangeB}
            >
              70,000 - 1,00,000
            </li>
            <li
              className="dropdown-item"
              name="budget"
              value="100000"
              onClick={handleChangeB}
            >
              1,00,000 - 1,50,000
            </li>
            <li
              className="dropdown-item"
              name="budget"
              value="200000"
              onClick={handleChangeB}
            >
              1,50,000 - 2,00,000
            </li>
            <li
              className="dropdown-item"
              name="budget"
              value="200000"
              onClick={handleChangeB}
            >
              2,00,000 - 2,50,000
            </li>
          </ul>
        </div>

        <button className="btn btn-primary mt-4" onClick={handleClick}>
          Submit
        </button>
      </form>

      <div className="mt-4">
        {result?.map((result, index) => (
          <div className="row">
            <div className="col-lg-4" key={index}>
              <div className="card"></div>
              <div className="card-body">
                <div className="d-flex gap-3 mb-2">
                  <p className="type-1">Cpu:</p>
                  <p className="type-2">{result.CPU}</p>
                </div>
                <div className="d-flex gap-3 mb-2">
                  <p className="type-1">Gpu:</p>
                  <p className="type-2">{result.GPU}</p>
                </div>
                <div className="d-flex gap-3 mb-2">
                  <p className="type-1">Ram:</p>
                  <p className="type-2">{result.RAM}</p>
                </div>
                <div className="d-flex gap-3 mb-2">
                  <p className="type-1">Ssd:</p>
                  <p className="type-2">{result.Storage}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ai;
