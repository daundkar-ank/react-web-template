import React from "react";
import Card from "./Card";
import { useEffect } from "react";
import { PropTypes } from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { FetchAPI } from "src/redux/actions/appActions";

const CardHolder = (props) => {
  const Api = useSelector((state) => state.ApiReducer.Api);
  console.log("Api: ", Api);
  const dispatch = useDispatch();

  const getImg = async () => {
    const responce = await fetch("https://picsum.photos/v2/list?page=2&limit=100");
    const data = await responce.json();
    dispatch(FetchAPI(data));
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
          {Api.map((element, index) => {
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
