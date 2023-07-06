import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cardArr = robots.map((data) => {
    return <Card key={data.id} robot={data} />;
  });
  return <div>{cardArr}</div>;
};

export default CardList;
