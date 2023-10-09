import React, { useEffect, useState } from "react";
import Circle from "./components/Circle";
import "./components/Progress.css";
import Eden1 from "./components/eden1/eden1";
import Eden2 from "./components/eden2/eden2";
import Eden3 from "./components/eden3/eden3";
import Eden4 from "./components/eden4/eden4";

function App() {
  const [circle] = useState(4);
  const [active, setActive] = useState(1);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth((100 / (circle - 1)) * (active - 1));
  }, [circle, active]);

  const arr = [];
  for (let i = 1; i <= circle; i++) {
    arr.push(
      <Circle className={i <= active ? "circle active" : "circle"} key={i}>
        {i}
      </Circle>
    );
  }

  const renderComponent = () => {
    switch (active) {
      case 1:
        return <Eden1 />;
      case 2:
        return <Eden2 />;
      case 3:
        return <Eden3 />;
      case 4:
        return <Eden4 />;
      default:
        return null;
    }
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="header">
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M64 416L168.6 180.7c15.3-34.4 40.3-63.5 72-83.7l146.9-94c3-1.9 6.5-2.9 10-2.9C407.7 0 416 8.3 416 18.6v1.6c0 2.6-.5 5.1-1.4 7.5L354.8 176.9c-1.9 4.7-2.8 9.7-2.8 14.7c0 5.5 1.2 11 3.4 16.1L448 416H240.9l11.8-35.4 40.4-13.5c6.5-2.2 10.9-8.3 10.9-15.2s-4.4-13-10.9-15.2l-40.4-13.5-13.5-40.4C237 276.4 230.9 272 224 272s-13 4.4-15.2 10.9l-13.5 40.4-40.4 13.5C148.4 339 144 345.1 144 352s4.4 13 10.9 15.2l40.4 13.5L207.1 416H64zM279.6 141.5c-1.1-3.3-4.1-5.5-7.6-5.5s-6.5 2.2-7.6 5.5l-6.7 20.2-20.2 6.7c-3.3 1.1-5.5 4.1-5.5 7.6s2.2 6.5 5.5 7.6l20.2 6.7 6.7 20.2c1.1 3.3 4.1 5.5 7.6 5.5s6.5-2.2 7.6-5.5l6.7-20.2 20.2-6.7c3.3-1.1 5.5-4.1 5.5-7.6s-2.2-6.5-5.5-7.6l-20.2-6.7-6.7-20.2zM32 448H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
            </svg>
            <h1 className="edenTitle">Eden</h1>
          </div>
          <div className="content">
            <div className="progressBar">
              <div className="progress" style={{ width: width + "%" }}></div>
              {arr}
            </div>
            <div className="Eden-body">{renderComponent()}</div>
            <div className="button">
              <button
                className="create-btn"
                onClick={() => {
                  if (active < circle) {
                    setActive(active + 1);
                  }
                }}
              >
                {active < circle ? "Create Workspace" : "Launch Eden"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
