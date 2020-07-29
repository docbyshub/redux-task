import React from "react";
import { connect } from "react-redux";
import { Box } from "@material-ui/core";

const Comp1 = ({ data }) => {
  const {  number } = data;
  console.log(data)
  return (
    <Box style={{ padding: "2rem",display:"flex",width:'100%',flexWrap:"wrap" }}>
     {
         [...Array(parseInt(number)).keys()].map((i,k)=>(
             <Box
             key={k}
             style={{
                 height:100,
                 width:100,
                 border:"2px solid black",
                 margin:20
             }}
             />
         ))
     }
    </Box>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(Comp1);
