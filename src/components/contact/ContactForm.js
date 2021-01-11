//* Dependencies
import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Aos from "aos";
import "aos/dist/aos.css";

//* Material-UI components, hooks, and icons
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
  root: {
    background: "rgb(30,30,30)",
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

const ContactForm = () => {
  const classes = useStyles();

  const formSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().required("Required"),
  });

  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };
  const handleOnSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: "https://formspree.io/f/xeqpvzyz",
      data: values,
    })
      .then((response) => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(true, "Thanks!");
      })
      .catch((error) => {
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
      });
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <Paper className={classes.root} data-aos="zoom-out-up">
        <Typography variant="h4" style={{ margin: "1rem" }}>
          Contact Me
        </Typography>
        <Typography variant="body1" style={{ color: "silver", margin: "1rem" }}>
          Contact me with questions on my code or writing, requests for
          freelance quotes, or work availablity.
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={8}>
            <Formik
              initialValues={{ email: "", message: "" }}
              onSubmit={handleOnSubmit}
              validationSchema={formSchema}
            >
              {({ isSubmitting }) => (
                <Form id="fs-frm" noValidate className={classes.root}>
                  <InputLabel htmlFor="email" style={{ color: "silver" }}>
                    Email:
                  </InputLabel>
                  <Field id="email" type="email" name="email" />
                  <ErrorMessage
                    name="email"
                    className="errorMsg"
                    component="p"
                  />
                  <InputLabel htmlFor="message" style={{ color: "silver" }}>
                    Message:
                  </InputLabel>
                  <Field
                    id="message"
                    name="message"
                    component="textarea"
                    style={{ width: "70%", height: "20rem" }}
                  />
                  <ErrorMessage
                    name="message"
                    className="errorMsg"
                    component="p"
                  />
                  <br />
                  <Button
                    variant="outlined"
                    type="submit"
                    disabled={isSubmitting}
                    style={{ background: "silver", margin: "1rem" }}
                  >
                    Submit
                  </Button>
                  {serverState && (
                    <Typography
                      variant="body1"
                      className={!serverState.ok ? "errorMsg" : ""}
                    >
                      {serverState.msg}
                    </Typography>
                  )}
                </Form>
              )}
            </Formik>
          </Grid>

          <Grid item xs>
            <Box style={{ marginTop: "3rem" }}>
              <Link
                href="https://www.linkedin.com/in/jondeavers/"
                target="_blank"
              >
                <LinkedInIcon fontSize="large" style={{ color: "silver" }} />
                <Typography variant="body1" style={{ color: "silver" }}>
                  LinkedIn
                </Typography>
              </Link>
              <Link
                href="https://twitter.com/jondeavers"
                target="_blank"
              >
                <TwitterIcon fontSize="large" style={{ color: "silver" }} />
                <Typography variant="body1" style={{ color: "silver" }}>
                  Twitter
                </Typography>
              </Link>
              <Link
                href="https://www.facebook.com/jon.deavers/"
                target="_blank"
              >
                <FacebookIcon fontSize="large" style={{ color: "silver" }} />
                <Typography variant="body1" style={{ color: "silver" }}>
                  Facebook
                </Typography>
              </Link>
              <Link
                href="https://github.com/lucsedirae"
                target="_blank"
              >
                <GitHubIcon fontSize="large" style={{ color: "silver" }} />
                <Typography variant="body1" style={{ color: "silver" }}>
                  GitHub
                </Typography>
              </Link>

            </Box>
          </Grid>

        </Grid>
      </Paper>
    </div>
  );
};

export default ContactForm;
