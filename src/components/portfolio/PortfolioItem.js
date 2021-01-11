//* Dependencies
import React, { Fragment, useEffect } from "react";
import portfolioData from "./portfolio.json";
import Aos from "aos";
import "aos/dist/aos.css";

//* Material-UI components, hooks, and icons
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

//* Custom components
import DetailsAccordion from "./DetailsAccordion";

const useStyles = makeStyles({
  root: {
    background: "rgb(30,30,30)",
    margin: "1rem",
    boxShadow: "3px 3px rgb(20, 20 , 20)",
    color: "white",
    marginTop: "6rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
});

function PortfolioItem() {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <Fragment>
      {portfolioData.map((portfolioData) => (
        <div style={{ height: "100vh" }} key={portfolioData.id}>
          <Paper className={classes.root} data-aos="zoom-out-up">
            <Typography align="center" variant="h5">
              {portfolioData.name}
            </Typography>
            <CardMedia
              image={portfolioData.pic}
              title={portfolioData.alt}
              className={classes.media}
            ></CardMedia>
            <DetailsAccordion
              description={portfolioData.description}
              deployedLink={portfolioData.deployedLink}
              gitHubLink={portfolioData.gitHubLink}
            />
          </Paper>
        </div>
      ))}
    </Fragment>
  );
}

export default PortfolioItem;
