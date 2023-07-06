import React from "react";
import "./Card.css";

const Card = ({ robot }) => {
  const { id, name, email } = robot;
  return (
    <div className="tc dib br3 pa3 ma2 grow bw2 shadow-5 container">
      <img src={`https://robohash.org/${id}?size=235x200`} alt="robot" />
      <div>
        <h2 className="name">{name}</h2>
        <p className="email">{email}</p>
      </div>
    </div>
  );
};

export default Card;
