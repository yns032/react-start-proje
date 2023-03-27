import React from "react";
import "./card.css";
import Image from "../image/Image";
import Title from "../title/Title";
import Info from "../info/Info";

function Card({ title, image, info, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-body">
        <Title title={title} />
        <Image image={image} />
        <Info info={info} />
      </div>
    </div>
  );
}

export default Card;
