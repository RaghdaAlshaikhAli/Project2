import React from "react";
import "./style.css";

const FoodItem = ({
  name,
  price2,
  price,
  description,
  type,
  type2,
  image,

}) => {
  return (
    <div className="food_item">
      <div className="food_item_img_container">
        <img className="food_item_img" src={image} alt="" loading="lazy" />
      </div>
      <div className="food_item_info">
        <div className="height">
          <div className="food_item_name_rating">
            <p>{name}</p>
          </div>
          <p className="food_item_desc">{description}</p>
        </div>
        <div className="food_price">
          <p className="food_item_price">{type}</p>
          <p className="food_item_price">{type2}</p>
        </div>
        <div className="food_price">
          <p className="food_item_price">{price} جنيه</p>
          <p className="food_item_price">{price2}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
