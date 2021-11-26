import React from "react";
import { PropTypes } from "prop-types";

const Card = (props) => {
  console.log(props.Author);
  return (
    <div className="container my-3">
      <div className="card" style={{ width: "18rem" }}>
        <h4 className="card-title text-center my-3">Profile</h4>
        <p className="text-center">{props.id}</p>
        <div className="mx-3 my-3">
          <img src={props.imgUrl} height="200px" className="card-img-top" alt="..." />
        </div>
        <div className="card-body text-center">
          <h5>Author: {props.Author}</h5>
          <p className="card-text">
            Width: {props.Width} <br></br> Height: {props.Height}
          </p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.object,
  imgUrl: PropTypes.object,
  Author: PropTypes.object,
  Width: PropTypes.object,
  Height: PropTypes.object,
};
export default Card;
