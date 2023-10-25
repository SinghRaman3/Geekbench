import { useState, useEffect } from "react";
import axios from "axios";

const Ssd = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/components/ssd")
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
        <div
          className="card mb-2"
          data-bs-theme="dark"
          style={{ backgroundColor: "#1e192b" }}
        >
          <div className="card-body row p-2" style={{ color: "#fff" }}>
            <div className="col-lg-2" style={{ fontWeight: "600" }}>
              Name
            </div>
            <div className="col-lg-2" style={{ fontWeight: "600" }}>
              Capacity
            </div>
            <div className="col-lg-2" style={{ fontWeight: "600" }}>
              Cache
            </div>
            <div className="col-lg-2" style={{ fontWeight: "600" }}>
              Form factor
            </div>
            <div className="col-lg-2" style={{ fontWeight: "600" }}>
              Interace
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
                <div className="col-lg-2">
                  {data.capacity >= 2000
                    ? "2TB"
                    : data.capacity >= 1000
                    ? "1TB"
                    : data.capacity + "GB"}
                </div>
                <div className="col-lg-2">
                  {data.cache >= 2000
                    ? "2TB"
                    : data.cache >= 1000
                    ? "1TB"
                    : data.cache + "GB"}
                </div>
                <div className="col-lg-2">{data.form_factor}</div>
                <div className="col-lg-2">{data.interface}</div>
                <div className="col-lg-2">{data.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ssd;
