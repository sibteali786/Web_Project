import React from "react";
import business from "../Imgaes/socialMediaManager.jpg";
import economics from "../Imgaes/ambassador.jpg";
import medicine from "../Imgaes/financeDirector.webp";
import cs from "../Imgaes/phsycologists.jpg";
import imgTemp from "../Imgaes/careerCounsellor.jpg";
import imgTemp2 from "../Imgaes/mentorship.jpeg";
import "./Pictures.css";
import { useHistory } from "react-router";
const Pictures = () => {
  const history = useHistory();
  const data = [
    {
      img: business,
      copy: {
        tileNum: "06",
        tileText: "Marketing Intern",
      },
      altText: "person giving talk",
    },
    {
      img: economics,
      copy: {
        tileNum: "09",
        tileText: "Student Ambassador",
      },
      altText: "Economic diagram",
    },
    {
      img: medicine,
      copy: {
        tileNum: "12",
        tileText: "Student Guide",
      },
      altText: "medical toolkit",
    },
    {
      img: cs,
      copy: {
        tileNum: "02",
        tileText: "psychologists",
      },
      altText: "screen showing code",
    },
    {
      img: imgTemp,
      copy: {
        tileNum: "05",
        tileText: "Career Counsellors",
      },
      altText: "screen showing code",
    },
    {
      img: imgTemp2,
      copy: {
        tileNum: "10",
        tileText: "Mentors",
      },
      altText: "screen showing code",
    },
  ];
  const actBtnClickHandler = (e) => {
    e.preventDefault();
    const res = e.target.innerText.toLowerCase();
    const res2 = res.split(" ").join("");
    history.push(`/careers/${res2}`);
  };
  return (
    <div className="container mt-5 pt-5 margin-left-0 d-flex flex-column justify-content-center align-items-center">
      <h2 className="text-center display-5 mb-5">CAREERS</h2>
      <div className="row  d-flex justify-content-around">
        {data.map((obj, index) => {
          return (
            <div
              id="xaxa"
              key={index}
              className="col-sm-6 col-xl-3  catDivs position-relative"
            >
              <div className="textDiv">
                <div className="tile-num">{obj.copy.tileNum}</div>
                <button
                  className="ml-2 mb-1 act-btn"
                  onClick={actBtnClickHandler}
                >
                  <div className="tile-text">
                    {obj.copy.tileText.toUpperCase()}
                  </div>
                </button>
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
