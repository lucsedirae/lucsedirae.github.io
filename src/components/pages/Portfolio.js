//* Dependencies
import React, { useEffect } from "react";

//* Material-UI components, hooks, and icon
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PortfolioItem from "../portfolio/PortfolioItem";

const useStyles = makeStyles(() => ({
  root: {},
  header: {
    marginRight: "3rem",
  },
}));

const Portfolio = () => {
  const classes = useStyles();

  return (
    <div>
      <Box maxWidth="md">
        <Typography variant="h4" align="right" className={classes.header}>
          Portfolio
        </Typography>
        <Container maxWidth="md">
          <Typography
            variant="body2"
            align="center"
            style={{ color: "GrayText" }}
          >
            Scroll down for more items
          </Typography>
          <PortfolioItem />
        </Container>
      </Box>
    </div>
  );
};

export default Portfolio;
