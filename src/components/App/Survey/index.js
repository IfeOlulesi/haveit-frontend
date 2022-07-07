import React from "react"

import { useSelector, useDispatch } from 'react-redux';
import { closeSurvey } from "../../../reducers/surveySlice";
import { makeStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: "rgba(0, 0, 0, 0)",
    boxShadow: "none",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  toolBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dialogRoot: {
    display: "flex",
    flexDirection: "column",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
    flexGrow: 0.1,
  },
  productImage: {
    width: "240px",
    height: "240px",
  },
  addToCartButton: {
    textTransform: "none",
  },
  pageTitle: {
    color: "black",
    marginLeft: "-2rem",
  },
  cartContent: {
    display: "flex",
    flexDirection: "column",
    overflow: "scroll",
    flexGrow: 1,
  },

}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Survey = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isSurveyPageOpen = useSelector(state => state.survey.surveyOpen)

  const handleClose = () => {
    dispatch(closeSurvey());
  }

  return (
    <>
      <Dialog 
        className={classes.dialogRoot} 
        fullScreen open={isSurveyPageOpen} onClose={handleClose} 
        TransitionComponent={Transition}
        PaperProps={{
          style: {
            backgroundColor: "#eee",
            boxShadow: "none"
          },
        }}
      >
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <IconButton edge="start" onClick={handleClose} aria-label="close">
              <KeyboardBackspaceRoundedIcon />
            </IconButton>
            <p className={`font-rb-semibold ${classes.pageTitle}`}>Feedback</p>
            <p></p>
          </Toolbar>
        </AppBar>
        
        <div className={classes.cartContent}>
          <iframe 
            title="Survey Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeidFXEXHoGAqfprV1lVHQb4f2z8mw7H2Ry2HnDHg3Ut8ylmg/viewform?embedded=true" 
            frameborder="0" marginheight="0" marginwidth="0"
            style={{
              flexGrow: 1,
              display: "flex",
            }}
          >
            Loading…
          </iframe>
        </div>        
      </Dialog>
    </>
  )
}

export default Survey;