import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import classes from "./Meals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "White Bean Chicken Soup",
    description:
      "Brightened with fresh dill, a squeeze of lemon juice and a little jalapeño",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Coconut Curry Lentil Soup",
    description: "A creamy, rich coconut curry broth loaded with veggies",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Tomato Bisque with Fried Cheese",
    description:
      "The perfect update to the classic grilled cheese and tomato soup",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Corn and Leek Bisque",
    description: "Simple and stunning!",
    price: 18.99,
  },
];

export default function Meals() {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem
              id={meal.id}
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
}
