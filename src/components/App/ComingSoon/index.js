import React from "react";

import "./index.css";
import { useSelector, useDispatch } from 'react-redux';
import { home } from '../../../reducers/appSlice';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
// import BrushIcon from '@material-ui/icons/Brush';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';
// import Tooltip from '@material-ui/core/Tooltip';
import Typography from "@material-ui/core/Typography";

import comingSoonImage from "../images/coming-soon.png";


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
    // flexGrow: 0.1,
    height: "300px",
    maxHeight: "300px",
  },
  productImage: {
    width: "auto",
    height: "240px",
  },
  productInfoContainer:{
    backgroundColor: "#FFFFFF",
    flexGrow: 1,
    borderTopLeftRadius: "30px",
    borderTopRightRadius: "30px",
    boxShadow: "0px 4px 10px 5px rgba(0, 0, 0, 0.2)",
    padding: "2em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  addToCartButton: {
    textTransform: "none",
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const ComingSoon = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const openTab = useSelector(state => state.app.currentTab)

  const handleClose = () => {
    dispatch(home());
  }

  return (
    <Dialog 
      className={classes.dialogRoot} 
      fullScreen open={openTab === "favorites" || openTab === "profile"} onClose={handleClose} 
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
          <Typography variant={"body1"} className="page-title font-rb-semibold">{openTab}</Typography>
          <p></p>
        </Toolbar>
      </AppBar>

      <div className="main-content">
        {/* <div className="container-circle">
          <BrushIcon fontSize="larger" />
        </div> */}
        <img src={comingSoonImage} alt="Coming soon" className="coming-soon-image" />
        <p style={{opacity: 0.8, fontSize: '24px', marginTop: "40px"}}>Coming Soon!</p>
      </div>

    </Dialog>
  )
}

export default ComingSoon;