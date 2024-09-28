import "./Card.css";

const Card = (data) => {
  return (
    <div className="card-wrapper ">
      <div className="img-wrapper" >
        <img
          src="https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg"
          alt="" width="378" height="200" 
        />
      </div>
      <div className="heading-wrapper">
        <h1>burger</h1>
        <p>
            {/* {description.slice(0, 60) + "..."} */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="price-wrapper">
        <h3>Rs. 100</h3>
        <h4>Discount : Rs. 70 </h4>
      </div>
      <div className="button-wrapper">
        <button>View Detail</button>
      </div>
    </div>
  );
};

export default Card;
