import React from "react";
import { TextField } from "@material-ui/core";

export const DateInput = (props) => {
  return (
    <TextField
      className={props.className}
      id="date"
      label={props.label}
      type="date"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
      onChange={props.onChange}
      value={props.value}
    />
  );
};
