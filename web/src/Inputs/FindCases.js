import React from "react";
import { Button } from "@material-ui/core";

export const FindCases = (props) => {
  return (
    <Button
      variant="contained"
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.label}
    </Button>
  );
};
