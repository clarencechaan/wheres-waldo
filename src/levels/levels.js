const level1 = "https://imgur.com/wt96wLX.jpg";
const ps5controller = "https://imgur.com/zbVD2Is.png";
const cat = "https://imgur.com/rxS0szf.png";
const drink = "https://imgur.com/Ynh6en6.png";

const level2 = "https://imgur.com/tLqq31A.jpg";
const couch = "https://imgur.com/q1zRkxv.png";
const plant = "https://imgur.com/3eaktFS.png";
const toilet = "https://imgur.com/3o12Aa8.png";

const level3 = "https://imgur.com/1hq6CzI.jpg";
const cactus = "https://imgur.com/htxeO4W.png";
const coughingMan = "https://imgur.com/PqhUOrv.png";
const squirrel = "https://imgur.com/ruZdVBX.png";

const level4 = "https://imgur.com/p4B8Abq.jpg";
const turtle = "https://imgur.com/2kGdExh.png";
const volcano = "https://imgur.com/kLI5mKw.png";
const wheel = "https://imgur.com/rTt4zB0.png";

const level5 = "https://imgur.com/ARndM1B.jpg";
const motorcyclist = "https://imgur.com/SiaNAYt.png";
const mug = "https://imgur.com/c3Q92wt.png";
const statue = "https://imgur.com/9tz2WSq.png";

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
