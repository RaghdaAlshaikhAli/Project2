import React, { useContext } from "react";
import "./style.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "./foodItem";
import { motion } from "framer-motion";

const FoodList = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <motion.div
      className="food-list"
      id="food-list"
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.8, ease: "backOut" } }}
      viewport={{ once: true }}
    >
      <div className="food-list-item">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price2={item.price2}
                price={item.price}
                type={item.type}
                type2={item.type2}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </motion.div>
  );
};

export default FoodList;

{
  /* {food_list && (
  <FoodItem
    meals={food_list.filter((meal) => meal.category === category)}
    key={index}
    id={meal._id}
    name={meal.name}
    description={meal.description}
    price={meal.price}
    image={meal.image}
  />
)} */
}
