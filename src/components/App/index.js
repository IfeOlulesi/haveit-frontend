import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';

import SpeedDial from '@material-ui/lab/SpeedDial';
// import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import { ChatIcon } from "../icons";

import { home, favorites, profile, cart } from '../../reducers/appSlice';
import { openSurvey } from "../../reducers/surveySlice";

import { useSelector, useDispatch } from 'react-redux';

import {
  HomeOutline,
  HomeFilled,
  ProfileOutline,
  ProfileFilled,
  CartOutlined,
  CartFilled,
  HeartFilled,
  HeartOutlined,
} from "../icons";

import AppNavBar from "./AppNavbar";
import PageContent from "./PageContent";

import Cart from "./Cart";
import Survey from "./Survey";
import ComingSoon from "./ComingSoon";

import { Tooltip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  webAppContainer: {
    backgroundColor: "#eee",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  utilBar: {
    height: "4rem", 
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "space-around",
    paddingTop: "10px",
  },

}))

const MainApp = () => {
  const classes = useStyles();
  const dispatch = useDispatch()

  const currentTab = useSelector(state => state.app.currentTab)
  const items = useSelector(state => state.cart.products);

  const allItems = items.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className={classes.webAppContainer}>
      <AppNavBar />
      <PageContent />

      <Tooltip title={
        <p style={{fontSize: "14px", padding: "3px",}}> Fill Feedback Form! </ p>
      } arrow>
        <SpeedDial
          ariaLabel="SpeedDial example"
          icon={<ChatIcon />}
          open={false}
          onClick={() => dispatch(openSurvey())}
          >
        </SpeedDial>
      </Tooltip>

      <div className={classes.utilBar}>
        <div onClick={() => dispatch(home())} style={{cursor: "pointer",}}>
          {currentTab === "home" ? <HomeFilled /> : <HomeOutline />}
        </div>
        <div onClick={() => dispatch(favorites())} style={{cursor: "pointer",}}>
          {currentTab === "favorites" ? <HeartFilled /> : <HeartOutlined />}
        </div>
        <div onClick={() => dispatch(profile())} style={{cursor: "pointer",}}>
          {currentTab === "profile" ? <ProfileFilled /> : <ProfileOutline />}
        </div>
        <div onClick={() => dispatch(cart())} style={{cursor: "pointer",}}>
          {
            currentTab === "cart" ? 
            <CartFilled /> : 
            
            <Badge badgeContent={allItems} color="secondary" showZero max={99}>
              <CartOutlined />
            </Badge>
          }
        </div>
      </div>
      
      <ComingSoon />
      <Cart />
      <Survey />
    </div>
  )
}

export default MainApp;