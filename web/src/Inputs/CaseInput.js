import React from "react";
import { TextField } from "@material-ui/core";

export const CaseInput = (props) => {
  return (
    <TextField
      className={props.className}
      variant="outlined"
      label="Search case descriptions"
      InputLabelProps={{
        shrink: true,
      }}
      onChange={props.onChange}
      value={props.value}
    />
  );
};
