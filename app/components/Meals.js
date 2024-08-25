import React from "react";
import Meal from "./Meal";

const Meals = () => {
  let meals = ["Breakfast", "Lunch", "Dinner", "Snack"];
  return (
    <>
      <div className="flex flex-col h-5/6 w-2/5">
        {[...Array(meals.length)].map((_, i) => (
          <Meal mealname={meals[i]} key={i} />
        ))}
      </div>
    </>
  );
};

export default Meals;
