import { useState, useEffect } from "react";
import axios from "axios";
import ssd from "../../assests/ssdSmall.JPG";
import { PlusCircleIcon } from "@heroicons/react/24/solid"
import { useNavigate } from "react-router-dom";
import "./styles.css"

const Ssd = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
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
  
  const handleCLick = (data) => {
    localStorage.setItem("ssd", JSON.stringify(data))
    navigate("/build")
  }
  return (
    <div>
      <div className="container mt-4">
        <div className="row justify-content-center">
          {data?.map((data) => (
            <div className="card col-md-3 mb-sm-5 mx-sm-3 p-0">
              <img
                src={ssd}
                alt=""
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <PlusCircleIcon className="plus-icon" onClick={() => handleCLick(data)}/>
              <div className="card-body text-start">
                <div key={data._id} className="ssd">
                  <h5 className="card-title">{data.name}</h5>
                  <div className="d-flex justify-content-between flex-wrap">

                    <div className="me-2">
                      <p className="type-1">Capacity</p>
                      <p className="type-2">
                        {data.capacity >= 2000
                          ? "2TB"
                          : data.capacity >= 1000
                          ? "1TB"
                          : data.capacity + "GB"}
                      </p>
                    </div>

                    <div className="me-2">
                      <p className="type-1">Cache</p>
                      <p className="type-2">{data.cache === null ? "Not available" : data.cache + "mb"}</p>
                    </div>

                    <div className="me-2">
                      <p className="type-1">Form Factor</p>
                      <p className="type-2">{data.form_factor}</p>
                    </div>

                    <div className="me-3 mt-2">
                      <p className="type-1">Interface</p>
                      <p className="type-2">{data.interface}</p>
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

export default Ssd;
