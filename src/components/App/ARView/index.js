import React from "react";
import "./index.css";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    // position: 'relative',
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
    backgroundColor: "#F6F6F9 !important",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  },
  productImage: {
    width: "240px",
    height: "240px",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <  Slide direction="left" ref={ref} {...props} />;
});

const ARView = ({open, setOpen}) => {
  const classes = useStyles()

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Dialog 
      open={open} fullScreen
      onClose={handleClose} 
      TransitionComponent={Transition}
      BackdropProps={{ style: { backgroundColor: "black" } }}
      classsName
    >
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <IconButton edge="start" onClick={handleClose} aria-label="close">
            <KeyboardBackspaceRoundedIcon style={{ color: "#fff" }}/>
          </IconButton>
        </Toolbar>
      </AppBar>

      <div className="ar-display">
        {/* <iframe 
          className="ar-view-iframe"
          title="AR view"
          allow="camera;microphone"
          src="https://mywebar.com/p/Project_0_o4rwm79kfm?_ga=2.211409045.1017139311.1656179911-634228404.1655732829">
        </iframe> */}
        <iframe 
          src="https://mywebar.com/p/Project_0_o4rwm79kfm" 
          width="340" height="600" 
          allow="camera; accelerometer; vr" 
          title="AR View"
        > 
          Your browser does not support embedded content 
        </iframe>
      </div>
    </Dialog>
  )
}

export default ARView;
