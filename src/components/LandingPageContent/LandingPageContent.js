import React from "react";

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  landingPageContainer: {
    // border: "1px solid lightgrey",
    display: "flex",
    flexDirection: "column",
    padding: "6.5em .5em 0 .5em"
  },
  mainText: {
    fontSize: "2em",
    lineHeight: "1.5",
    textAlign: "center",
  },
  secondaryText: {
    padding: "2rem 1rem 0 1rem",
    color: "#737373",
    textAlign: "center",
    fontSize: "1.2em",
    lineHeight: "1.8"
  },
  landingPageButton: {
    marginTop: "2em",
    width: "9em",
    padding: ".9em .2em .9em .2em",
    textTransform: "initial",
    fontWeight: "700",
    // fontSize: "larger",
    fontStretch: "expanded",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  }
}))



const LandingPageContent = () => {

  const classes = useStyles();

  return (
    <div className={`${classes.landingPageContainer}`}>
      <div className={`${classes.mainText} font-rb-bold`}>
        Shopping Site for Gadgets and Gifts
      </div>
      <div className={`${classes.secondaryText} font-rb-medium`}>
        Get 10% off your first order when you spend over £40 on any product!
      </div>
      <div className={`${classes.buttonContainer}`}>
        <Button 
          className={classes.landingPageButton}
          variant="contained"  
          color="primary" 
        >
          Get Started
        </Button>
      </div>

    </div>
  )
}

export default LandingPageContent;