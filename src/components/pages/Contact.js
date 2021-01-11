//* Dependencies
import React from "react";

//* Material-UI components, hooks, and icon
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ContactForm from "../contact/ContactForm";

const useStyles = makeStyles(() => ({
  root: {},
  header: {
    marginRight: "3rem",
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <div>
      <Box maxWidth="md">
        <Typography variant="h4" align="right" className={classes.header}>
          Contact
        </Typography>
        <Container maxWidth="md">
          <ContactForm />
        </Container>
      </Box>
    </div>
  );
};

export default Contact;
