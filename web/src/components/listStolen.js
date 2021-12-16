import React from "react";
import { makeStyles } from "@material-ui/core";
import { StolenCard } from "./stolenCard";

export const ListStolen = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.ListStolen}>
      <span className={classes.Total}>Total: {props.total}</span>
      {!!props.cases && props.cases.length > 0 ? (
        props.cases.map((stolen, index) => (
          <div key={index}>
            <StolenCard
              index={index}
              title={stolen.title}
              description={stolen.description}
              date={new Date(stolen.date_stolen * 1000)}
              location={stolen.stolen_location}
              thumb={stolen.thumb}
              img={stolen.large_img}
              coord={stolen.stolen_coordinates}
            />
          </div>
        ))
      ) : (
        <h2>No results</h2>
      )}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  ListStolen: {
    width: "80%",
    marginRight: "auto",
    marginLeft: "auto",
  },
  Total: {
    display: "flex",
    justifyContent: "end",
    marginTop: 10,
    marginBottom: 10,
  },
}));
