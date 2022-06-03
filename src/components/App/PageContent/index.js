import React, { useState } from "react";
import "./index.css"

import appleWatch from "./Mask Group.png";

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
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
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#2e1534',
  },
}));

const Wearables = () => {
  return (
    <div id="wearable-container">
      <div id="products-slider">
        <div className="product-container">
          <img src={appleWatch} alt="apple watch" className="apple-watch"/>
          <div className="prim-text">Apple Watch</div>
          <div className="sec-text">Series 6 . Red</div>
          <div className="price">$233</div>
        </div>
        <div className="product-container">
          <img src={appleWatch} alt="apple watch" className="apple-watch"/>
          <div className="prim-text">Apple Watch</div>
          <div className="sec-text">Series 6 . Red</div>
          <div className="price">$233</div>
        </div>
        <div className="product-container">
          <img src={appleWatch} alt="apple watch" className="apple-watch"/>
          <div className="prim-text">Apple Watch</div>
          <div className="sec-text">Series 6 . Red</div>
          <div className="price">$233</div>
        </div>
        
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="page-content-container">
      <div className="font-rb-bold" id="main-text"> Explore products <br /> in AR</div>
      <div className="font-rb-medium" id="secondary-text">Look out for the ___ icon to view products in AR</div>

      <div id="products-container">
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Wearables" />
          <AntTab label="Laptops" />
          <AntTab label="Phones" />
        </AntTabs>
        
        <div id="tab-Content-container"></div>
        {value === 0 && <Wearables />}
        {value === 1 && <Laptops />}
        {value === 2 && <Phones />}
        
      </div>
      </div>
    </div>
  )
}

export default PageContent;