import MealsSummmary from "./MealsSummary";
import AvailableMeal from "./AvailableMeal";
import React from "react";

function Meals() {
  return (
    <React.Fragment>
      <MealsSummmary />
      <AvailableMeal />
    </React.Fragment>
  );
}

export default Meals;
