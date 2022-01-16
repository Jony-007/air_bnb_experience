import "./App.css";
import { Navbar, Hero, Card } from "./components";

import CardData from "./data/CardData";
import Zaf from "./images/zaf.png";

function App() {
  const cardData = CardData.map((data) => {
    return (
      <Card
        img={data.image}
        rating={data.rating}
        ratingCounter={data.ratingCounter}
        country={data.country}
        des={data.des}
        price={data.price}
        key={data.key}
      />
    );
  });
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="app-card">{cardData}</div>
    </div>
  );
}

export default App;
