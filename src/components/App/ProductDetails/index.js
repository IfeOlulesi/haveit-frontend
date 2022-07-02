import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';

import { cart } from '../../../reducers/appSlice';
import "./index.css";

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded';

import { EyeGlassesIcon } from "../../icons";

import ARView from "../ARView";


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


const ProductDetails = ({open, setOpen}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [ARViewOpen, setARViewOpen] = useState(false);

  const productInViewId = useSelector(state => state.products.productInViewId);
  const productInViewType = useSelector(state => state.products.productInViewType);
  const categoryProducts = useSelector(state => state.products[productInViewType]);
  const particularProduct = categoryProducts.filter((el) => el.id === productInViewId)[0];
  

  const handleClose = () => {
    setOpen(false);
  };

  const launchARView = () => {
    setARViewOpen(true);
  }

  const openCart = () => {
    dispatch(cart());
  }

  return (
    <>
      <Dialog 
        className={classes.dialogRoot} 
        fullScreen open={open} onClose={handleClose} 
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
            <div className="pulse">
              <IconButton onClick={launchARView} aria-label="close">
                <EyeGlassesIcon strokeColor={"#5956E9"} />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        
        <div className={classes.imageContainer}>
          <img className={classes.productImage} src={particularProduct.imgSrc} alt="thumbnail" />
        </div>

          <div className={`${classes.productInfoContainer}`}>
            <Typography variant="h5">{particularProduct.prodName}</Typography>
            <div>
              <div style={{
                display: "flex", flexDirection: "row", 
                justifyContent: "space-between",
                marginBottom: "16px",
                }}
              >
                <Typography variant="body1" style={{fontSize: "1.3rem !important"}}>Total</Typography>
                <Typography className="font-rb-bold" variant="body1" style={{color: "#5956E9", fontSize: "1.5rem"}}>$579</Typography>
              </div>
              <div style={{display: "flex"}}>
                <Button 
                  variant="contained" color="primary" 
                  fullWidth size="large" className={classes.addToCartButton}
                  onClick={openCart}
                >
                  <p style={{fontSize: "20px" }} className="font-rb-semibold" onClick={openCart}>Add to Cart</p>
                </Button>
              </div>
            </div>
          </div>
        
      </Dialog>

      <ARView open={ARViewOpen} setOpen={setARViewOpen} />
    </>
  )
}

export default ProductDetails;