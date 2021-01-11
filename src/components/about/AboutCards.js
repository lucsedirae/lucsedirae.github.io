//* Dependencies
import React from "react";

//* Material-UI components, hooks, and icons
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "rgb(30,30,30)",
    maxWidth: 345,
    color: "silver",
  },
  media: {
    height: 140,
  },
});

export default function AboutCards() {
  const classes = useStyles();
  return (
    <div>
      <Grid container xs align="center">
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardActionArea href="https://www.mongodb.com/3" target="_blank">
              <CardMedia
                src="/img/mongodb-icon.svg"
                style={{ width: "8rem" }}
                align="center"
                component="img"
              />
              <CardContent>
                <Typography variant="h5" align="center">
                  MongoDB
                </Typography>
                <Typography gutterBottom variant="h6">
                  Database framework
                </Typography>
                <Typography variant="body2" component="p" align="center">
                  "MongoDB is a document database with the scalability and
                  flexibility that you want with the querying and indexing that
                  you need" -mongodb.com
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs>
          <Card className={classes.root}>
            <CardActionArea href="https://expressjs.com/" target="_blank">
              <CardMedia
                src="/img/expressjs-icon.svg"
                style={{ width: "8rem" }}
                align="center"
                component="img"
              />
              <CardContent>
                <Typography variant="h5" align="center">
                  Express
                </Typography>
                <Typography gutterBottom variant="h6">
                  Back-end framework
                </Typography>
                <Typography variant="body2" component="p" align="center">
                  "Express is a minimal and flexible Node.js web application
                  framework that provides a robust set of features for web and
                  mobile applications." -expressjs.com
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>{" "}
        </Grid>
      </Grid>

      <Grid container xs align="center">
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardActionArea href="https://reactjs.org/" target="_blank">
              <CardMedia
                src="/img/reactjs-icon.svg"
                style={{ width: "8rem" }}
                align="center"
                component="img"
              />
              <CardContent>
                <Typography variant="h5" align="center">
                  React
                </Typography>
                <Typography gutterBottom variant="h6">
                  Front-end framework
                </Typography>
                <Typography variant="body2" component="p" align="center">
                  "React makes it painless to create interactive UIs. Design
                  simple views for each state in your application, and React
                  will efficiently update and render just the right components
                  when your data changes."" -reactjs.org
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs>
          <Card className={classes.root}>
            <CardActionArea href="https://nodejs.org/en/" target="_blank">
              <CardMedia
                src="/img/nodejs-icon.svg"
                style={{ width: "8rem" }}
                align="center"
                component="img"
              />
              <CardContent>
                <Typography variant="h5" align="center">
                  Node
                </Typography>
                <Typography gutterBottom variant="h6">
                  Web server
                </Typography>
                <Typography variant="body2" component="p" align="center">
                  "As an asynchronous event-driven JavaScript runtime, Node.js
                  is designed to build scalable network applications."
                  -nodejs.org
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>{" "}
        </Grid>
      </Grid>
    </div>
  );
}
