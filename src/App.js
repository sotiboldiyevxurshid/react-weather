import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import axios from "axios";
import { useState } from "react";
const icon = require("./img/icon.png");

function App() {
  const [data, setData] = useState();
  const [value, setValue] = useState();

  const getDataWeather = () => {
    let key = "84a3781201a7f9a9bda21e4f05b6c2f0";
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${key}`
      )
      .then((res) => {
        setData(res?.data);
        setValue("");
      });
  };

  return (
    <>
      <Container>
        <Row className=" justify-content-center mt-5 ">
          <Col xs={4} className="d-none d-lg-block ">
            <input
              type="text"
              value={value}
              placeholder="Search Location"
              onChange={(e) => setValue(e.target.value)}
            />
            <button className="btn-search" onClick={getDataWeather}>
              Search
            </button>
          </Col>
        </Row>
        <Row className="justify-content-center ">
          <Col xs={10} lg={4} className="d-block d-lg-none">
            <input
              type="text"
              value={value}
              placeholder="Search Location"
              onChange={(e) => setValue(e.target.value)}
            />
          </Col>
          <Col xs={10} lg={4} className="d-block d-lg-none">
            <button className="btn-search" onClick={getDataWeather}>
              Search
            </button>
          </Col>
        </Row>
        {!data ? (
          <Row className="justify-content-center mt-2">
            <Col xs={10} lg={4}>
              <div className="card-weather">
                <h1>None</h1>
                <h3>None</h3>
                <img className="image-weather" src={icon} alt="none" />
                <h2 className="degree">None</h2>
                <ul className="box">
                  <li className="list-box">None</li>
                  <div className="or-box"></div>
                  <li className="list-box">None</li>
                </ul>
              </div>
            </Col>
          </Row>
        ) : (
          <Row className="justify-content-center mt-2">
            <Col xs={10} lg={4}>
              <div className="card-weather">
                <h1>{data?.name}</h1>
                <h3>{data?.weather[0]?.main}</h3>
                <img className="image-weather" src={icon} alt="none" />
                <h2 className="degree">{Math.round(data?.main?.temp) + "°"}</h2>
                <ul className="box">
                  <li className="list-box">
                    Max: {Math.round(data?.main?.temp_max) + "°"}
                  </li>
                  <div className="or-box"></div>
                  <li className="list-box">
                    Min: {Math.round(data?.main?.temp_min) + "°"}
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
}

export default App;
