import axios from "axios";
import React, { useEffect, useState } from "react";
import intel from "../../assests/intelSmall.jpg";
import amd from "../../assests/amdSmall.jpg";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Cpu = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get("http://localhost:5000/components/cpu")
      .then(function (response) {
        setData(JSON.parse(JSON.stringify(response.data.documents)));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const imageToRender = (data) => {
    let name = data.name

    if(name.includes("Intel")) return intel
    else return amd
  }

  const handleCLick = (data) => {
    localStorage.setItem("cpu", JSON.stringify(data));
    navigate("/build")
  }

  return (
    <div>
      <div className="container mt-4">
        <div className="row justify-content-center">
          {data?.map((data) => (
            <div className="card col-md-3 mb-sm-5 mx-sm-3 p-0">
              <img
                src={imageToRender(data)}
                alt=""
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <PlusCircleIcon className="plus-icon" onClick={() => handleCLick(data)}/>
              <div className="card-body text-start">
                <div key={data._id} className="cpu">
                  <h5 className="card-title">{data.name}</h5>

                  <div className="d-flex justify-content-between flex-wrap">
                    <div className="me-2">
                      <p className="type-1">Cores</p>
                      <p className="type-2">{data.core_count}</p>
                    </div>

                    <div className="me-2">
                      <p className="type-1">Base Clock</p>
                      <p className="type-2">{data.core_clock}</p>
                    </div>

                    <div className="me-2">
                      <p className="type-1">Boost Clock</p>
                      <p className="tye-2">{data.boost_clock}</p>
                    </div>

                    <div className="me-2">
                      <p className="type-1">Tdp</p>
                      <p className="type-2">
                        {data.tdp !== null ? data.tdp : "no"}
                      </p>
                    </div>

                    <div className="me-2">
                      <p className="type-1">Internal Graphics</p>
                      <p className="type-2">
                        {data.graphics === null ? "none" : data.graphics}
                      </p>
                    </div>

                    <div className="me-2">
                      <p className="type-1">Benchmark</p>
                      <p className="type-2">
                        {data.Benchmark}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-footer p-0 m-0">
                <p className="type-1">Price</p>
                <p className="type-2">₹{Math.floor(data.price * 85)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cpu;
