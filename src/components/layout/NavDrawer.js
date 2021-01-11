//* Dependencies
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

//* Material-UI components, icons & hooks
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from "@material-ui/icons/Menu";

//* Styles
const useStyles = makeStyles({
  root: {
    marginRight: "3rem",
  },
  footer: {
    position: "fixed",
    bottom: "1rem",
    padding: "1rem"
  }
});

const NavDrawer = () => {
  const classes = useStyles();

  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  const list = () => (
    <div onClick={toggleDrawer(false)}>
      <List>
        <ListItem>
          <Button href="/" divider="true" className={classes.root}>
            Home
          </Button>
        </ListItem>
        <Divider light />
        <ListItem>
          <Button href="/portfolio" className={classes.root}>
            Portfolio
          </Button>
        </ListItem>
        <ListItem>
          <Button href="/about" className={classes.root}>
            About
          </Button>
        </ListItem>
        <ListItem>
          <Button href="/words" className={classes.root}>
            Words
          </Button>
        </ListItem>
        <ListItem>
          <Button href="/contact" className={classes.root}>
            Contact
          </Button>
        </ListItem>
      </List>
      <footer className={classes.footer}>©2021 Jon Deavers</footer>
    </div>
  );

  return (
    <div>
      <Button
        onClick={toggleDrawer(true)}
        startIcon={<MenuIcon />}
        size="large"
        style={{ color: "white", position: "fixed" }}
      >
        Menu
      </Button>
      <Drawer anchor={"left"} open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
};

export default NavDrawer;
