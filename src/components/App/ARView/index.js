import React, { useState } from "react";
import "./index.css";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import Cart from "../Cart";

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

const ARView = ({open, setOpen, ARLink}) => {
  const classes = useStyles()

  const [cartOpen, setCartOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  const openCart = () => {
    setCartOpen(true);
  }

  return (
    <>
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
            <IconButton edge="start" onClick={openCart} aria-label="close">
              <AddShoppingCartIcon style={{ color: "#fff" }}/>
            </IconButton>
          </Toolbar>
        </AppBar>

        <div className="ar-display">
          <iframe 
            // src="https://mywebar.com/p/Project_0_o4rwm79kfm" 
            src={ARLink}
            // width="340" height="600" 
            className="ar-view-iframe"
            allow="camera; accelerometer; vr" 
            title="AR View"
          > 
            Your browser does not support embedded content 
          </iframe>
        </div>
      </Dialog>

      <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
    </>
  )
}

export default ARView;
