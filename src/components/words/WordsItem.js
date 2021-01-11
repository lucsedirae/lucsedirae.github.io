//* Dependencies
import React, { Fragment, useEffect } from "react";
import wordsData from "./words.json";
import Aos from "aos";
import "aos/dist/aos.css";

//* Material-UI components, hooks, and icons
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "rgb(30,30,30)",
    margin: "1rem",
    boxShadow: "3px 3px rgb(20, 20 , 20)",
    color: "silver",
    marginTop: "2rem",
  },
  header: {
    background: "rgb(30,30,30)",
    margin: "1rem",
    color: "white",
    marginTop: "2rem",
  },
});

const WordsItem = () => {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <Fragment>
      <div style={{ height: "100vh" }}>
        <Paper className={classes.root} data-aos="zoom-out-down">
          {wordsData.map((wordsData) => (
            <Box key={wordsData.id}>
              <Typography variant="h5" className={classes.header}>
                {wordsData.title}
              </Typography>
              <Typography
                variant="body2"
                style={{ color: "GrayText", marginLeft: "1rem" }}
              >
                Published {wordsData.datePublished}
              </Typography>
              <Grid container xs>
                <Grid item xs={3}>
                  <i className={wordsData.logo} style={{ margin: "1rem" }} />
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    variant="body2"
                    style={{ color: "GrayText", marginLeft: "1rem" }}
                  >
                    Preview:
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ margin: "1rem" }}
                    align="left"
                  >
                    {wordsData.firstLine} ...
                  </Typography>
                </Grid>
              </Grid>
              <Button
                href={wordsData.url}
                target="_blank"
                variant="outlined"
                style={{ background: "silver", margin: "1rem" }}
              >
                Read on {wordsData.host}
              </Button>
            </Box>
          ))}
        </Paper>
      </div>
    </Fragment>
  );
};

export default WordsItem;
