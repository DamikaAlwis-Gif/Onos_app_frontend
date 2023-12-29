import React from 'react'
import "./Add.css"
import Button from "@mui/material/Button";
const Add = () => {
  return (
    <div className="row">
      <div>
        <form>
          <label for="name">Queue Type</label>
          <input type="text" id="name" name="name" required></input>

          <label >Max Rate</label>
          <input type="text"  required></input>

          <label >Min Rate</label>
          <input type="text"  required></input>

          <label>Priority</label>
          <input type="text"  required></input>

          <label >Descriptions</label>
          <input type="text"  required></input>
         
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                margin: "10px",
              }}
            >
              <button className="submit-button">Submit</button>
            </div>
            <div
              style={{
                margin: "10px",
              }}
            >
              <button className="clear-button">Clear</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Add