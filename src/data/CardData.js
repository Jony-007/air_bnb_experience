// import { Zaf, Wedding, Mountain } from "../images/index";

import Zaf from "../images/zaf.png";

import Wedding from "../images/wedding.png";

import Mountain from "../images/mountain.png";

export const CardData = [
  {
    image: { Zaf },
    rating: 5,
    ratingCounter: 5,
    country: "USA",
    des: "Life lessons with Katie Zaferes",
    price: 125,
    key: "Zaf",
  },
  {
    img: { Wedding },
    rating: 5,
    ratingCounter: 8,
    country: "Europe",
    des: "Learn wedding photography",
    price: 50,
    key: "wed",
  },

  {
    img: { Mountain },
    rating: 5,
    ratingCounter: 30,
    country: "CANADA",
    des: "Group Mountain Biking",
    price: 105,
    key: "mountain",
  },
];

export default CardData;
