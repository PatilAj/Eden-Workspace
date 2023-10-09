import React, { useState } from "react";
import "./eden3.css";

function Eden3() {
  const [myselfChecked, setMyselfChecked] = useState(false);
  const [teamChecked, setTeamChecked] = useState(false);

  const handleMyselfClick = () => {
    setMyselfChecked(!myselfChecked);
    setTeamChecked(false);
  };

  const handleTeamClick = () => {
    setTeamChecked(!teamChecked);
    setMyselfChecked(false);
  };

  return (
    <>
      <div className="eden3_body">
        <div className="eden3_header">
          <h1 className="title-header">How are you planning to use Eden?</h1>
          <p className="para">We'll streamline your experience accordingly.</p>
        </div>
        <div className="optional-card">
          <div
            className={`card ${myselfChecked ? "checked" : ""}`}
            onClick={handleMyselfClick}
          >
            <div className="card-body">
              <div className={`Self-icon ${myselfChecked ? "checked" : ""}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="2rem"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
              </div>
              <h5 className="card-title">For Myself</h5>
              <p className="card-text">
                Write better. Think more clearly. Stay organized.
                <br />
              </p>
            </div>
          </div>
          <div
            className={`card ${teamChecked ? "checked" : ""}`}
            onClick={handleTeamClick}
          >
            <div className="card-body">
              <div className={`Self-icon ${teamChecked ? "checked" : ""}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="2rem"
                  viewBox="0 0 640 512"
                >
                  <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
                </svg>
              </div>
              <h5 className="card-title">With my team</h5>
              <p className="card-text">
                Wikis, docs, tasks & projects, all in one place.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Eden3;
