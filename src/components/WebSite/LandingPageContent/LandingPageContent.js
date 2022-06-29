import React from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import LandingPageBg from "./landing-page-image.png";
import LandingPageBg_1 from "./landing-page-image1.png";
import LandingPageBg_2 from "./landing-page-image2.png";



const useStyles = makeStyles((theme) => ({
  landingPageContainer: {
    // border: "1px solid lightgrey",
    display: "flex",
    flexDirection: "column",
    padding: "6.5em 0 0 0",
  },
  mainText: {
    fontSize: "2em",
    lineHeight: "1.5",
    textAlign: "center",
    marginTop: "10px",
    padding: "2rem 1.4rem 0 1.4rem",
  },
  secondaryText: {
    padding: "2rem 1.8rem 0 1.8rem",
    color: "#737373",
    textAlign: "center",
    fontSize: "1em",
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
  },
  landingPageBgContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "right",

  },
  landingPageBg: {
    // position: "absolute",
    width: "93vw",
    marginTop: "40px",
  },
  heroText1: {
    marginTop: "20px",
    fontSize: "1.4em",
    lineHeight: "1.5",
    textAlign: "center",
    // fontWeight: "100",
  },
  heroText2: {
    marginTop: "40px",
    fontSize: "1em",
    lineHeight: "1.5",
    textAlign: "center",
    fontWeight: "700",
    // color: "primary",
  },

  landingPageBg_2: {
    // position: "absolute",
    width: "80vw",
    marginTop: "40px",
  },

  // responsiveness
  sectionOne: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up('md')]: {
      flexDirection: "row",
    },
  },
  sectionOneLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.up('md')]: {
      justifyContent: "left",
    },
  }
}))



const LandingPageContent = () => {

  const { loginWithRedirect } = useAuth0();
  const classes = useStyles();

  return (
    <div className={`${classes.landingPageContainer}`}>

      <div className={classes.sectionOne}>
        <div className={classes.sectionOneLeft}>
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
              onClick={() => loginWithRedirect()}
            >
              Get Started
            </Button>
          </div>
        </div>
        
        <div className={classes.landingPageBgContainer}>
          <img
            src={LandingPageBg}
            alt="LandingPage Background"
            className={classes.landingPageBg}
            />
        </div>
      </div>


      <div className={`${classes.heroText1} font-rb-semibold`} >
        How it works
      </div>

      <div className={`${classes.heroText2} font-rb-medium`}>
        Create an account
      </div>

      <div className={`${classes.mainText} font-rb-bold`}>
        Discover original product
      </div>

      <div className={`${classes.secondaryText} font-rb-medium`}>
        There are more than 950 categories updated daily based on trending websites reviews an users rating.
      </div>

      <div className={classes.landingPageBgContainer}>
        <img
          src={LandingPageBg_2}
          alt="LandingPage Background"
          className={classes.landingPageBg}
        />
      </div>

      <div className={`${classes.mainText} font-rb-bold`}>
        Experience products in AR
      </div>

      <div className={`${classes.secondaryText} font-rb-medium`}>
        Have your tried Augmented Reality? Stop looking at boring galleries and start experiences with each item.
      </div>


      <div className={classes.landingPageBgContainer}>
        <img
          src={LandingPageBg_1}
          alt="LandingPage Background"
          className={classes.landingPageBg}
        />
      </div>

    </div>
  )
}

export default LandingPageContent;