//* Dependencies
import React from "react";

//* Material-UI components, hooks, and icons
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";

//* Style class definitions
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    background: "rgb(30,30,30)",
    color: "white",
  },
  details: {
    background: "rgb(45,45,45)",
    color: "silver",
  },
  icons: {
    color: "black",
    marginRight: "1rem",
  },
}));

//* Component body
function DetailsAccordian(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ background: "rgb(30,30,30)" }}
        >
          <Typography variant="body1" className={classes.heading}>
            Description
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography
            variant="body1"
            align="center"
            className={classes.details}
          >
            {props.description}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ background: "rgb(30,30,30)" }}
        >
          <Typography className={classes.heading}>Links</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <LinkIcon className={classes.icons} fontSize="large" />
          <Typography
            variant="body1"
            align="center"
            className={classes.details}
          >
            <Link
              variant="body1"
              style={{ textDecoration: "none" }}
              href={props.deployedLink}
              target="_blank"
              style={{ color: "silver" }}
            >
              {" "}
              Deployed Application
            </Link>
          </Typography>
        </AccordionDetails>
        <AccordionDetails className={classes.details}>
          <GitHubIcon className={classes.icons} fontSize="large" />
          <Typography
            variant="body1"
            align="center"
            className={classes.details}
          >
            <Link
              variant="body1"
              style={{ textDecoration: "none" }}
              href={props.gitHubLink}
              target="_blank"
              style={{ color: "silver" }}
            >
              {" "}
              GitHub Repo
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default DetailsAccordian;
