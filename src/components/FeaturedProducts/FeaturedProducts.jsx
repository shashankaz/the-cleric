import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/3053485/pexels-photo-3053485.jpeg?auto=compress&cs=tinysrgb&w=800",
      img2: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 1900,
      price: 1200,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1918084/pexels-photo-1918084.jpeg?auto=compress&cs=tinysrgb&w=800",
      img2: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 1900,
      price: 1200,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=800",
      img2: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 1900,
      price: 1200,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/3252785/pexels-photo-3252785.jpeg?auto=compress&cs=tinysrgb&w=800",
      img2: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 1900,
      price: 1200,
    },
  ];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
          distinctio perspiciatis beatae eius velit molestias autem praesentium,
          est nihil magni exercitationem doloremque a, quibusdam dolores dolor
          ut ab optio laboriosam?
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
