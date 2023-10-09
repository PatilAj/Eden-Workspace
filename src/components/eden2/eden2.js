import React from "react";
import "./eden2.css";

function Eden2() {

  return (
    <>
      <div className="eden2_body">
        <div className="eden2_header">
          <h1 className="title-header">Let's set up a home for all your work</h1>
          <p className="para">You can always create another workspace later.</p>
        </div>
        <form className="eden2_content">
          <div className="form-group">
            <label htmlFor="workspaceName">Workspace Name</label>
           <input type="text" id="workspaceName" placeholder="Workspace Name" />
          </div>
          <br />
          <div className="input-group">
            <label htmlFor="workspaceUrl">Workspace Url (Optional)</label>
            <div className="field-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">
                  www.eden.com/
                </span>
              </div>
              <input className="email-input" type="text" id="workspaceUrl" placeholder="Example" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Eden2;
