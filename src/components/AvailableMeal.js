import React from "react";
import classes from "./AvailableMeal.module.css";
import Card from "../UI/Card";
import MealsItems from "./MealsItems";
const Dummy = [
  { id: "m1", title: "Sushi", description: "Finest fish", price: 22 },
  { id: "m2", title: "Burger", description: "cheese paneer", price: 33 },
  { id: "m3", title: "Pizza", description: "Mozzarella", price: 44 },
  { id: "m4", title: "Hot-Dog", description: "Bread", price: 55 },
  { id: "m5", title: "Sandwich", description: "Veggie", price: 66 },
];

function AvailableMeal() {
  const mealsList = Dummy.map((item) => (
    <MealsItems
      id={item.id}
      key={item.id}
      title={item.title}
      description={item.description}
      price={item.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeal;
