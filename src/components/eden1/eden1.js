import React from "react";
import "./eden1.css";

function Eden1() {
  return (
    <>
      <div className="eden1_body">
        <div className="eden1_header">
          <h1 className="title-header">Welcome! First things first...</h1>
          <p className="para">You can always change them later.</p>
        </div>
        <form className="eden1_content">
      <label>Full Name</label>
      <input type="text" id="full-name" placeholder="Steve Jobs" />
      <br />
      <label className="display-name">Display Name</label>
      <input type="text" id="display-name" placeholder="Steve" />
    </form>
      </div>
    </>
  );
}

export default Eden1;
