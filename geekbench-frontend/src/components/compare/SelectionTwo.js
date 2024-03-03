import React, { useState, useEffect } from "react";
import axios from "axios";

const SelectionTwo = ({selection, setSecondComponent}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/components/${selection}`)
      .then(function (response) {
        setData(JSON.parse(JSON.stringify(response.data.documents)));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [selection]);

  const decideJSX = () => {
    if (selection === "hdd") {
      return "HDD";
    } else if (selection === "gpu") {
      return "GPU";
    } else if (selection === "ram") {
      return "RAM";
    } else if (selection === "ssd") {
      return "SSD";
    } else if (selection === "cpu") {
      return "Processors";
    }
  };


  return (
    <div>
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ width: "50%", backgroundColor: "#fff", color: "#000" }}
      >
        {decideJSX()}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{maxHeight: "200px", overflowY: "auto"}}>
          {data?.map((data) => (
            <li className="dropdown-item" key={data._id} onClick={() => setSecondComponent(data)}>
              {selection === "gpu" ? data.name + data.chipset : data.name}
            </li>
          ))}
        </ul>
    </div>
  </div>
  )
}

export default SelectionTwo