import React, { useEffect, useState } from "react";
import classes from "./AvailableMeal.module.css";
import Card from "../UI/Card";
import MealsItems from "./MealsItems";
// const Dummy = [
//   { id: "m1", title: "Sushi", description: "Finest fish", price: 22 },
//   { id: "m2", title: "Burger", description: "cheese paneer", price: 33 },
//   { id: "m3", title: "Pizza", description: "Mozzarella", price: 44 },
//   { id: "m4", title: "Hot-Dog", description: "Bread", price: 55 },
//   { id: "m5", title: "Sandwich", description: "Veggie", price: 66 },
// ];

function AvailableMeal() {
  const [httpError, setHttpError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-45ad2-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!!!");
      }
      const responseData = await response.json();
      // console.log(responseData["m1"]);
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          title: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      // console.log(loadedMeals);
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);
  const mealsList = meals.map((item) => (
    <MealsItems
      id={item.id}
      key={item.id}
      title={item.title}
      description={item.description}
      price={item.price}
    />
  ));
  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <h1>Loading ...</h1>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className={classes.mealsEror}>
        <h1>{httpError}</h1>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeal;
