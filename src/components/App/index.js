import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import AppNavBar from "./AppNavbar";
import PageContent from "./PageContent";

const useStyles = makeStyles((theme) => ({
  webAppContainer: {
    // backgroundColor: "#F2F2F2",
  }
}))

const MainApp = () => {
  const classes = useStyles();
  return (
    <div className={classes.webAppContainer}>
      <AppNavBar />
      <PageContent />
    </div>
  )
}

export default MainApp;