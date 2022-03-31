import React from "react";
import "./Meal.css";

const Meal = (props) => {
  const { strMeal, strInstructions, strMealThumb } = props.meal;
  const { handleAddToOrder, meal } = props;
  return (
    <div className="meal">
      <img src={strMealThumb} alt="" />
      <div className="meal-info">
        <h4 className="meal-name">{strMeal}</h4>
        <p>{strInstructions.slice(0, 100)}</p>
        <button className="btn-cart" onClick={() => handleAddToOrder(meal)}>
          Add this Food
        </button>
      </div>
    </div>
  );
};

export default Meal;
