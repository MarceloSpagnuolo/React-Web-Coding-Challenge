import React, { useState } from "react";
import { CaseInput } from "../Inputs/CaseInput";
import { DateInput } from "../Inputs/DateInput";
import { makeStyles } from "@material-ui/core";
import { FindCases } from "../Inputs/FindCases";

export const Search = () => {
  const classes = useStyles();
  const [cases, setCases] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  function handleCases(e) {
    setCases(e.target.value);
  }
  function handleFrom(e) {
    setFrom(e.target.value);
  }
  function handleTo(e) {
    setTo(e.target.value);
  }
  function handleClick() {
    console.log(cases, from, to);
  }

  return (
    <>
      <div className={classes.SearchContent}>
        <CaseInput className={classes.Case} onChange={(e) => handleCases(e)} />
        <DateInput
          className={classes.From}
          label="From"
          onChange={(e) => handleFrom(e)}
        />
        <DateInput
          className={classes.To}
          label="To"
          onChange={(e) => handleTo(e)}
        />
        <FindCases label="Find cases" disabled={false} onClick={handleClick} />
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  SearchContent: {
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
  },
  Case: {
    marginRight: 30,
  },
  From: {
    marginRight: 10,
  },
  To: {
    marginRight: 30,
  },
}));
