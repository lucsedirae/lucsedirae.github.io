//* Dependencies
import { React, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

//* Material-UI components, hooks, and icons
import TwitterIcon from "@material-ui/icons/Twitter";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

//* Custom components
import Buttons from "../home/Buttons";

const Animation = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
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
        <span style={{ color: "GrayText", marginLeft: "30%", fontSize: "12px" }}>
          ...scroll...
        </span>
      </div>
      <h1 data-aos="flip-left" style={{ height: "100vh", marginLeft: "5rem" }}>
        with <span style={{ color: "orange" }}> React.js...</span>{" "}
        <i className="fab fa-react" style={{ color: "green" }} />
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
          <span style={{ color: "gold" }}>+</span> MongoDB back-end...
        </h1>
      </div>
      <div data-aos="flip-up" style={{ height: "100vh", marginLeft: "12rem" }}>
        <h2>sprinkle in</h2>
        <h1>
          a healthy dose of <span style={{ color: "blueviolet" }}>CSS</span>{" "}
          <i className="fab fa-css3-alt" style={{ color: "gold" }} />
          ...
        </h1>
      </div>
      <div data-aos="flip-left" style={{ height: "80vh", marginLeft: "2rem" }}>
        <h2>and you've got a</h2>
        <h1>
          <span style={{ color: "green" }}>full</span>-
          <span style={{ color: "gold" }}>stack</span>{" "}
          <span style={{ color: "red" }}>web</span>{" "}
          <span style={{ color: "blueviolet" }}>developer</span>
        </h1>
        <Buttons />
        <Typography
          variant="body1"
          style={{ marginTop: "5rem", marginLeft: "2rem" }}
        >
          <Link
            href="https://twitter.com/jondeavers"
            style={{
              marginLeft:".25rem",
              color: "rgb(55,65,65)",
              padding: "3px",
              textDecoration: "none",
            }}
          >
            <TwitterIcon />
            @jondeavers
          </Link>
        </Typography>
        <Typography variant="h1" style={{ color: "rgb(55,65,65)" }}>
          Jon Deavers
        </Typography>
      </div>
    </div>
  );
};

export default Animation;
