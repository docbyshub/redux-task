import React from "react";
import { Paper, TextField, Box,Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

const Master = ({ data, dispatch }) => {
  const { register, handleSubmit } = useForm();
  const { name, date, number, email } = data;

  const onSubmit = (data) => {
    console.log(data)
    dispatch({ type: "UPDATE", payload: data });
  };

  return (
    <Paper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          style={{ width: "27rem", padding: "2rem" }}
        >
          <TextField
            defaultValue={name ? name : ""}
            inputRef={register()}
            name="name"
            label="Name"
            fullWidth
          />
          <TextField
            inputRef={register()}
            defaultValue={date ? date : ""}
            name="date"
            type="date"
            style={{margin:"15px 0"}}
            fullWidth
          />
          <TextField
            inputRef={register()}
            defaultValue={number ? number : ""}
            name="number"
            label="Random Number"
            fullWidth
          />
          <TextField
            name="email"
            defaultValue={email ? email : ""}
            inputRef={register()}
            label="Email"
            fullWidth
            type="email"
          />
          <Button type="submit" color="secondary">
            Save
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(Master);
