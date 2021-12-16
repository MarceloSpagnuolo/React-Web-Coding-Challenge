import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListStolen } from "../components/listStolen";
import { Search } from "../components/search";
import { FindCases } from "../Inputs/FindCases";
import { GetAllCases } from "../store/action";
import { makeStyles } from "@material-ui/core";

export const IndexPage = () => {
  const dispatch = useDispatch();
  const { cases } = useSelector((state) => state);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);
  const [items, setItems] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    !!cases && cases.length === 0 && dispatch(GetAllCases());
  }, [dispatch]);

  useEffect(() => {
    setTotal(cases.length);
    setPages(cases.length / 10);
    setItems(cases.slice(page * 10, page * 10 + 10));
  }, [cases, page]);

  function handlePrev() {
    if (page > 0) {
      setPage(page - 1);
    }
  }

  function handleSig() {
    if (page < pages) {
      setPage(page + 1);
    }
  }

  return (
    <div>
      <Search />

      <ListStolen total={total} cases={items} />

      <div className={classes.Botones}>
        <FindCases
          label="Anterior"
          onClick={handlePrev}
          disabled={page === 0}
        />
        <FindCases
          label="Siguiente"
          onClick={handleSig}
          disabled={page === Math.trunc(pages)}
        />
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  Botones: {
    width: "80%",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    justifyContent: "end",
  },
}));
