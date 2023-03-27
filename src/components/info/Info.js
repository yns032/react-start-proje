import React from "react";
import "./info.css";
function Info({ info }) {
  return (
    <div style={{ textAlign: "center", fontSize: "20px", color: "red" }}>
      {info}
    </div>
  );
}

export default Info;
