import React from "react";
import { PropTypes } from "prop-types";

const Card = (props) => {
  return (
    <div className="container my-3">
      <div className="card" style={{ width: "18rem" }}>
        <p className="text-center mt-3">{props.id}</p>
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
  id: PropTypes.string,
  imgUrl: PropTypes.string,
  Author: PropTypes.string,
  Width: PropTypes.number,
  Height: PropTypes.number,
};
export default Card;
