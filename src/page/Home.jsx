import Card from "../components/common/Cards/Card.jsx";
import { foodItems } from "../utils/constant/foodDeatil.js";
import "../index.css";

const Home = () => {
  return (
    <>
      <div className="card-container">
        {foodItems.map((item, index) => {
          return <Card key={index} data={item} />;
        })}
      </div>
    </>
  );
};

export default Home;
