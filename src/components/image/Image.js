import React from "react";
import "./image.css";
function Image({ image }) {
  return (
    <div className="card-image">
      <img src={image} />
    </div>
  );
}

export default Image;
