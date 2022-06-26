import React, {useState} from "react";

import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';

// import CloseIcon from '@material-ui/icons/Close';
import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded';
// import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import { EyeGlassesIcon } from "../../icons";
import AppleWatch from "./apple-watch.png"
import { Typography } from "@material-ui/core";

import ARView from "../ARView";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: "#fff",
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
  return <Slide direction="left" ref={ref} {...props} />;
});


const ProductDetails = ({open, setOpen}) => {
  const classes = useStyles();

  const [ARViewOpen, setARViewOpen] = useState(false);


  const handleClose = () => {
    setOpen(false);
  };

  const launchARView = () => {
    console.log("hello world");
    setARViewOpen(true);
  }

  return (
    <>
      <Dialog 
        className={classes.dialogRoot} 
        fullScreen open={open} onClose={handleClose} 
        TransitionComponent={Transition}
        BackdropProps={{ style: { backgroundColor: "black" } }}
      >
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <IconButton edge="start" onClick={handleClose} aria-label="close">
              <KeyboardBackspaceRoundedIcon />
            </IconButton>
            <IconButton onClick={launchARView} aria-label="close">
              <EyeGlassesIcon strokeColor={"#5956E9"}/>
            </IconButton>
          </Toolbar>
        </AppBar>
        
        <div className={classes.imageContainer}>
          <img className={classes.productImage} src={AppleWatch} alt="Apple Watch" />
        </div>

        <div className={classes.productInfo}>
          <Typography variant="h5">2020 Apple Watch 6.2"</Typography>
        </div>


      </Dialog>
      <ARView open={ARViewOpen} setOpen={setARViewOpen} />
    </>
  )
}

export default ProductDetails;