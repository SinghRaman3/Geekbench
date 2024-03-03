import React, { useState, useEffect } from "react";
import axios from "axios";
import gpu from "../../assests/gpuSmall.jpg"
import amd from "../../assests/amdGSmall.jpg"
import { PlusCircleIcon } from "@heroicons/react/24/solid"
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Gpu = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    axios
    .get("http://localhost:5000/components/gpu")
    .then(function (response) {
      setData(JSON.parse(JSON.stringify(response.data.documents)));
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);
  
  const imageToRender = (data) => {
    let name = data.chipset
    
    if(name.includes("GeForce")) return gpu
    else return amd
  }
  
  
  const handleCLick = (data) => {
    localStorage.setItem("gpu", JSON.stringify(data))
    navigate("/build")
  }
  return (
    <div>
      <div className="container-sm mt-4">
        <div className="row justify-content-center px-2">
          {data?.map((data) => (
            <div className="card col-md-3 mb-5 mx-md-4 p-0">
              <img src={imageToRender(data)} alt="" style={{ maxWidth: "100%", height: "auto" }} />
              <PlusCircleIcon className="plus-icon" onClick={() => handleCLick(data)} />
              <div className="card-body text-start">
                <div key={data._id} className="gpu">
                  <h5 className="card-title">{data.name}</h5>

                  <div className="d-flex justify-content-between flex-wrap">
                    <div className="me-3">
                      <p className="type-1">Chipset</p>
                      <p className="type-2">{data.chipset}</p>
                    </div>

                    <div className="me-2">
                      <p className="type-1">Core Clock</p>
                      <p>{data.core_clock === null ? "Not available" : data.core_clock}</p>
                    </div>

                    <div className="me-2">
                      <p className="type-1">Boost Clock</p>
                      <p>{data.boost_clock === null ? "Not available": data.boost_clock}</p>
                    </div>

                    <div className="me-2">
                      <p className="type-1">Memory</p>
                      <p>{data.memory}</p>
                    </div>

                    <div className="me-2">
                      <p className="type-1">Benchmark</p>
                      <p>{data.Benchmark}</p>
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

export default Gpu;
