import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CaseInput } from "../Inputs/CaseInput";
import { DateInput } from "../Inputs/DateInput";
import { makeStyles } from "@material-ui/core";
import { FindCases } from "../Inputs/FindCases";
import { GetFindDesc, GetAllCases } from "../store/action";

export const Search = () => {
  const dispatch = useDispatch();
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
    if (cases.length > 0) {
      dispatch(GetFindDesc(cases));
    } else if (from !== "" && to !== "") {
      console.log(from, to);
      const query = `date_stolen>=${
        new Date(from).getTime() / 1000
      } && date_stolen<=${new Date(to).getTime() / 1000}`;
      dispatch(GetFindDesc(query));
    }
  }
  function handleReset() {
    dispatch(GetAllCases());
    setCases("");
    setFrom("");
    setTo("");
  }

  return (
    <>
      <div className={classes.SearchContent}>
        <CaseInput
          className={classes.Case}
          onChange={(e) => handleCases(e)}
          value={cases}
        />
        <DateInput
          className={classes.From}
          label="From"
          onChange={(e) => handleFrom(e)}
          value={from}
        />
        <DateInput
          className={classes.To}
          label="To"
          onChange={(e) => handleTo(e)}
          value={to}
        />
        <FindCases label="Find cases" disabled={false} onClick={handleClick} />
        <FindCases
          className={classes.Reset}
          label="Reset"
          disabled={false}
          onClick={handleReset}
        />
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
  Reset: {
    marginLeft: 10,
  },
}));
