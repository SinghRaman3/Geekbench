import React, { useState, useEffect } from "react";

// Tools
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CloseIcon from "@mui/icons-material/Close";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import MouseIcon from "@mui/icons-material/Mouse";

//Images
import valoLogo from "../../assests/valoLogo.jpg";
import overwatchLogo from "../../assests/overwatchLogo.png";
import gtaLogo from "../../assests/gtaLogo.jpg";
import forzaLogo from "../../assests/forza.jpg";
import rdrLogo from "../../assests/rdr2.jpg";

//Css
import "./buildStyles.css";

const Build = () => {
  const [cpuData, setCpuData] = useState({});
  const [gpuData, setGpuData] = useState({});
  const [ramData, setRamData] = useState({});
  const [ssdData, setSsdData] = useState({});
  const [hddData, setHddData] = useState({});

  // Cpu
  useEffect(() => {
    const storedCpuData = JSON.parse(localStorage.getItem("cpu"));

    // Only update the state if the data has changed
    if (JSON.stringify(storedCpuData) !== JSON.stringify(cpuData)) {
      setCpuData(storedCpuData);
    }
  }, [cpuData]);

  // Gpu
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("gpu"));

    // Only update the state if the data has changed
    if (JSON.stringify(storedData) !== JSON.stringify(gpuData)) {
      setGpuData(storedData);
    }
  }, [gpuData]);

  // Ram
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("ram"));

    // Only update the state if the data has changed
    if (JSON.stringify(storedData) !== JSON.stringify(ramData)) {
      setRamData(storedData);
    }
  }, [ramData]);

  // SSD
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("ssd"));

    // Only update the state if the data has changed
    if (JSON.stringify(storedData) !== JSON.stringify(ssdData)) {
      setSsdData(storedData);
    }
  }, [ssdData]);

  // Hdd
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("hdd"));

    // Only update the state if the data has changed
    if (JSON.stringify(storedData) !== JSON.stringify(hddData)) {
      setHddData(storedData);
      virtualBenchOff += 12;
    }
  }, [hddData]);

  // let totalPrice = cpuData
  //   ? Math.floor(cpuData.price * 85)
  //   : 0 + gpuData
  //   ? Math.floor(gpuData.price * 85)
  //   : 0 + ramData
  //   ? Math.floor(ramData.price * 85)
  //   : 0 + ssdData
  //   ? Math.floor(ssdData.price * 85)
  //   : 0 + hddData
  //   ? Math.floor(hddData.price * 85)
  //   : 0;

  let totalPrice =
    Math.floor(cpuData.price * 85) +
    Math.floor(gpuData.price * 85) +
    Math.floor(ramData.price * 85) +
    Math.floor(ssdData.price * 85);

  let virtualBenchGame = Math.round(
    cpuData.Benchmark / 27 + gpuData.core_clock / 70 + ramData.price * 1.06
  );
  let virtualBenchVid = Math.round(
    cpuData.Benchmark / 14 +
      gpuData.core_clock / 78 +
      ramData.price * 1.83 +
      (ssdData.price * 2) / 10
  );
  let virtualBenchOff = Math.round(
    cpuData.Benchmark / 27 +
      gpuData.core_clock / 194 +
      (ramData.price * 2) / 2 +
      ssdData.price / 10
  );

  return (
    <div className="" style={{ backgroundColor: "#f4f4f3" }}>
      <div className="py-4" style={{ backgroundColor: "#545578" }}>
        <h4 style={{ color: "#fff" }}>Choose your parts</h4>
      </div>
      <div className="container table-responsive">
        <table className="table text-start my-4 align-middle">
          <thead>
            <tr>
              <th>Component</th>
              <th>Selection</th>
              <th>Benchmark</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr key={cpuData ? cpuData._id : null}>
              <td className="component">
                <Link to="/cpu">CPU</Link>
              </td>
              <td>
                {cpuData ? (
                  cpuData.name
                ) : (
                  <Link to="/cpu">
                    <Button variant="contained" size="small">
                      <AddOutlinedIcon
                        style={{ width: "16px", height: "auto" }}
                      />
                      Choose a CPU
                    </Button>
                  </Link>
                )}
              </td>
              <td>{cpuData ? Math.round(cpuData.Benchmark) : ""}</td>
              <td>{cpuData ? `₹${Math.floor(cpuData.price * 85)}` : ""}</td>
              <td>
                {cpuData ? (
                  <CloseIcon
                    onClick={() => {
                      localStorage.removeItem("cpu");
                      setCpuData({});
                    }}
                    style={{ width: "14px" }}
                  />
                ) : (
                  ""
                )}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr key={gpuData ? gpuData._id : null}>
              <td className="component">
                <Link to="/gpu">GPU</Link>
              </td>
              <td>
                {gpuData ? (
                  gpuData.name + " " + gpuData.chipset
                ) : (
                  <Link to="/gpu">
                    <Button variant="contained" size="small">
                      <AddOutlinedIcon
                        style={{ width: "16px", height: "auto" }}
                      />
                      Add a GPU
                    </Button>
                  </Link>
                )}
              </td>
              <td>{gpuData ? Math.floor(gpuData.core_clock / 12) : ""}</td>
              <td>{gpuData ? `₹${Math.floor(gpuData.price * 85)}` : ""}</td>
              <td>
                {gpuData ? (
                  <CloseIcon
                    onClick={() => {
                      localStorage.removeItem("gpu");
                      setGpuData({});
                    }}
                    style={{ width: "14px" }}
                  />
                ) : (
                  ""
                )}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="component">
                <Link to="/ram">RAM</Link>
              </td>
              <td>
                {ramData ? (
                  ramData.name
                ) : (
                  <Link to="/ram">
                    <Button variant="contained" size="small">
                      <AddOutlinedIcon
                        style={{ width: "16px", height: "auto" }}
                      />
                      Choose Memory
                    </Button>
                  </Link>
                )}
              </td>
              <td>{ramData ? Math.floor(ramData.price) : ""}</td>
              <td>{ramData ? `₹${Math.floor(ramData.price * 85)}` : ""}</td>
              <td>
                {ramData ? (
                  <CloseIcon
                    onClick={() => {
                      localStorage.removeItem("ram");
                      setRamData({});
                    }}
                    style={{ width: "14px" }}
                  />
                ) : (
                  ""
                )}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="component">
                <Link to="/ssd">SSD</Link>
              </td>
              <td>
                {ssdData ? (
                  ssdData.name + " " + ssdData.capacity + "gb"
                ) : (
                  <Link to="/ssd">
                    <Button variant="contained" size="small">
                      <AddOutlinedIcon
                        style={{ width: "16px", height: "auto" }}
                      />
                      Choose Storage
                    </Button>
                  </Link>
                )}
              </td>
              <td>{ssdData ? Math.floor(ssdData.price) : ""}</td>
              <td>{ssdData ? `₹${Math.floor(ssdData.price * 85)}` : ""}</td>
              <td>
                {ssdData ? (
                  <CloseIcon
                    onClick={() => {
                      localStorage.removeItem("ssd");
                    }}
                    style={{ width: "14px" }}
                  />
                ) : (
                  ""
                )}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="component">
                <Link to="/hdd">HDD</Link>
              </td>
              <td>
                {hddData ? (
                  hddData.name
                ) : (
                  <Link to="/hdd">
                    <Button variant="contained" size="small">
                      <AddOutlinedIcon
                        style={{ width: "16px", height: "auto" }}
                      />
                      Choose External Storage
                    </Button>
                  </Link>
                )}
              </td>
              <td>{hddData ? Math.floor(hddData.price) : ""}</td>
              <td>{hddData ? `₹${Math.floor(hddData.price * 85)}` : ""}</td>
              <td>
                {hddData ? (
                  <CloseIcon
                    onClick={() => {
                      localStorage.removeItem("hdd");
                      setHddData({});
                    }}
                    style={{ width: "14px" }}
                  />
                ) : (
                  ""
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container cost text-end" style={{ fontSize: "20px" }}>
        Total: ₹
        <span style={{ fontWeight: "bold", marginRight: "85px" }}>
          {totalPrice}
        </span>
      </div>

      <div className="performace container text-start">
        <h5>Performace</h5>
        <hr />
        <div className="virtual-bench px-3 mb-4">
          <h6>Virtual Benchmarks</h6>
          <div className="d-lg-flex justify-content-lg-center gap-5">
            <div className="py-3">
              <SportsEsportsIcon />
              Gaming&nbsp;
              {" " + virtualBenchGame > 400
                ? virtualBenchGame - 114
                : virtualBenchGame}
              %
            </div>
            <div className="py-3">
              <OndemandVideoIcon />
              WorkStation&nbsp;
              {virtualBenchVid > 400 ? virtualBenchVid - 142 : virtualBenchVid}%
            </div>
            <div className="py-3">
              <MouseIcon />
              Dekstop&nbsp;
              {virtualBenchOff > 200 ? virtualBenchOff - 89 : virtualBenchOff}%
            </div>
          </div>
          <hr />
        </div>

        {/* Fps table */}
        <div className="fps px-3">
          <h6>Frames Per Second</h6>
          <div className="table-responsive-lg">
            <table className="table table-sm table-2 align-middle">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th colSpan={3} className="text-center">Avg FPS</th>
                </tr>
                <tr>
                  <th></th>
                  <th></th>
                  <th>1080p</th>
                  <th>2k</th>
                  <th>4k</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td
                    className="d-flex align-items-center"
                    style={{ fontWeight: "600" }}
                  >
                    <div className="d-flex flex-column flex-lg-row align-items-center">
                      <img
                        src={valoLogo}
                        className="img-fluid me-sm-2 mb-2"
                        style={{ maxWidth: "200px" }}
                        alt=""
                      />
                      Valorant
                    </div>
                  </td>
                  <td>{Math.floor(virtualBenchGame * 2.37)}</td>
                  <td>{Math.floor(virtualBenchGame * 1.773)}</td>
                  <td>{Math.floor(virtualBenchGame * 1.094)}</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td
                    className="d-flex align-items-center"
                    style={{ fontWeight: "600" }}
                  >
                    <div className="d-flex flex-column flex-lg-row align-items-center">
                      <img
                        src={overwatchLogo}
                        className="img-fluid me-sm-2 mb-2"
                        style={{ maxWidth: "200px" }}
                        alt=""
                      />
                      Overwatch 2
                    </div>
                  </td>
                  <td>{Math.floor(virtualBenchGame * 1.19)}</td>
                  <td>{Math.floor(virtualBenchGame * 0.88)}</td>
                  <td>{Math.floor(virtualBenchGame * 0.43)}</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td
                    className="d-flex align-items-center"
                    style={{ fontWeight: "600" }}
                  >
                    <div className="d-flex flex-column flex-lg-row align-items-center">
                      <img
                        src={gtaLogo}
                        className="img-fluid me-sm-2 mb-2"
                        style={{ maxWidth: "200px" }}
                        alt=""
                      />
                      Gta V
                    </div>
                  </td>
                  <td>{Math.floor(virtualBenchGame * 0.43)}</td>
                  <td>{Math.floor(virtualBenchGame * 0.338)}</td>
                  <td>{Math.floor(virtualBenchGame * 0.223)}</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td
                    className="d-flex align-items-center"
                    style={{ fontWeight: "600" }}
                  >
                    <div className="d-flex flex-column flex-lg-row align-items-center">
                      <img
                        src={forzaLogo}
                        className="img-fluid me-sm-2 mb-2"
                        style={{ maxWidth: "200px" }}
                        alt=""
                      />
                      Forza Horizon 5
                    </div>
                  </td>
                  <td>{Math.floor(virtualBenchGame * 0.46)}</td>
                  <td>{Math.floor(virtualBenchGame * 0.364)}</td>
                  <td>{Math.floor(virtualBenchGame * 0.27)}</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td
                    className="d-flex align-items-center"
                    style={{ fontWeight: "600" }}
                  >
                    <div className="d-flex flex-column flex-lg-row align-items-center">
                      <img
                        src={rdrLogo}
                        className="img-fluid me-sm-2 mb-2"
                        style={{ maxWidth: "200px" }}
                        alt=""
                      />
                      Red Dead Redemption 2
                    </div>
                  </td>
                  <td>{Math.floor(virtualBenchGame * 0.4)}</td>
                  <td>{Math.floor(virtualBenchGame * 0.32)}</td>
                  <td>{Math.floor(virtualBenchGame * 0.225)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Productivity table */}
        {/* Fps table */}
        {/* <div className="fps px-3 mt-5">
          <h6>Productivity results</h6>
          <div className="table-responsive-lg">
            <table className="table table-sm table-2 align-middle">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th colSpan={3} className="text-center">Avg FPS</th>
                </tr>
                <tr>
                  <th></th>
                  <th></th>
                  <th>1080p</th>
                  <th>2k</th>
                  <th>4k</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td
                    className="d-flex align-items-center"
                    style={{ fontWeight: "600" }}
                  >
                    <div className="d-flex flex-column flex-lg-row align-items-center">
                      <img
                        src={valoLogo}
                        className="img-fluid me-sm-2 mb-2"
                        style={{ maxWidth: "200px" }}
                        alt=""
                      />
                      Valorant
                    </div>
                  </td>
                  <td>{Math.floor(virtualBenchGame * 2.37)}</td>
                  <td>{Math.floor(virtualBenchGame * 1.773)}</td>
                  <td>{Math.floor(virtualBenchGame * 1.094)}</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td
                    className="d-flex align-items-center"
                    style={{ fontWeight: "600" }}
                  >
                    <div className="d-flex flex-column flex-lg-row align-items-center">
                      <img
                        src={overwatchLogo}
                        className="img-fluid me-sm-2 mb-2"
                        style={{ maxWidth: "200px" }}
                        alt=""
                      />
                      Overwatch 2
                    </div>
                  </td>
                  <td>{Math.floor(virtualBenchGame * 1.19)}</td>
                  <td>{Math.floor(virtualBenchGame * 0.88)}</td>
                  <td>{Math.floor(virtualBenchGame * 0.43)}</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td
                    className="d-flex align-items-center"
                    style={{ fontWeight: "600" }}
                  >
                    <div className="d-flex flex-column flex-lg-row align-items-center">
                      <img
                        src={gtaLogo}
                        className="img-fluid me-sm-2 mb-2"
                        style={{ maxWidth: "200px" }}
                        alt=""
                      />
                      Gta V
                    </div>
                  </td>
                  <td>{Math.floor(virtualBenchGame * 0.43)}</td>
                  <td>{Math.floor(virtualBenchGame * 0.338)}</td>
                  <td>{Math.floor(virtualBenchGame * 0.223)}</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td
                    className="d-flex align-items-center"
                    style={{ fontWeight: "600" }}
                  >
                    <div className="d-flex flex-column flex-lg-row align-items-center">
                      <img
                        src={forzaLogo}
                        className="img-fluid me-sm-2 mb-2"
                        style={{ maxWidth: "200px" }}
                        alt=""
                      />
                      Forza Horizon 5
                    </div>
                  </td>
                  <td>{Math.floor(virtualBenchGame * 0.46)}</td>
                  <td>{Math.floor(virtualBenchGame * 0.364)}</td>
                  <td>{Math.floor(virtualBenchGame * 0.27)}</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td
                    className="d-flex align-items-center"
                    style={{ fontWeight: "600" }}
                  >
                    <div className="d-flex flex-column flex-lg-row align-items-center">
                      <img
                        src={rdrLogo}
                        className="img-fluid me-sm-2 mb-2"
                        style={{ maxWidth: "200px" }}
                        alt=""
                      />
                      Red Dead Redemption 2
                    </div>
                  </td>
                  <td>{Math.floor(virtualBenchGame * 0.4)}</td>
                  <td>{Math.floor(virtualBenchGame * 0.32)}</td>
                  <td>{Math.floor(virtualBenchGame * 0.225)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Build;
