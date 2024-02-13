import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/3053485/pexels-photo-3053485.jpeg",
      img2: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg",
      title: "Long Sleeve Graphic T-shirt",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, voluptates?",
      isNew: true,
      oldPrice: 1900,
      price: 1200,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1918084/pexels-photo-1918084.jpeg",
      title: "Long Sleeve Graphic T-shirt",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, voluptates?",
      isNew: true,
      oldPrice: 1900,
      price: 1200,
    },
  ];

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>Subtotal</span>
        <span>$123</span>
      </div>
      <button>Proced to checkout</button>
      <span className="reset">Reset cart</span>
    </div>
  );
};

export default Cart;
