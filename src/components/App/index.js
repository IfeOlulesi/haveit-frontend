import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import {
  HomeOutline,
  HomeFilled,
  ProfileOutline,
  ProfileFilled,
  CartOutlined,
  CartFilled,
  HeartFilled,
  HeartOutlined,
} from "../icons";

import AppNavBar from "./AppNavbar";
import PageContent from "./PageContent";

const useStyles = makeStyles((theme) => ({
  webAppContainer: {
    backgroundColor: "#eee",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  utilBar: {
    border: "1px solid grey", 
    height: "5rem", 
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "space-around",
    paddingTop: "10px",
  },
  box: {
    width: "30px",
    height: "30px",
    border: "1px solid grey",
  }
}))

const MainApp = () => {
  const classes = useStyles();
  return (
    <div className={classes.webAppContainer}>
      <AppNavBar />
      <PageContent />
      <div className={classes.utilBar}>
        <div className={classes.box}>H</div>
        <div className={classes.box}>F</div>
        <div className={classes.box}>P</div>
        <div className={classes.box}>C</div>
      </div>
    </div>
  )
}

export default MainApp;