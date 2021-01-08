//* Dependencies
import { React, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

//* Custom components
import Buttons from "../home/Buttons";

const Animation = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <div data-aos="fade-down" style={{ height: "100vh", marginTop: "10rem" }}>
        <h1>
          {" "}
          Jon Deavers develops <span style={{ color: "green" }}>
            dynamic
          </span>{" "}
          web applications...
        </h1>
        <span style={{ color: "grey", marginLeft: "30%", fontSize: "12px" }}>
          ...scroll...
        </span>
      </div>
      <h1 data-aos="flip-left" style={{ height: "100vh", marginLeft: "5rem" }}>
        with <span style={{ color: "orange" }}> React.js...</span>{" "}
        <i className="fab fa-react" style={{ color: "orangered" }} />
      </h1>
      <div
        data-aos="flip-right"
        style={{ height: "100vh", marginLeft: "10rem" }}
      >
        <h2>and...</h2>
        <h1>
          a Node
          <i
            className="fab fa-node-js"
            style={{ color: "red", marginLeft: "1rem" }}
          />{" "}
          <span style={{ color: "red" }}>+</span> MongoDB back-end
        </h1>
      </div>
      <div data-aos="flip-up" style={{ height: "100vh", marginLeft: "15rem" }}>
        <h2>sprinkle in</h2>
        <h1>
          a healthy dose of <span style={{ color: "blueviolet" }}>CSS</span>{" "}
          <i className="fab fa-css3-alt" style={{ color: "yellow" }} />
          ...
        </h1>
      </div>
      <div data-aos="flip-up" style={{ height: "80vh", marginLeft: "15rem" }}>
        <h2>and you've got a</h2>
        <h1>
          <span style={{ color: "green" }}>full</span>-
          <span style={{ color: "orange" }}>stack</span>{" "}
          <span style={{ color: "red" }}>web</span>{" "}
          <span style={{ color: "blueviolet" }}>developer</span>
        </h1>
        <Buttons />
      </div>
    </div>
  );
};

export default Animation;
