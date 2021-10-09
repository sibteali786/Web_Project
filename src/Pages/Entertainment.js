import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import styles from "../Styles/Entertainment.module.css";
import axios from "axios";
const Entertainment = () => {
  const [book, setBook] = useState("");
  const [result, setresult] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyCcfI6rt6c3Tud2mesND-oDaCcAW-DarUM"
  );
  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${book}:keyes&key=${apiKey}&maxResults=40`
      )
      .then((data) => {
        setresult(data.data.items);
        console.log(data.data.items);
      });
  }
  return (
    <div className="">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
        style={{ marginTop: "80px" }}
      >
        <div className="container-fluid">
          <div id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="#">
                  Games
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#video">
                  Informative Videos
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://medium.com/"
                  target="_blank"
                >
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#books">
                  Books
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={`${styles.Hero} enter-img text-light`}>
        <div className="h-100 d-flex flex-column justify-content-center align-items-center">
          <div className="display-2 text-center">Entertainment</div>
          <div className="text-center py-5" style={{ width: "50%" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            voluptatem tempore sint consequatur nostrum minima corrupti. Eius
            totam autem tempore mollitia fuga repellendus, sunt, cupiditate
            officia nulla nam, illo maxime.
          </div>
        </div>
      </div>
      <div className="bg-dark">
        <div className="container py-5">
          <div className="d-block py-5 bg-dark " style={{ height: "600px" }}>
            <div className="row h-100 py-5">
              <div className="col-md-4">
                <div className="text-light py-3 h2 px-2">
                  Life Changing Motivation | Sandeep Maheshwari
                </div>
              </div>
              <div className="col-md-8">
                <ReactPlayer
                  width="100%"
                  height="100%"
                  controls
                  url="https://www.youtube.com/watch?v=eDiA1p5DlLg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5" id="video">
          <div className="d-block py-5 bg-dark " style={{ height: "600px" }}>
            <div className="row h-100 py-5">
              <div className="col-md-4">
                <div className="text-light py-3 h2 px-2">
                  How to Get Your Brain to Focus | Chris Bailey
                </div>
              </div>
              <div className="col-md-8">
                <ReactPlayer
                  width="100%"
                  height="100%"
                  controls
                  url="https://www.youtube.com/watch?v=Hu4Yvq-g7_Y"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <div className="d-block py-5 bg-dark " style={{ height: "600px" }}>
            <div className="row h-100 py-5">
              <div className="col-md-4">
                <div className="text-light py-3 h2 px-2">
                  How To Earn in your Early 20s? | Aman Dhattarwal
                </div>
              </div>
              <div className="col-md-8">
                <ReactPlayer
                  width="100%"
                  height="100%"
                  controls
                  url="https://www.youtube.com/watch?v=Y7qzo1WMcxs"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.books_image} p-5`} id="books">
        <div className="container" style={{ height: "100vh" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <form onSubmit={handleSubmit}>
              <div className="form-group my-5 d-flex justify-content-center align-items-center flex-column">
                <label
                  for="exampleInputEmail1"
                  className="form-label text-light display-3"
                  style={{ letterSpacing: "0.4rem" }}
                >
                  Search Books
                </label>
                <input
                  type="text"
                  className="form-control my-4"
                  onChange={handleChange}
                  placeholder="Search a book by name"
                  style={{
                    fontSize: "1.5rem",
                    outline: "none",
                  }}
                ></input>
                <button className="btn btn-outline-light my-4 w-75 display-5">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="container">
          <div className="row g-3 justify-content-center">
            {result.map((book) => (
              <div className="col-lg-2 col-md-6 col-sm-12">
                <div
                  className={`${styles.cardAnimation} card bg-dark text-light`}
                >
                  <div className="card-img-top">
                    <a
                      href={book.volumeInfo.previewLink}
                      target="_blank"
                      className="text-center"
                    >
                      <img
                        src={book.volumeInfo.imageLinks.thumbnail}
                        alt={book.title}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </a>
                  </div>
                  <div className="car-body text-center">
                    <div className="card-text py-3 px-2">
                      {book.volumeInfo.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
