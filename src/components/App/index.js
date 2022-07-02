import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { home, favorites, profile, cart } from '../../reducers/appSlice';

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
  box: {
    // width: "30px",
    // height: "30px",
    // border: "1px solid grey",
  }
}))

const MainApp = () => {
  const classes = useStyles();

  const currentTab = useSelector(state => state.app.currentTab)
  const dispatch = useDispatch()

  return (
    <div className={classes.webAppContainer}>
      <AppNavBar />
      <PageContent />
      <div className={classes.utilBar}>
        <div onClick={() => dispatch(home())} className={classes.box}>
          {currentTab === "home" ? <HomeFilled /> : <HomeOutline />}
        </div>
        <div onClick={() => dispatch(favorites())} className={classes.box}>
          {currentTab === "favorites" ? <HeartFilled /> : <HeartOutlined />}
        </div>
        <div onClick={() => dispatch(profile())} className={classes.box}>
          {currentTab === "profile" ? <ProfileFilled /> : <ProfileOutline />}
        </div>
        <div onClick={() => dispatch(cart())} className={classes.box}>
          {currentTab === "cart" ? <CartFilled /> : <CartOutlined />}
        </div>
      </div>

      <Cart />
      <Survey />
    </div>
  )
}

export default MainApp;