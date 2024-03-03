import React, { useState } from "react";
import "./compareStyles.css";
import SelectionOne from "./SelectionOne";
import SelectionTwo from "./SelectionTwo";

const Compare = () => {
  const [selection, setSelection] = useState("cpu");
  const [firstComponent, setFirstComponent] = useState({});
  const [secondComponent, setSecondComponent] = useState({});

  const cpu = (field, score, component) => {
    let localVal;
    if (field === "singleCore" && score === "avg")
      localVal =
        Math.round(
          component.Benchmark * (Math.random() * (1.68 - 1.44) + 1.44)
        ) || null;
    else if (field === "dualCore" && score === "avg")
      localVal =
        Math.round(
          component.Benchmark * (Math.random() * (1.68 - 1.44) + 1.44) * 2
        ) || null;
    else if (field === "quadCore" && score === "avg")
      localVal =
        Math.round(
          component.Benchmark * (Math.random() * (1.68 - 1.44) + 1.44) * 3.8
        ) || null;
    else if (field === "octaCore" && score === "avg")
      localVal =
        Math.round(
          component.Benchmark * (Math.random() * (1.68 - 1.44) + 1.44) * 7.3
        ) || null;

    return localVal;
  };

  const gpu = (field, score, component) => {
    if (field === "Mrender" && score === "avg"){
      if (
        component.Mrender &&
        Array.isArray(component.Mrender) &&
        component.Mrender.length > 0
      )
        return component.Mrender[0];
      else return 0;
    }
    else if (field === "Mrender" && score === "ov"){
      if (
        component.Mrender &&
        Array.isArray(component.Mrender) &&
        component.Mrender.length > 0
      )
        return component.Mrender[1];
      else return 0;
    }
    else if (field === "lighting" && score === "avg"){
      if (
        component.Lighting &&
        Array.isArray(component.Lighting) &&
        component.Lighting.length > 0
      )
        return component.Lighting[0];
      else return 0;
    }
    else if (field === "lighting" && score === "ov"){
      if (
        component.Lighting &&
        Array.isArray(component.Lighting) &&
        component.Lighting.length > 0
      )
        return component.Lighting[1];
      else return 0;
    }
    else if (field === "reflection" && score === "avg"){
      if (
        component.Reflection &&
        Array.isArray(component.Reflection) &&
        component.Reflection.length > 0
      )
        return component.Reflection[0];
      else return 0;
    }
    else if (field === "reflection" && score === "ov"){
      if (
        component.Reflection &&
        Array.isArray(component.Reflection) &&
        component.Reflection.length > 0
      )
        return component.Reflection[1];
      else return 0;
    }
    else if (field === "gravity" && score === "avg"){
      if (
        component.Gravity &&
        Array.isArray(component.Gravity) &&
        component.Gravity.length > 0
      )
        return component.Gravity[0];
      else return 0;
    }
    else if (field === "gravity" && score === "ov"){
      if (
        component.Gravity &&
        Array.isArray(component.Gravity) &&
        component.Gravity.length > 0
      )
        return component.Gravity[1];
      else return 0;
    }
  };

  const handleClick = (value) => {
    setSelection(value);
  };

  const decideHTML = () => {
    if (selection === "cpu") {
      return (
        <>
          <div className="px-3">
            <h5 className="text-start">Average Score</h5>
            <div className="row">
              <div className="col-4">
                <div className="card px-2">
                  <div className="card-body">
                    <h6 className="card-title text-start">Single Core</h6>
                    <div className="progress mb-2">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width:
                            cpu("singleCore", "avg", firstComponent) / 2 + "%",
                        }}
                        aria-valuenow={
                          cpu("singleCore", "avg", firstComponent) / 2
                        }
                        aria-valuemin="0"
                        aria-valuemax="180"
                      >
                        {firstComponent.name}
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bar-2"
                        role="progressbar"
                        style={{
                          width:
                            cpu("singleCore", "avg", secondComponent) / 2 + "%",
                        }}
                        aria-valuenow={
                          cpu("singleCore", "avg", secondComponent) / 2
                        }
                        aria-valuemin="0"
                        aria-valuemax="180"
                      >
                        {secondComponent.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card px-2">
                  <div className="card-body">
                    <h6 className="card-title text-start">Dual Core</h6>
                    <div className="progress mb-2">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width:
                            cpu("dualCore", "avg", firstComponent) / 4 + "%",
                        }}
                        aria-valuenow={
                          cpu("dualCore", "avg", firstComponent) / 4
                        }
                        aria-valuemin="0"
                        aria-valuemax="180"
                      >
                        {firstComponent.name}
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bar-2"
                        role="progressbar"
                        style={{
                          width:
                            cpu("dualCore", "avg", secondComponent) / 4 + "%",
                        }}
                        aria-valuenow={
                          cpu("duallCore", "avg", secondComponent) / 4
                        }
                        aria-valuemin="0"
                        aria-valuemax="180"
                      >
                        {secondComponent.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card px-2">
                  <div className="card-body">
                    <h6 className="card-title text-start">Quad Core</h6>
                    <div className="progress mb-2">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width:
                            cpu("quadCore", "avg", firstComponent) / 7 + "%",
                        }}
                        aria-valuenow={
                          cpu("quadCore", "avg", firstComponent) / 7
                        }
                        aria-valuemin="0"
                        aria-valuemax="180"
                      >
                        {firstComponent.name}
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bar-2"
                        role="progressbar"
                        style={{
                          width:
                            cpu("quadCore", "avg", secondComponent) / 7 + "%",
                        }}
                        aria-valuenow={
                          cpu("quadCore", "avg", secondComponent) / 7
                        }
                        aria-valuemin="0"
                        aria-valuemax="180"
                      >
                        {secondComponent.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 mt-lg-2">
                <div className="card px-2">
                  <div className="card-body">
                    <h6 className="card-title text-start">Octa Core</h6>
                    <div className="progress mb-2">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width:
                            cpu("octaCore", "avg", firstComponent) / 15 + "%",
                        }}
                        aria-valuenow={
                          cpu("octaCore", "avg", firstComponent) / 15
                        }
                        aria-valuemin="0"
                        aria-valuemax="180"
                      >
                        {firstComponent.name}
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bar-2"
                        role="progressbar"
                        style={{
                          width:
                            cpu("octaCore", "avg", secondComponent) / 15 + "%",
                        }}
                        aria-valuenow={
                          cpu("octaCore", "avg", secondComponent) / 15
                        }
                        aria-valuemin="0"
                        aria-valuemax="180"
                      >
                        {secondComponent.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-3">
            <h5 className="text-start">Overclocked Score</h5>
            <div className="row"></div>
          </div>
        </>
      );
    } else if (selection === "gpu") {
      return (
        <>
          <div className="px-3">
            <h5 className="text-start">Average Score</h5>
            <div className="row">
              <div className="col-lg-4">
                <div className="card px-2">
                  <div className="card-body">
                    <h6 className="card-title text-start">Mrender</h6>
                    <div className="progress mb-2">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width:
                            gpu("Mrender", "avg", firstComponent) / 2 + "%",
                        }}
                        aria-valuenow={
                          gpu("Mrender", "avg", firstComponent) / 2
                        }
                        aria-valuemin="0"
                        aria-valuemax="500"
                      >
                        {firstComponent.name + firstComponent.chipset}
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bar-2"
                        role="progressbar"
                        style={{
                          width:
                            gpu("Mrender", "avg", secondComponent) / 2 + "%",
                        }}
                        aria-valuenow={
                          gpu("Mrender", "avg", secondComponent) / 2
                        }
                        aria-valuemin="0"
                        aria-valuemax="500"
                      >
                        {secondComponent.name + secondComponent.chipset}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card px-2">
                  <div className="card-body">
                    <h6 className="card-title text-start">Lighting</h6>
                    <div className="progress mb-2">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: gpu("lighting", "avg", firstComponent) + "%",
                        }}
                        aria-valuenow={gpu("lighting", "avg", firstComponent)}
                        aria-valuemin="0"
                        aria-valuemax="500"
                      >
                        {firstComponent.name + firstComponent.chipset}
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bar-2"
                        role="progressbar"
                        style={{
                          width: gpu("lighting", "avg", secondComponent) + "%",
                        }}
                        aria-valuenow={gpu("lighting", "avg", secondComponent)}
                        aria-valuemin="0"
                        aria-valuemax="500"
                      >
                        {secondComponent.name + secondComponent.chipset}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card px-2">
                  <div className="card-body">
                    <h6 className="card-title text-start">Reflection</h6>
                    <div className="progress mb-2">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width:
                            gpu("reflection", "avg", firstComponent) / 2 + "%",
                        }}
                        aria-valuenow={
                          gpu("reflection", "avg", firstComponent) / 2
                        }
                        aria-valuemin="0"
                        aria-valuemax="500"
                      >
                        {firstComponent.name + firstComponent.chipset}
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bar-2"
                        role="progressbar"
                        style={{
                          width:
                            gpu("reflection", "avg", secondComponent) / 2 + "%",
                        }}
                        aria-valuenow={
                          gpu("reflection", "avg", secondComponent) / 2
                        }
                        aria-valuemin="0"
                        aria-valuemax="500"
                      >
                        {secondComponent.name + secondComponent.chipset}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-lg-2">
                <div className="card px-2">
                  <div className="card-body">
                    <h6 className="card-title text-start">Gravity</h6>
                    <div className="progress mb-2">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: gpu("gravity", "avg", firstComponent) + "%",
                        }}
                        aria-valuenow={gpu("gravity", "avg", firstComponent)}
                        aria-valuemin="0"
                        aria-valuemax="500"
                      >
                        {firstComponent.name + firstComponent.chipset}
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bar-2"
                        role="progressbar"
                        style={{
                          width: gpu("gravity", "avg", secondComponent) + "%",
                        }}
                        aria-valuenow={gpu("gravity", "avg", secondComponent)}
                        aria-valuemin="0"
                        aria-valuemax="500"
                      >
                        {secondComponent.name + secondComponent.chipset}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-3">
            <h5 className="text-start">Overclocked Score</h5>
            <div className="row"></div>
          </div>
        </>
      );
    }
  };

  return (
    <div style={{ backgroundColor: "#f4f4f3" }}>
      <div className="pt-4" style={{ backgroundColor: "#545578" }}>
        <h4 style={{ color: "#fff" }}>Select a component</h4>
        <nav className="navbar navbar-expand">
          <div className="container-fluid">
            <ul className="navbar-nav mx-auto mb-lg-0">
              <li
                className="selection-link nav-link me-2"
                onClick={() => {
                  handleClick("cpu");
                }}
              >
                CPU
              </li>
              <li
                className="selection-link nav-link me-2"
                onClick={() => {
                  handleClick("gpu");
                }}
              >
                GPU
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Comparison section */}
      <div className="comparison mt-5 container-fluid">
        <div className="row">
          <div className="col-2" style={{ backgroundColor: "#f4f4f3" }}></div>
          <div className="col-5 me-0">
            <SelectionOne
              selection={selection}
              setFirstComponent={setFirstComponent}
            />
          </div>
          <div className="col-5 me-0">
            <SelectionTwo
              selection={selection}
              setSecondComponent={setSecondComponent}
            />
          </div>
        </div>

        {decideHTML()}
      </div>
    </div>
  );
};

export default Compare;
