import React from "react";
import logo from "../images/logo.png";
import { makeStyles } from "@material-ui/core";

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.HeaderContent}>
      <img className={classes.Logo} src={logo} alt="logo" />
      <div>
        <h1>Police Departament of Berlin</h1>
        <h2>Stolen Bikes</h2>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  HeaderContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
    position: "sticky",
    zIndex: 2,
  },
  Logo: {
    height: 150,
    marginRight: 20,
  },
}));
