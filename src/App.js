import React, { useState, useEffect } from "react";
import './App.css';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import { useAuth0 } from "@auth0/auth0-react";

import MainApp from "./components/App";
import WebSite from "./components/WebSite";
import LoadingOverlay from "./components/utils/LoadingOverlay";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// var request = require("request");

// var options = { method: 'POST',
//   url: 'https://dev-8gitaj8h.us.auth0.com/oauth/token',
//   headers: { 'content-type': 'application/json', "Access-Control-Allow-Origin": "https://dev-8gitaj8h.us.auth0.com/oauth/token" },
//   body: '{"client_id":"C79sOgFUFNIOk4q4h81yUaa451Rc656j","client_secret":"p1oArMM3CzSFD0o717iZqf3gKifMoEZQT_FCtHi0Py0l-SsVkoHz_CMn1B8N_rIZ","audience":"https://dev-8gitaj8h.us.auth0.com/api/v2/","grant_type":"client_credentials"}' };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });

const projectColors = {
  primary: "#5956E9", // purple
  secondary: "#FFDC5F",  // yellow
}

const theme = createTheme({
  palette: {
    primary: {
      main: projectColors.primary,
    },
    secondary: {
      main: projectColors.secondary,
    },
    // background: {
    //   default: "#F2F2F2"
    // }
  },
  typography: {
    fontFamily: [
      'RalewayRegular',
      'sans-serif',
    ].join(','),
  },
});


const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const [overlayOpen, setOverlayOpen] = useState(false);
  
  useEffect(() => {
    if (isLoading === true) setOverlayOpen(true);
  }, [isLoading])

  return (
    <ThemeProvider theme = {theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element = {<WebSite />} />
          <Route path = "/app" element = {
            isLoading ? <LoadingOverlay open={overlayOpen} setOpen = {setOverlayOpen} /> :
            <RequireAuth authStatus = {isAuthenticated} loading = {isLoading}>
              <MainApp />
            </RequireAuth>
            } 
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const RequireAuth = ({ children, authStatus }) => {
  const { loginWithRedirect } = useAuth0();

  if (authStatus === false) {
    loginWithRedirect();
  }
  else return children;
}


export default App;
