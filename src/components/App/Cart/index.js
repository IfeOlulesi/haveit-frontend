import React, { useEffect } from"react"

import { useSelector, useDispatch } from 'react-redux';
import { addItem, increaseQuantity, decreaseQuantity, removeItem} from "../../../reducers/cartSlice";
import { home } from '../../../reducers/appSlice';

import { makeStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded';
import { DeleteIcon } from "../../icons";

import tempProductImage from "./image 15.png";

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
  },


  /////////////////////
  pageTitle: {
    color: "black",
  },
  cartContent: {
    display: "flex",
    flexDirection: "column",
    overflow: "scroll",
    flexGrow: 1,
    padding: "20px",
  },
  productContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    marginBottom: "20px",
  },
  productInfoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "10px 0 10px 20px",
  },
  productQuantityWidget: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productQuantityDetailWidget: {
    display: "flex",
    flexDirection: "row",
  },
  productQuantityEditButtons: {
    color: "white",
    backgroundColor: "#7DCCEC",
    width: "20px",
    height: "20px",
    borderRadius: "3px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    cursor: "pointer",
    lineHeight: "0.8",
    fontSize: "24px",
  }

}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Cart = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const cartState = useSelector(state => state.cart.products)
  const currentTab = useSelector(state => state.app.currentTab)

  let cartOpen = currentTab === "cart";

  const handleClose = () => {
    dispatch(home());
  }

  const incrementQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
  }

  const decrementQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
  }

  const deleteProduct = (productId) => {
    dispatch(removeItem(productId));
  }

  return (
    <>
      <Dialog 
        className={classes.dialogRoot} 
        fullScreen open={cartOpen} onClose={handleClose} 
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
            <p className={`font-rb-semibold ${classes.pageTitle}`}>Cart</p>
            <IconButton>
              <DeleteIcon fillColor={"#d74b4b"} width="24" height={"24"} />
            </IconButton>
          </Toolbar>
        </AppBar>
        
        <div className={classes.cartContent}>
          {
            cartState.map((product) => {
              return (
                <div className={classes.productContainer}>
                  <div>
                    <img src={tempProductImage} alt="productImage" />
                  </div>
                  <div className={classes.productInfoContainer}>
                    <div className={`font-rb-semibold`}>{product.name}</div>
                    <Typography color="primary" variant="body1" className={`font-rb-semibold`}>{product.price}</Typography>
                    <div className={`${classes.productQuantityWidget}`}>
                      <Typography variant="body1" style={{fontSize: "14px",}}>Quantity</Typography>
                      <div className={classes.productQuantityDetailWidget}>
                        <Typography variant="body1" className={classes.productQuantityEditButtons} onClick={() => decrementQuantity(product.id)}>-</Typography>
                        <Typography variant="body1" style={{margin: "0 4px 0 4px", fontSize: "16px",}}>{product.amount}</Typography>
                        <Typography variant="body1" className={classes.productQuantityEditButtons} onClick={() => incrementQuantity(product.id)}>+</Typography>
                      </div>
                      <div style={{cursor: "pointer"}} onClick={() => deleteProduct(product.id)}>
                        <DeleteIcon fillColor={"#d74b4b"} />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
          
        </div>

        <div style={{display: "flex", flexDirection: "column", padding: "20px"}}>
          <div style={{
            display: "flex", 
            flexDirection: "row", 
            justifyContent: "space-between",
            marginBottom: "20px",
          }}>
            <Typography variant="body1" >Total</Typography>
            <Typography style={{fontSize: "21px",}} color="primary" className="font-rb-semibold" variant="body1">$1,233.00</Typography>
          </div>
          <Button 
            variant="contained" color="primary" 
            fullWidth size="large" className={classes.addToCartButton}
          >
            <p style={{fontSize: "20px" }} className="font-rb-semibold">Checkout</p>
          </Button>
        </div>
        
      </Dialog>
    </>
  )
}

export default Cart;