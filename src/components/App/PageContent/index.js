import React, { useState } from "react";
import "./index.css"

import appleWatch from "./Mask Group.png";
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
    marginRight: theme.spacing(4),
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

const Wearables = ({ setProductDetailsOpen }) => {

  const openProductDetailsPage = () => setProductDetailsOpen(true);

  const products = [
    {imgSrc: "", prodName: "Apple Watch", sDesc: "Series 6 . Red", price: "$359"},
    {imgSrc: "", prodName: "Mango Watch", sDesc: "Series 6 . Yellow", price: "$253"},
    {imgSrc: "", prodName: "Pineapple Watch", sDesc: "Series 6 . Green", price: "$3,393"},
    {imgSrc: "", prodName: "Grape Watch", sDesc: "Series 6 . Purple", price: "$9,923"},
    {imgSrc: "", prodName: "Watermelon Watch", sDesc: "Series 6 . Red", price: "$59"},
  ]

  return (
    <div id="wearable-container">
      <div id="products-slider">
        {products.map((product) => {
          return (
            <div className="product-container" onClick={openProductDetailsPage}>
              <img src={appleWatch} alt="apple watch" className="apple-watch"/>
              <Typography variant="subtitle1" className="prim-text font-rb-semibold" style={{marginTop: "-20px",}}>{product.prodName}</Typography>
              <Typography variant="subtitle2" className="sec-text font-rb-medium">{product.sDesc}</Typography>
              <Typography variant="body1" className="price font-rb-bold">{product.price}</Typography>
            </div>
          )
        })}
      </div>
    </div>
  )
}
const Laptops = () => {
  return (
    <p>You can view laptops here</p>
  )
}
const Phones = () => {
  return (
    <p>You can view phones here</p>
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
              <AntTab label="Wearables" />
              <AntTab label="Laptops" />
              <AntTab label="Phones" />
            </AntTabs>
            
            <div id="tab-Content-container">
              {value === 0 && <Wearables setProductDetailsOpen={setProductDetailsOpen} />}
              {value === 1 && <Laptops />}
              {value === 2 && <Phones />}
            </div>
          </div>
        </div>
      </div>
      <ProductDetails open={productDetailsOpen} setOpen={setProductDetailsOpen} />
    </>
  )
}

export default PageContent;