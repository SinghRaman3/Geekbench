import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { PlusCircleIcon } from "@heroicons/react/24/solid"
import { useNavigate } from "react-router-dom";

const Hdd = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get("http://localhost:5000/components/hdd")
      .then(function (response) {
        console.log(response);
        setData(JSON.parse(JSON.stringify(response.data.documents)));
        console.log(typeof data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleCLick = (data) => {
    localStorage.setItem("hdd", JSON.stringify(data));
    navigate("/build")
  };

  
  return (
    <div>
      <div className="container mt-4">
      <div className="row justify-content-center px-2">
          {data?.map((data) => (
            <div className="card col-md-3 mb-5 mx-md-4 p-0">
              <img src="" alt="" style={{ maxWidth: "100%", height: "auto" }} />
              <PlusCircleIcon className="plus-icon" onClick={() => handleCLick(data)} />
              <div className="card-body text-start">
                <div key={data._id} className="ssd">
                  <h5 className='card-title'>{data.name}</h5>
                  <div className="d-flex justify-content-between flex-wrap">
                    <div className="me-3">
                      <p className="type-1">Capacity</p>
                      <p className="type-2">
                        {data.capacity}GB
                      </p>
                    </div>

                    <div className="me-3">
                      <p className="type-1">Type</p>
                      <p className="type-2">
                        {data.type}
                      </p>
                    </div>

                    <div className="me-3">
                      <p className="type-1">Interface</p>
                      <p className="type-2">{data.interface}</p>
                    </div>

                    <div className="me-3">
                      <p className="type-1">Color</p>
                      <p className="type-2">{data.color}</p>
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
}

export default Hdd