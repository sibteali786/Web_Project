import React from "react";
import business from "../Imgaes/business.jpg";
import economics from "../Imgaes/economics.jpg";
import medicine from "../Imgaes/medicine.jpg";
import cs from "../Imgaes/ComputerScience.jpg";
import "./Pictures.css";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
const Pictures = () => {
  const history = useHistory();
  const data = [
    {
      img: business,
      copy: "entrepreneurship",
      altText: "person giving talk",
    },
    {
      img: economics,
      copy: "Economics",
      altText: "Economic diagram",
    },
    {
      img: medicine,
      copy: "medicine",
      altText: "medical toolkit",
    },
    {
      img: cs,
      copy: "Computer Science",
      altText: "screen showing code",
    },
  ];
  const handler = (e) => {
    history.push(`/pictures/${e.target.innerText.toLowerCase()}`);
  };
  return (
    <div className="container mt-5 pt-5 margin-left-0 d-flex flex-column justify-content-center align-items-center">
      <h2 className="text-center display-5 mb-5">CATEGORIES</h2>
      <div className="row  d-flex justify-content-around">
        {data.map((obj, index) => {
          return (
            <div
              id="xaxa"
              key={index}
              className="col-sm-6 col-xl-3  catDivs position-relative"
              onClick={handler}
            >
              <div className="textDiv">
                <div>{obj.copy.toUpperCase()}</div>
              </div>
              <img
                src={obj.img}
                className="img-fluid  catImages"
                alt={obj.altText}
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pictures;
