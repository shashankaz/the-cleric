import React from "react";
import "./List.scss";
import Card from "../Card/Card";

const List = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/3053485/pexels-photo-3053485.jpeg",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 1900,
      price: 1200,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1918084/pexels-photo-1918084.jpeg",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 1900,
      price: 1200,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 1900,
      price: 1200,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/3252785/pexels-photo-3252785.jpeg",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 1900,
      price: 1200,
    },
  ];
  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
