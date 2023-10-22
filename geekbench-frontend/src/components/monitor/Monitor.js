import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Monitor = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:5000/components/monitor")
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
              <div className="col-lg-2" style={{ fontWeight: "600" }}>
                Name
              </div>
              <div className="col-lg-2" style={{ fontWeight: "600" }}>
                Resolution
              </div>
              <div className="col-lg-2" style={{ fontWeight: "600" }}>
                Refresh Time
              </div>
              <div className="col-lg-2" style={{ fontWeight: "600" }}>
                Respone Time
              </div>
              <div className="col-lg-1" style={{ fontWeight: "600" }}>
                Panel Type
              </div>
              <div className="col-lg-1" style={{ fontWeight: "600" }}>
                Screen Size
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
                  <div className="col-lg-2">{data.name}</div>
                  <div className="col-lg-2">{data.resolution[0] + "x" + data.resolution[1]}</div>
                  <div className="col-lg-2">{data.refresh_rate + "hz"}</div>
                  <div className="col-lg-2">{data.response_time + "ms"}</div>
                  <div className="col-lg-1">{data.panel_type}</div>
                  <div className="col-lg-1">{data.screen_size   }</div>
                  <div className="col-lg-2">{data.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Monitor