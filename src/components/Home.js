import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { Button, Fade, Grow, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import SearchBusiness from './Search.js';

const useStyles = makeStyles((theme) => ({
  logo: {
    width: "400px",
    marginLeft: "-39px",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
  },
  searchBar: {
    "&:hover": {
      borderColor: "rgba(223,225,229,0)",
      boxShadow: "0 1px 6px rgb(32 33 36 / 28%)",
    },
    "&:focus": {
      borderColor: "rgba(223,225,229,0)",
      boxShadow: "0 1px 6px rgb(32 33 36 / 28%)",
    },
    backgroundColor: "#00000000",
    display: "flex",
    border: " 1px solid #dfe1e5",
    borderRadius: "24px",
    height: "44px",
    margin: "40px auto 20px",
    width: "482px",
    outline: "none",
    textIndent: "40px",
    textDecoration: "none",
  },
  submitButton: {
    "&:hover": {
      borderColor: "#adcaec",
      boxShadow: "0 1px 6px #adcaec",
      backgroundColor: "#12417b",
      color:"white",
    },
    color: "#f6f8f9",
    background: "#2c63a6",
    padding: "12px 18px",
    fontSize: "14px",
    lineHeight: "16px",
    height: "auto",
    borderWidth: "0",
    borderRadius: "30px",
  },
  inputWithSearchIcon: {
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    left: "540px",
    top: "11px",
  },
}));

export default function Home() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className="rootDiv">
      <Fade in={checked} {...(checked ? { timeout: 3000 } : {})}>
        <div className={classes.logoContainer}>
          <img
            className={classes.logo}
            src="/assets/BizWiz landing logo.PNG"
            alt=""
          />
        </div>
      </Fade>
      <Grow in={checked} {...(checked ? { timeout: 3000 } : {})}>
        <form action="">
          <div className={classes.inputWithSearchIcon}>
            <SearchIcon className={classes.searchIcon} />
            <input className={classes.searchBar} type="text" />
          </div>
          <Button
            type="submit"
            className={classes.submitButton}
            variant="contained"
            size="small"
            href='/search'
          >
          Search
          </Button>
        </form>
      </Grow>
      <Route path="/search" >
            <SearchBusiness />
      </Route>
    </div>
  );
}
