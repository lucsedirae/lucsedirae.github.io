//* Dependencies
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

//* Material-UI components, icons & hooks
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from "@material-ui/icons/Menu";

//* Styles
const useStyles = makeStyles({
  root: {
    marginRight: "4rem"
  }
});

const NavDrawer = () => {
  const classes = useStyles();

  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  const list = () => (
    <div onClick={toggleDrawer(false)} >
      <List>
        <ListItem button href="/" divider="true" className={classes.root}>
          Home
        </ListItem>
        <ListItem button href="/portfolio"  className={classes.root}>
          Portfolio
        </ListItem>
        <ListItem button href="/about" className={classes.root}>
          About
        </ListItem>
        <ListItem button href="/words" className={classes.root}>
          Words
        </ListItem>
        <ListItem button href="/contact" className={classes.root}>
          Contact
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Button
        onClick={toggleDrawer(true)}
        startIcon={<MenuIcon />}
        size="large"
        style={{color: "white", position: "fixed"}}
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
