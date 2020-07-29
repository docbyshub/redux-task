import React from "react";
import { Box, Paper, Button } from "@material-ui/core";
import { withRouter,Switch,Route } from "react-router-dom";
import Master from './master'
import Comp1 from './comp1'
import Comp2 from './comp2'

const App = ({ history }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        bottom: 0,
        overflow: "hidden",
        background: "#e6ebed",
      }}
    >
      <Paper
        elevation={0}
        style={{
          height: "10vh",
          borderRadius: 0,
          width: "100%",
          background: "#282b3c",
        }}
      ></Paper>
      <Box
        display="flex"
        style={{
          height: "90vh",
          width: "100%",
        }}
      >
        <Box
          style={{
            height: "90vh",
            width: "15%",
            background: "#282b3c",
            color: "#fff",
          }}
        >
          <Button
            onClick={() => {
              history.push("/");
            }}
            style={{
              textTransform: "none",
              width: "100%",
              textAlign: "start",
              color: "#fff",
              // paddingLeft: "1rem",
            }}
          >
            Master Page
          </Button>
          <Button
            onClick={() => {
              history.push("/component1");
            }}
            style={{
              textTransform: "none",
              width: "100%",
              color: "#fff",
              textAlign: "start",
              paddingLeft: "2rem",
            }}
          >
            Component 1
          </Button>
          <Button
            onClick={() => {
              history.push("/component2");
            }}
            style={{
              textTransform: "none",
              width: "100%",
              textAlign: "start",
              color: "#fff",
              paddingLeft: "2rem",
            }}
          >
            Component 2
          </Button>
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "85%",
          }}
        >
          <Switch>
            <Route exact path="/" component={Master} />
            <Route path="/component1" component={Comp1} />
            <Route path="/component2" component={Comp2} />
          </Switch>
        </Box>
      </Box>
    </div>
  );
};

export default withRouter(App);
