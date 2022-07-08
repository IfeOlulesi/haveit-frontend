import React from "react"

import { useSelector, useDispatch } from 'react-redux';

import { increaseQuantity, decreaseQuantity, removeItem, clearCart, updateTotalPrice } from "../../../reducers/cartSlice";
import { home } from '../../../reducers/appSlice';
import { openSurvey } from "../../../reducers/surveySlice";

import { makeStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';

import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded';
import { DeleteIcon } from "../../icons";

// import tempProductImage from "./image 15.png";
import cartEmptyImage from "../images/cart-empty-placeholder.png";

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
    maxHeight: "4.5rem",
  },
  productImageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  addToCartButton: {
    textTransform: "none",
    marginTop: "2rem",
  },
  addToCartButtonEmpty: {
    textTransform: "none",
    width: "15rem",
    marginTop: "2rem",
  },
  pageTitle: {
    color: "black",
  },
  cartContent: {
    display: "flex",
    flexDirection: "column",
    overflow: "scroll",
    flexGrow: 1,
    padding: "10px 20px 0 20px",
  },
  productContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "10px 10px 0 10px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    marginBottom: "20px",
    transition: "0.6s",
    justifyContent: "space-between",
    overflow: "scroll",
    minHeight: "8rem",
  },
  productInfoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "end",
    padding: "10px 0 10px 20px",
  },
  productQuantityWidget: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "11em",
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
  },
  cartEmptyContainerDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cartEmptyPrimaryText: {
    marginTop: "30px",
  },
  cartEmptySecondaryText: {
    opacity: "57%", 
    textAlign: "center",
    width: "15rem",
    marginTop: "0.5rem"
  },

}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Cart = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const cartState = useSelector(state => state.cart.products);
  const currentTab = useSelector(state => state.app.currentTab);
  const thePrice = useSelector(state => state.cart.totalPrice);

  let cartOpen = currentTab === "cart";


  const handleClose = () => {
    dispatch(home());
  }
  const incrementQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
    dispatch(updateTotalPrice());
  }
  const decrementQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
    dispatch(updateTotalPrice());
  }
  const deleteProduct = (productId) => {
    dispatch(removeItem(productId));
    dispatch(updateTotalPrice());
  }
  const checkout = () => {
    dispatch(openSurvey());
  }
  const emptyCart = () => {
    dispatch(clearCart());
    dispatch(updateTotalPrice());
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
            <Tooltip title="Empty cart" arrow>
              <IconButton onClick={emptyCart}>
                <DeleteIcon fillColor={"#d74b4b"} width="24" height={"24"} />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>

        <div className={classes.cartContent}>
          {
            cartState.length > 0 ?
              cartState.map((product) => {
                return (
                  <div className={classes.productContainer} key={product.name}>
                    <div className={classes.productImageContainer}>
                      <img src={product.imgSrc} alt="productImage" className={classes.productImage} />
                    </div>
                    <div className={classes.productInfoContainer}>
                      <div className={`font-rb-semibold`}>{product.name}</div>
                      <Typography color="primary" variant="body1" className={`font-rb-semibold`}>{product.price}</Typography>
                      <div className={`${classes.productQuantityWidget}`}>
                        <Typography variant="body1" style={{ fontSize: "14px", }}>Quantity</Typography>
                        <div className={classes.productQuantityDetailWidget}>
                          <Typography variant="body1" className={classes.productQuantityEditButtons} onClick={() => decrementQuantity(product.id)}>-</Typography>
                          <Typography variant="body1" style={{ margin: "0 4px 0 4px", fontSize: "16px", }}>{product.quantity}</Typography>
                          <Typography variant="body1" className={classes.productQuantityEditButtons} onClick={() => incrementQuantity(product.id)}>+</Typography>
                        </div>
                        <div style={{ cursor: "pointer" }} onClick={() => deleteProduct(product.id)}>
                          <DeleteIcon fillColor={"#d74b4b"} />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }) :
              <div className={classes.cartEmptyContainerDiv}>
                <img src={cartEmptyImage} alt="Cart is empty" style={{width: "320px"}} />
                <Typography variant="h5" className={classes.cartEmptyPrimaryText} > <b>Cart is empty</b> </Typography>
                <Typography variant="body1" className={classes.cartEmptySecondaryText}> 
                  Continue shopping to add items to the cart 
                </Typography>
                <Button
                  variant="contained" color="primary"
                  fullWidth size="large" className={classes.addToCartButtonEmpty}
                  onClick={handleClose}
                >
                  <p style={{ fontSize: "20px" }} className="font-rb-semibold">Continue Shopping</p>
                </Button>
              </div>
          }

        </div>

        {cartState.length > 0 &&
          <div style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
            <div style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}>
              <Typography variant="body1" >Total</Typography>
              <Typography style={{ fontSize: "21px", }} color="primary" className="font-rb-semibold" variant="body1">${thePrice}</Typography>
            </div>
            <Button
              variant="contained" color="primary"
              fullWidth size="large" className={classes.addToCartButton}
              onClick={checkout}
            >
              <p style={{ fontSize: "20px" }} className="font-rb-semibold">Checkout</p>
            </Button>
          </div>
        }

      </Dialog>
    </>
  )
}

export default Cart;