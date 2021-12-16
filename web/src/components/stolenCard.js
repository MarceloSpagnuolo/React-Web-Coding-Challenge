import React from "react";
import bici from "../images/bici.png";
import { makeStyles } from "@material-ui/core";

export const StolenCard = (props) => {
  const classes = useStyles();

  return (
    <div className={props.index % 2 ? classes.Card : classes.Sombra}>
      <div>
        <img src={props.thumb || bici} className={classes.Image} alt="" />
      </div>
      <div>
        <h2>Stolen {props.title}</h2>
        <p>{props.description || "Without description"}</p>
        <p>
          {props.date.toLocaleDateString()} - {props.location}
        </p>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  Card: {
    display: "flex",
    alignItems: "center",
  },
  Image: {
    width: 196,
    marginRight: 20,
  },
  Sombra: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
}));