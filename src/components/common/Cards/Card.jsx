import { useState } from "react";
import "./Card.css";
import Modal from "../Modal/Modal";

const Card = ({data}) => {
  const { name, description, imageUrl, price, discountPrice } = data;
  const [productModal, setProductModal] = useState(false)
  return (
    <>
      <div className="card-wrapper ">
        <div className="img-wrapper">
          <img src={imageUrl} alt="" />
        </div>
        <div className="section">
          <div className="heading-wrapper">
            <h1>{name}</h1>
            <p>{description.slice(0, 60) + "..."}</p>
          </div>
          <div className="price-wrapper">
            <h4>Rs:{price}</h4>
            <h3>Rs:{discountPrice} </h3>
          </div>
          <div className="button-wrapper">
            <button onClick={()=>setProductModal(true)}
            >View Detail</button>
          </div>
        </div>
      </div>
      <Modal modal={productModal} setModal={setProductModal}/>
    </>
  );
};

export default Card;
