import React, { useState } from "react";
import Badge from '@material-ui/core/Badge';
import { useSelector, useDispatch } from "react-redux";
import { updateProductInViewId, updateProductInViewType } from "../../../reducers/productSlice";
// import { EyeGlassesIcon } from "../../icons";
import "./index.css"


import ProductDetails from "../ProductDetails"; 

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const AntTabs = withStyles({
  indicator: {
    backgroundColor: '#5956E9',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: "1.05rem",
    marginRight: theme.spacing(2),
    color: '#9A9A9D',
    '&:hover': {
      color: '#5956E9',
    opacity: 1,
    },
    '&$selected': {
      color: '#5956E9',
      fontWeight: "600",
    },
    '&:focus': {
      color: '#5956E9',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
}));

const Products = ({ value, setProductDetailsOpen }) => {
  
  const dispatch = useDispatch();
  const wearables = useSelector(state => state.products.wearables);
  const furniture = useSelector(state => state.products.furniture);

  const productsDict = {
    "furniture": furniture,
    "wearables": wearables,
  }

  const openProductDetailsPage = ( productId ) => {
    setProductDetailsOpen(true);
    dispatch(updateProductInViewId(productId));
    dispatch(updateProductInViewType(Object.keys(productsDict)[value]))
  };

  return (
    <div id="wearable-container">
      <div id="products-slider">
        {productsDict[Object.keys(productsDict)[value]].map((product) => {
          return (
            <Badge badgeContent={"AR"} color="primary" invisible={!product.ARViewable} key={product.id}>
              <div className="product-container" onClick={() => openProductDetailsPage(product.id)}>
                <img src={product.imgSrc} alt="apple watch" className="apple-watch"/>
                <Typography variant="subtitle1" className="prim-text font-rb-semibold" style={{marginTop: "10px",}}>{product.prodName}</Typography>
                <Typography variant="subtitle2" className="sec-text font-rb-medium">{product.sDesc}</Typography>
                <Typography variant="body1" className="price font-rb-bold">{product.price}</Typography>
              </div>
            </Badge>
          )
        })}
      </div>
    </div>
  )
}


const PageContent = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [productDetailsOpen, setProductDetailsOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div id="page-content-container">
        <div className="font-rb-bold" id="main-text"> Explore products <br /> in AR</div>
        {/* <div className="font-rb-medium" id="secondary-text">Look out for the ___ icon to view products in AR</div> */}

        <div id="products-container">
          <div className={classes.demo1}>
            <AntTabs value={value} onChange={handleChange} aria-label="ant example">
              <AntTab label="Furniture" />
              <AntTab label="Wearables" />
              {/* <AntTab label="Phones" /> */}
            </AntTabs>
            
            <div id="tab-Content-container">
              <Products value={value} setProductDetailsOpen={setProductDetailsOpen} />
            </div>
          </div>
        </div>
      </div>
      <ProductDetails open={productDetailsOpen} setOpen={setProductDetailsOpen} />
    </>
  )
}

export default PageContent;