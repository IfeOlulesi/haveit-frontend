import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import AppNavBar from "./AppNavbar";
import PageContent from "./PageContent";

const useStyles = makeStyles((theme) => ({
  webAppContainer: {
    backgroundColor: "#eee",
    height: "100vh",
  }
}))

const MainApp = () => {
  const classes = useStyles();
  return (
    <div className={classes.webAppContainer}>
      <AppNavBar />
      <PageContent />
      <div style={{border: "1px solid grey"}}>
        
      </div>
    </div>
  )
}

export default MainApp;