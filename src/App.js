import React, { useEffect, useState } from "react";
import Signup from "./component/Signup";
import Login from "./component/Login";
import "./component/Styling.css";
import logo from "./component/greeksy.jpeg";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [movieData, setMovieData] = useState([]);

  const getDatas = async () => {
    try {
      const response = await fetch(" https://hoblist.com/api/movieList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: "movies",
          language: "kannada",
          genre: "all",
          sort: "voting",
        }),
      });
      const data = await response.json();

      setMovieData(data.result);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(movieData);
  useEffect(() => {
    getDatas();
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };
  const formatDate = (timestamp) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date(timestamp * 1000);
    const monthName = months[date.getMonth()];
    const day = date.getDate();
    return ` ${day} ${monthName}`;
  };
  return (
    <div>
      {loggedIn ? (
        <div className="main">
          <div style={{ backgroundColor: "yellow" }}>
            <header>
              <ul style={{ display: "flex", listStyleType: "none" }}>
                <li style={{ flex: "0.5" }}></li>
                <li style={{ flex: "0.5" }}>
                  <img
                    style={{ width: "50px", height: "50px" }}
                    src={logo}
                    alt="not load"
                  />
                </li>
                <li style={{ flex: "1", fontSize: "30px" }}>
                  Geeksynergy Technologies Pvt Ltd
                </li>
              </ul>
            </header>
          </div>
          {movieData.map((ele, index) => (
            <div>
              <div key={index} style={{ display: "flex" }} className="movies">
                <div className="voteBody">
                  <ul style={{ listStyleType: "none" }}>
                    <li className="voteCount symbol">▲ </li>
                    <li className="voteCount"> {ele.totalVoted}</li>
                    <li className="voteCount symbol">▼ </li>
                    <li className="voteCount votes">Votes</li>
                  </ul>
                </div>
                <div className="allimags">
                  <img className="images" src={ele.poster} />
                  <div className="watch">Watch Trailer</div>
                </div>
                <div>
                  <ul style={{ listStyleType: "none" }}>
                    <li className="title nametitle">{ele.title}</li>
                    <li className="title">
                      <span className="titls ">Genr</span>: {ele.genre}
                    </li>
                    <li className="title">
                      <span className="titls ">Director</span>: {ele.director}
                    </li>
                    <li className="title">
                      <span className="titls ">Starring</span>: {ele.stars}
                    </li>
                    <li className="title">
                      Mins | {ele.language} | {formatDate(ele.releasedDate)}
                    </li>
                    <li className="title people">
                      {ele.pageViews} | views | voted by {ele.totalVoted} |
                      people
                    </li>
                  </ul>
                  <br />
                </div>
              </div>
            </div>
          ))}
          <center>
            <button onClick={handleLogout}>Logout</button>
          </center>
        </div>
      ) : (
        <>
          <Signup />
          <Login onLogin={handleLogin} />
        </>
      )}
    </div>
  );
}

export default App;
