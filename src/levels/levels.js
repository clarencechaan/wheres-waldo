import level1 from "../images/level1.jpeg";
import ps5controller from "../images/ps5controller.png";
import cat from "../images/cat.png";
import drink from "../images/drink.png";

import level2 from "../images/level2.jpeg";
import couch from "../images/couch.png";
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

const levels = [
  {
    id: 0,
    title: "Level 1",
    imgURL: level1,
    keys: [
      { title: "PS5 Controller", imgURL: ps5controller, id: 0 },
      { title: "Cat", imgURL: cat, id: 1 },
      { title: "Drink", imgURL: drink, id: 2 },
    ],
  },
  {
    id: 1,
    title: "Level 2",
    imgURL: level2,
    keys: [
      { title: "Couch", imgURL: couch, id: 0 },
      { title: "Plant", imgURL: plant, id: 1 },
      { title: "Toilet", imgURL: toilet, id: 2 },
    ],
  },
  {
    id: 2,
    title: "Level 3",
    imgURL: level3,
    keys: [
      { title: "Cactus", imgURL: cactus, id: 0 },
      { title: "Coughing Man", imgURL: coughingMan, id: 1 },
      { title: "Squirrel", imgURL: squirrel, id: 2 },
    ],
  },
  {
    id: 3,
    title: "Level 4",
    imgURL: level4,
    keys: [
      { title: "Turtle", imgURL: turtle, id: 0 },
      { title: "Volcano", imgURL: volcano, id: 1 },
      { title: "Wheel", imgURL: wheel, id: 2 },
    ],
  },
  {
    id: 4,
    title: "Level 5",
    imgURL: level5,
    keys: [
      { title: "Motorcyclist", imgURL: motorcyclist, id: 0 },
      { title: "Mug", imgURL: mug, id: 1 },
      { title: "Statue", imgURL: statue, id: 2 },
    ],
  },
];

export default levels;
