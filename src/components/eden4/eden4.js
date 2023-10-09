import React from "react";
import "./eden4.css";

function Eden4() {
  return (
    <>
      <div className="eden4_body">
      <div className="done-icon">
      <svg className="tick" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
      </div>
        <div className="eden4_header">
          <h1 className="title-header">Congratulation, Jane</h1>
          <p className="para">You have completed onboarding, you can start using the Eden!.</p>
        </div>
      </div>
    </>
  );
}
export default Eden4;
