import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

const CardHolder = (props) => {
  const [img, setImg] = useState([]);

  const getImg = async () => {
    const responce = await fetch("https://picsum.photos/v2/list");
    setImg(await responce.json());
  };

  useEffect(() => {
    getImg();
  }, []);

  return (
    <>
      <div
        className="container mt-3 my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h4 className="text-center">List of Data</h4>
        <div className="row">
          {img.map((element, index) => {
            return (
              <div className="col-md-4" key={index}>
                <Card
                  id={element.id}
                  imgUrl={element.download_url}
                  Author={element.author}
                  Width={element.width}
                  Height={element.height}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
CardHolder.propTypes = {
  mode: PropTypes.object,
  toggleMode: PropTypes.object,
};
export default CardHolder;
