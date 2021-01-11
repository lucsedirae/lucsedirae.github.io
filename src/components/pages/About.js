//* Dependencies
import React from "react";

//* Material-UI components, hooks, and icon
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

//* Custom components
import AboutCards from "../about/AboutCards"

const useStyles = makeStyles(() => ({
  root: {
    background: "rgb(30,30,30)",
    margin: "1rem",
    boxShadow: "3px 3px rgb(20, 20 , 20)",
    color: "silver",
    marginTop: "6rem",
  },
  header: {
    marginRight: "3rem",
  },
  header2: {
    padding: "1rem",
  },
  paragraph: {
    padding: "1rem",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div>
      <Box maxWidth="md">
        <Typography variant="h4" align="right" className={classes.header}>
          About
        </Typography>
        <Container maxWidth="md">
          <Paper className={classes.root}>
            <Typography variant="h6" align="center" className={classes.header2}>
              Professional profile
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className={classes.paragraph}
            >
              Jon is currently studying in the Trilogy full-stack web
              development boot camp at the University of Richmond. He lives in
              Richmond and currently helps people buy and sell homes. With 19
              years of sales experience, Jon intends to bring his
              customer-service focused mindset to the world of web development.
              Jon's biggest professional goal is to leverage his experience as a
              Realtor and develop web based software solutions for businesses
              and consumers in the real estate industry.
            </Typography>

            <Typography variant="h6" align="center" className={classes.header2}>
              Personal profile
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className={classes.paragraph}
            >
              Jon grew up in the rural Piedmont region of Virginia in the
              foothills of the Blue Ridge Mountains. He and his wife of 11 years
              now live in Richmond and have fallen in love with the community.
              When Jon's not coding he's either making music or listening to it.
              <br />
              <img
                src="/img/stealie.png"
                style={{ padding: "1rem", width: "2rem" }}
                alt="Steal your face"
              />
            </Typography>

            <Typography variant="h6" align="center" className={classes.header2}>
              My stack
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className={classes.paragraph}
            >
              Jon builds web applications using the MERN stack
            </Typography>
          <AboutCards />
          </Paper>
        </Container>
      </Box>
    </div>
  );
};

export default About;
