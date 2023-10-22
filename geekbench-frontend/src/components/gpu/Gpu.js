import React, { useState, useEffect } from "react";
import axios from "axios";

const Gpu = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/components/gpu")
      .then(function (response) {
        console.log(response);
        setData(JSON.parse(JSON.stringify(response.data.documents)));
        console.log(typeof data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className="container mt-4">
        <div className="card bg-dark mb-2">
          <div className="card-body row p-2" style={{ color: "#fff" }}>
            <div className="col-lg-4" style={{ fontWeight: "600" }}>
              Name
            </div>
            <div className="col-lg-2" style={{ fontWeight: "600" }}>
              Core clock Speed
            </div>
            <div className="col-lg-2" style={{ fontWeight: "600" }}>
              Boost Clock Speed
            </div>
            <div className="col-lg-2" style={{ fontWeight: "600" }}>
              Memory
            </div>
            <div className="col-lg-2" style={{ fontWeight: "600" }}>
              Price
            </div>
          </div>
        </div>
        {data?.map((data) => (
          <div className="card mb-2">
            <div className="card-body">
              <div key={data._id} className="row py-4">
                <div className="col-lg-4">{data.name}</div>
                <div className="col-lg-2">{data.core_clock}</div>
                <div className="col-lg-2">{data.boost_clock}</div>
                <div className="col-lg-2">{data.memory}</div>
                <div className="col-lg-2">{data.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gpu;
