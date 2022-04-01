import level1 from "../images/level1.jpeg";
import ps5controller from "../images/ps5controller.png";
import cat from "../images/cat.png";
import drink from "../images/drink.png";

import level2 from "../images/level2.jpeg";
import lamp from "../images/lamp.png";
import plant from "../images/plant.png";
import toilet from "../images/toilet.png";

import level3 from "../images/level3.jpeg";
import cactus from "../images/cactus.png";
import coughingMan from "../images/coughing-man.png";
import squirrel from "../images/squirrel.png";

import level4 from "../images/level4.png";
import turtle from "../images/turtle.png";
import volcano from "../images/volcano.png";
import wheel from "../images/wheel.png";

import level5 from "../images/level5.jpeg";
import motorcyclist from "../images/motorcyclist.png";
import mug from "../images/mug.png";
import statue from "../images/statue.png";
import uniqid from "uniqid";

const levels = [
  {
    id: uniqid(),
    title: "Level 1",
    imgURL: level1,
    keys: [
      { title: "PS5 Controller", imgURL: ps5controller },
      { title: "Cat", imgURL: cat },
      { title: "Drink", imgURL: drink },
    ],
  },
  {
    id: uniqid(),
    title: "Level 2",
    imgURL: level2,
    keys: [
      { title: "Lamp", imgURL: lamp },
      { title: "Plant", imgURL: plant },
      { title: "Toilet", imgURL: toilet },
    ],
  },
  {
    id: uniqid(),
    title: "Level 3",
    imgURL: level3,
    keys: [
      { title: "Cactus", imgURL: cactus },
      { title: "Coughing Man", imgURL: coughingMan },
      { title: "Squirrel", imgURL: squirrel },
    ],
  },
  {
    id: uniqid(),
    title: "Level 4",
    imgURL: level4,
    keys: [
      { title: "Turtle", imgURL: turtle },
      { title: "Volcano", imgURL: volcano },
      { title: "Wheel", imgURL: wheel },
    ],
  },
  {
    id: uniqid(),
    title: "Level 5",
    imgURL: level5,
    keys: [
      { title: "Motorcyclist", imgURL: motorcyclist },
      { title: "Mug", imgURL: mug },
      { title: "Statue", imgURL: statue },
    ],
  },
];

export default levels;
