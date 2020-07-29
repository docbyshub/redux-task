import React from "react";
import { connect } from "react-redux";
import { Paper } from "@material-ui/core";

const Comp2 = ({ data }) => {
  const { name, email, date, number } = data;
  return (
    <Paper style={{ padding: "2rem" }}>
      <h1>{name}</h1>
      <br />
      <h1>{email}</h1>
      <br />
      <h1>{date}</h1>
      <br />
      <h1>{number}</h1>
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(Comp2);
