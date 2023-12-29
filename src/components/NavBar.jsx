import React from "react";
import onosLogo from "../img/onos.png";

const NavBar = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#2A2A2A", padding: 5 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div style={{ width: "50px" }}>
            <img
              src={onosLogo}
              alt="onos logo"
              style={{ width: "40px", borderRadius: "50%", margin: "5px" }}
            />
          </div>
          <div style={{ flex: 1, marginLeft: "10px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  textAlign: "center",
                  color: "white",
                  fontWeight: 500,
                }}
              >
                ONOS Queue Management Application
              </p>
              
              <select
                style={{
                  marginLeft: "50px",
                  padding: "5px",
                  borderRadius: "5px",
                  width: "150px",
                  backgroundColor: "",
                }}
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
