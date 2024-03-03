import React from "react";

import cpuHome from "../../assests/CPU_home.png";
import gpuHome from "../../assests/GPU_home.png";
import ssdHome from "../../assests/SSD_128.png";
import hddHome from "../../assests/HDD_128.png";
import ramHome from "../../assests/RAM_128.png";
import buildDoodle from "../../assests/buildDoodle.png";
import buildVid from "../../assests/buildVid.mp4";

import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
import "./styles.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home container-fluid pt-5 px-0">
      {/* Hero */}
      <div className="hero mx-auto pb-4">
        <h1 className="head-1">
          Pick Parts. Build Your PC. Compare and Share.
        </h1>
        <p className="px-5">
          We provide part selection, pricing, hardware benchmarks and guidance
          for do-it-yourself computer builders.
        </p>
        <Link to="/build">
          <div className="btn custom-btn my-3">
            <WrenchScrewdriverIcon
              className="me-2"
              style={{ width: "15px", height: "15px" }}
            />
            Start your build
          </div>
        </Link>
      </div>

      {/* Build Help */}
      <div
        className="p-2"
        style={{
          backgroundColor: "#545578",
          color: "#fff",
          width: "100%",
          height: "80vh",
        }}
      >
        <div className="container my-5">
          <h1 className="head-1 mb-4">Need help with your build?</h1>
          <div className="row">
            <div className="col-lg-5 p-3">
              <p
                className="px-3"
                style={{ fontSize: "15px", textAlign: "left" }}
              >
                Check out our cutting-edge AI-driven hardware selection tool,
                your ultimate companion in crafting the perfect computing
                experience. Navigating the vast landscape of hardware components
                can be a daunting task, but fear not – our intelligent solution
                is here to simplify the process for you. Powered by
                state-of-the-art machine learning algorithms, our tool analyzes
                your specific needs, preferences, and budget constraints to
                provide tailored recommendations for your build. Whether you're
                a seasoned enthusiast or a first-time builder, our AI tool
                ensures that you make informed decisions about processors,
                graphics cards, memory modules, storage solutions, and more. We
                stay up-to-date with the latest industry trends and benchmarks,
                guaranteeing that you receive recommendations based on the most
                current and relevant information.
              </p>
            </div>
            <div className="col-lg-7">
              <video
                style={{ maxWidth: "80%", height: "auto" }}
                autoPlay="true"
                loop
              >
                <source src={buildVid} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Hardware Components */}
      <div className="hw container my-5">
        <div className="row justify-content-center">
          <h1 className="head-1 mb-5">Explore your hardware components</h1>
          <div className="col-lg-2">
            <Link to="/cpu" className="homePageLinks">
              <img
                src={cpuHome}
                style={{ width: "94px", height: "94px" }}
                alt=""
              />
              <h5>CPU</h5>
            </Link>
          </div>

          <div className="col-lg-2">
            <Link to="/gpu" className="homePageLinks">
              <img
                src={gpuHome}
                style={{ width: "94px", height: "94px" }}
                alt=""
              />
              <h5>GPU</h5>
            </Link>
          </div>

          <div className="col-lg-2">
            <Link to="/ssd" className="homePageLinks">
              <img
                src={ssdHome}
                style={{ width: "94px", height: "94px" }}
                alt=""
              />
              <h5>SSD</h5>
            </Link>
          </div>

          <div className="col-lg-2">
            <Link to="/hdd" className="homePageLinks">
              <img
                src={hddHome}
                style={{ width: "94px", height: "94px" }}
                alt=""
              />
              <h5>HDD</h5>
            </Link>
          </div>

          <div className="col-lg-2">
            <Link to="/ram" className="homePageLinks">
              <img
                src={ramHome}
                style={{ width: "94px", height: "94px" }}
                alt=""
              />
              <h5>RAM</h5>
            </Link>
          </div>
        </div>
      </div>

      {/* Our Completed Build */}
      <div
        className="ourBuilds p-4"
        style={{ backgroundColor: "#545578", color: "#fff" }}
      >
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-3">
              <h1 className="head-1">Completed Builds</h1>
              <p
                className="pe-lg-5 ps-lg-5"
                style={{ fontSize: "15px", textAlign: "left" }}
              >
                Browse PC builds recommended by us showing their partlist,
                overall specs and benchamrks.
              </p>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <img
                  src={buildDoodle}
                  alt=""
                  style={{ maxWidth: "100%", height: "40%" }}
                />
                <div className="card-body text-start">
                  <h5 className="card-title text-center">
                    Entry level gaming build
                  </h5>
                  <div className="d-flex gap-3 mb-2">
                    <p className="type-1">Cpu:</p>
                    <p className="type-2">Intel i5-10500</p>
                  </div>
                  <div className="d-flex gap-3 mb-2">
                    <p className="type-1">Gpu:</p>
                    <p className="type-2">Nvidia GeForce RTX 3050 4GB</p>
                  </div>
                  <div className="d-flex gap-3 mb-2">
                    <p className="type-1">Ram:</p>
                    <p className="type-2">Adata D60 Spectrix 2x8GB</p>
                  </div>
                  <div className="d-flex gap-3">
                    <p className="type-1">Ssd:</p>
                    <p className="type-2">Kingston fury 500gb</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="card">
                <img
                  src={buildDoodle}
                  alt=""
                  style={{ maxWidth: "100%", height: "40%" }}
                />
                <div className="card-body text-start">
                  <h5 className="card-title text-center">
                    Entry level video editing build
                  </h5>
                  <div className="d-flex gap-3 mb-2">
                    <p className="type-1">Cpu:</p>
                    <p className="type-2">AMD Ryzen 5600x</p>
                  </div>
                  <div className="d-flex gap-3 mb-2">
                    <p className="type-1">Gpu:</p>
                    <p className="type-2">Nvidia GeForce RTX 3060ti 6GB</p>
                  </div>
                  <div className="d-flex gap-3 mb-2">
                    <p className="type-1">Ram:</p>
                    <p className="type-2">Teamgroup T-force delta 2x16GB</p>
                  </div>
                  <div className="d-flex gap-3 mb-2">
                    <p className="type-1">Ssd:</p>
                    <p className="type-2">Crucial P3 plus 500GB</p>
                  </div>
                  <div className="d-flex gap-3">
                    <p className="type-1">Hdd:</p>
                    <p className="type-2">Crucial X6 1TB</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="card">
                <img
                  src={buildDoodle}
                  alt=""
                  style={{ maxWidth: "100%", height: "40%" }}
                />
                <div className="card-body text-start">
                  <h5 className="card-title text-center">
                    Entry level office build
                  </h5>
                  <div className="d-flex gap-3 mb-2">
                    <p className="type-1">Cpu:</p>
                    <p className="type-2">Intel i7-10700</p>
                  </div>
                  <div className="d-flex gap-3 mb-2">
                    <p className="type-1">Ram:</p>
                    <p className="type-2">Corsair Vengeane LPX 1x8GB</p>
                  </div>
                  <div className="d-flex gap-3 mb-2">
                    <p className="type-1">Ssd:</p>
                    <p className="type-2">Western Digital SN750 Black 500GB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
