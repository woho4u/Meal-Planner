import React from "react";

const Meal = ({ mealname }) => {
  return (
    <>
      <div
        className="w-50 gray1-bg p-5 my-5 rounded-lg"
        style={{ maxWidth: "50em" }}
      >
        <h1 className="font-bold">{mealname}</h1>
        <div className=""></div>
      </div>
    </>
  );
};

export default Meal;
