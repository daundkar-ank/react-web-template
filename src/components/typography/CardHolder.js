import React from "react";
import Card from "./Card";
import { PropTypes } from "prop-types";

const CardHolder = (props) => {
  const src = [
    {
      id: "0",
      author: "Alejandro Escamilla",
      width: 5616,
      height: 3744,
      url: "https://unsplash.com/photos/yC-Yzbqy7PY",
      download_url: "https://picsum.photos/id/0/5616/3744",
    },
    {
      id: "119",
      author: "Nadir Balcikli",
      width: 3264,
      height: 2176,
      url: "https://unsplash.com/photos/wE9nUW7tMmk",
      download_url: "https://picsum.photos/id/119/3264/2176",
    },
    {
      id: "120",
      author: "Guillaume",
      width: 4928,
      height: 3264,
      url: "https://unsplash.com/photos/_DA3D5P71qs",
      download_url: "https://picsum.photos/id/120/4928/3264",
    },
    {
      id: "1000",
      author: "Lukas Budimaier",
      width: 5626,
      height: 3635,
      url: "https://unsplash.com/photos/6cY-FvMlmkQ",
      download_url: "https://picsum.photos/id/1000/5626/3635",
    },
    {
      id: "1001",
      author: "Danielle MacInnes",
      width: 5616,
      height: 3744,
      url: "https://unsplash.com/photos/1DkWWN1dr-s",
      download_url: "https://picsum.photos/id/1001/5616/3744",
    },
    {
      id: "1002",
      author: "NASA",
      width: 4312,
      height: 2868,
      url: "https://unsplash.com/photos/6-jTZysYY_U",
      download_url: "https://picsum.photos/id/1002/4312/2868",
    },
    {
      id: "1003",
      author: "E+N Photographies",
      width: 1181,
      height: 1772,
      url: "https://unsplash.com/photos/GYumuBnTqKc",
      download_url: "https://picsum.photos/id/1003/1181/1772",
    },
    {
      id: "1004",
      author: "Greg Rakozy",
      width: 5616,
      height: 3744,
      url: "https://unsplash.com/photos/SSxIGsySh8o",
      download_url: "https://picsum.photos/id/1004/5616/3744",
    },
    {
      id: "1005",
      author: "Matthew Wiebe",
      width: 5760,
      height: 3840,
      url: "https://unsplash.com/photos/tBtuxtLvAZs",
      download_url: "https://picsum.photos/id/1005/5760/3840",
    },
    {
      id: "1006",
      author: "Vladimir Kudinov",
      width: 3000,
      height: 2000,
      url: "https://unsplash.com/photos/-wWRHIUklxM",
      download_url: "https://picsum.photos/id/1006/3000/2000",
    },
    {
      id: "1008",
      author: "Benjamin Combs",
      width: 5616,
      height: 3744,
      url: "https://unsplash.com/photos/5L4XAgMSno0",
      download_url: "https://picsum.photos/id/1008/5616/3744",
    },
  ];
  return (
    <>
      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h4 className="text-center">List of Data</h4>
        <div className="row">
          {src.map((element, index) => {
            console.log(element);
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
