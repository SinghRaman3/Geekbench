import React, { useState, useEffect } from "react";
import axios from "axios";
import corsair from "../../assests/corsairVengeanceRam.jpg"
import gskill from "../../assests/gskillRam.jpg"
import kingston from "../../assests/kingstonRam.jpg"
import teamforce from "../../assests/teamforceRam.jpg"
import adata from "../../assests/adataRam.jpg"
import ram from "../../assests/ramSmall.jpg"
import { PlusCircleIcon } from "@heroicons/react/24/solid"
import { useNavigate } from "react-router-dom";

const Ram = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    axios
    .get("http://localhost:5000/components/ram")
    .then(function (response) {
      setData(JSON.parse(JSON.stringify(response.data.documents)));
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);
  
  const imageToRender = (data) => {
    let name = data.name
    
    if(name.includes("Corsair")) return corsair
    else if(name.includes("G.Skill")) return gskill
    else if(name.includes("Kingston")) return kingston
    else if(name.includes("Adata")) return adata
    else if(name.includes("TEAMGROUP")) return teamforce
    else return ram
  }
  
  const handleCLick = (data) => {
    localStorage.setItem("ram", JSON.stringify(data));
    navigate("/build")
  };
  return (
    <div>
      <div className="container mt-4">
        <div className="row justify-content-center px-2">
          {data?.map((data) => (
            <div className="card col-md-3 mb-5 mx-md-4 p-0">
              <img src={imageToRender(data)} alt="" style={{ maxWidth: "100%", height: "50%" }} />
              <PlusCircleIcon className="plus-icon" onClick={() => handleCLick(data)} />

              <div className="card-body text-start">
                <div key={data._id} className="ram">
                  <h5 className="card-title">{data.name}</h5>
                  <div className="d-flex justify-content-between flex-wrap mt-2">
                    <div className="me-3">
                      <p className="type-1">Speed</p>
                      <p className="type-2">
                        DDR{data.speed[0]}-{data.speed[1]}
                      </p>
                    </div>

                    <div className="me-3">
                      <p className="type-1">Modules</p>
                      <p className="type-2">
                        {data.modules[0]}x{data.modules[1]}GB
                      </p>
                    </div>

                    <div className="me-3">
                      <p className="type-1">First Word Latency</p>
                      <p className="type-2">{data.first_word_latency}ns</p>
                    </div>

                    <div className="me-3">
                      <p className="type-1">Cas Latency</p>
                      <p className="type-2">{data.cas_latency}</p>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="card-footer p-0 m-0">
                <p className="type-1">Price</p>
                <p className="type-2">₹{Math.floor(data.price*85)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ram;
