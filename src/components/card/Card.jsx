import React from "react";
import "./card.css";

const Card = (props) => {
  console.log(props);
  return (
    <div className="card padding-right">
      <button className="card-status">SOLD OUT</button>
      <img src={props.img} alt="zaf" className="card-pic" />
      <div className="card-rating">
        <p className="star light-text">
          <i className="fas fa-star"></i>
        </p>
        <p className="rating-des light-text">
          {props.rating} ({props.ratingCounter}) <span>. {props.country} </span>
        </p>
      </div>

      <p className="card-desc">{props.des}</p>

      <p className="card-price">
        <span>From ${props.price} </span> / person
      </p>
    </div>
  );
};

export default Card;
