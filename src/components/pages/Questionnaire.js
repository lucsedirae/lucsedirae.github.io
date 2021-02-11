//* Dependencies
import React from "react";

//* MUI comps, hooks, icons
import FormControl from "@material-ui/core/FormControl";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "rgb(160,160,160)",
    margin: "1rem",
    boxShadow: "3px 3px rgb(20, 20 , 20)",
    color: "white",
    marginTop: "2rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
});

//* Exported component
const Questionnaire = () => {
  const classes = useStyles();

  return (
    <Container style={{ padding: "2rem" }}>
      <Paper className={classes.root}>
        <form name="questionnaire" method="post">
          <Grid container>
            <Grid item xs={12} md={6} align="center">
              <input type="hidden" name="form-name" value="questionnaire" />
              <Typography variant="h6">Contact Information</Typography>
              <TextField
                label="Your Name:"
                id="standard-basic"
                type="text"
                name="name"
              />
              {/* <p>
                <label>
                  Your Name: <br />
                  <input type="text" name="name" />
                </label>
              </p> */}
              <p>
                <label>
                  Your Email:
                  <br /> <input type="email" name="email" />
                </label>
              </p>
              <p>
                <label>
                  Company/Site: <br />
                  <input type="text" name="company" />
                </label>
              </p>
              <Typography variant="h6">Financial Questions</Typography>
              <p>
                Quotes are given for two separate services; build and hosting.
                Building is the process of designing and building your site or
                application. Hosting is a service that makes your site or app
                available for the public to see. For more on these services
                please see my FAQ.
              </p>
              <p>
                <br />
                <label>
                  Build budget: <input type="number" name="budget" />
                </label>
              </p>
              <p>
                Do you require hosting?
                <br />
                <input
                  type="checkbox"
                  id="hosting1"
                  name="hosting1"
                  value="Yes"
                />
                <label for="hosting1" style={{ marginRight: "1rem" }}>
                  Yes
                </label>
                <input
                  type="checkbox"
                  id="hosting2"
                  name="hosting2"
                  value="No"
                />
                <label for="hosting2">No</label>
              </p>
            </Grid>
            <Grid item xs={12} md={6} align="center">
              <Typography variant="h6">Content Questions</Typography>
              <p>
                Do you need a blog?
                <br />
                <input type="checkbox" id="blog1" name="blog1" value="Yes" />
                <label for="blog1" style={{ marginRight: "1rem" }}>
                  Yes
                </label>
                <input type="checkbox" id="blog2" name="blog2" value="No" />
                <label for="blog2">No</label>
              </p>
              <p>
                <label>
                  Describe your business:
                  <br />
                  <textarea
                    name="business"
                    style={{ width: "15rem", height: "4rem" }}
                  ></textarea>
                </label>
              </p>
              <p>
                <label>
                  Describe your target audience:
                  <br />
                  <textarea
                    name="audience"
                    style={{ width: "15rem", height: "4rem" }}
                  ></textarea>
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Questionnaire;
