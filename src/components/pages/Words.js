//* Dependencies
import React from "react";

//* Material-UI components, hooks, and icon
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

//* Custom components
import WordsItem from "../words/WordsItem";

const useStyles = makeStyles(() => ({
  root: {},
  header: {
    marginRight: "3rem",
  },
}));

const Words = () => {
  const classes = useStyles();

  return (
    <div>
      <Box maxWidth="md">
        <Typography variant="h4" align="right" className={classes.header}>
          Words
        </Typography>
        <Container maxWidth="md">
          <Typography
            variant="body2"
            align="center"
            style={{ color: "GrayText" }}
          >
            Scroll down for more items
          </Typography>
          <WordsItem />
        </Container>
      </Box>
    </div>
  );
};

export default Words;
