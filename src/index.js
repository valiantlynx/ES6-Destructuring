import animals, { useAnimals } from "./data";
import cars from "./practice";

//destructuring arrays
// const [cat, dog] = animals;
// console.log(cat);

//destructuring objects, and default parameters
// const { name: catName, sound: catSound } = cat; //you can gve the custom names
// console.log(catSound);

// const { name = "catName", sound = "catSound" } = cat; //you can gve the custom values, these are default value and will render if the value does not exist
// console.log(name);

//destructuring nested objects
// const {name, sound, feedingReqiurements: {food, water}} = cat;
// console.log(food);

// const [animal, makeSound] = useAnimals(cat);
// console.log(makeSound());

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";

const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;

const {
  coloursByPopularity: [hondaTopColour]
} = honda;
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
