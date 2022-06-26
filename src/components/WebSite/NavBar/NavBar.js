import React, { useState } from "react";
// import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import "./NavBar.css";
import NavCircleBg from "./navbar-circle-toggle.png"
import { useAuth0 } from "@auth0/auth0-react";

const Logo = ({className}) => {
  return (
    <div className={className}>
      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="11" height="11" fill="#5956E9"/>
        <rect x="5" y="6" width="11" height="11" fill="#FFDC5F"/>
      </svg>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  navbarContainer: {
    display: "flex",
    width: "100%",
    backgroundColor: "white",
    paddingTop: "1em",
    paddingLeft: "1em",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: "10px",
  },
  logoContaier: {
    display: "flex",
    flexDirection: "row",
  },
  navbarLogo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  navbarLogoName: {
    marginLeft: "7px",
  },
  displayFlex: {
    display: "flex",
  },
  hamburgerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  hamButton: {
    borderStyle: "none",
    background: "#FFFFFF",
  },
}))

const SubMenu = ({theClass}) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <ul 
      className={`scaffold nav__submenu ${theClass}`}
    >
      <img id='nav-circle-bg' src={NavCircleBg} alt="circle-bg"></img>
      <li id="nl-1" className="nav__submenu-item ">
        <a className="nav__submenu-item-link" href="/">About</a>
      </li>
      <li id="nl-2" className="nav__submenu-item ">
        <a className="nav__submenu-item-link" href="/">Support</a>
      </li>
      <li id="nl-3" className="nav__submenu-item ">
        <div className="nav__submenu-item-link" onClick={() => loginWithRedirect()}>Log In</div>
      </li>
    </ul>
  )
}

const NavBar = ({ scrollTop }) => {
  const classes = useStyles();
  const [toggleMenu, setToggleMenu] = useState({
    showingDropDownMenu: false, 
    menuClass: "",
    submenuClass: "right-side-out"
  })

  const handleClick = () => {
    if (toggleMenu.showingDropDownMenu === true) { // hide menu
      setToggleMenu({
        showingDropDownMenu: false, 
        menuClass: "",
        submenuClass: "right-side-out"
      })
    } else { // show menu
      setToggleMenu({
        showingDropDownMenu: true, 
        menuClass: "openMenu",
        submenuClass: "right-side-in"
      })
    }
  }

  const handleLeave = () => {
    setToggleMenu({
      showingDropDownMenu: false, 
      menuClass: "",
      submenuClass: "right-side-out"
    })
  }
   
  return (
    <div 
      className={classes.navbarContainer} 
      id="navbar" 
      style={{ 
        boxShadow: scrollTop > 0 ? 
          "inset 0 8px 5px -5px rgb(0 0 0 / 0.4)" : "none",
        }}>
      <div className={classes.logoContaier}>
        <Logo className={classes.navbarLogo} />
        <h2 className={`font-rb-bold ${classes.navbarLogoName}`}>HaveIt</h2>
      </div>
      <div className={`${classes.displayFlex} ${classes.hamburgerContainer}`}>
        <button className={`${classes.hamButton}`} onMouseLeave={handleLeave}>
          <div 
            id="menu-container" 
            className={toggleMenu.menuClass}
            onClick={handleClick}
          >
            <div className="menu-line" id='menu-line-1'></div>
            <div className="menu-line" id='menu-line-2'></div>
            <div className="menu-line" id='menu-line-3'></div>
          </div>

          <SubMenu theClass = {toggleMenu.submenuClass}  />
        </button>
      </div>
    </div>
  )
}

export default NavBar;