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


const projectColors = {
  primary: "#5956E9",
  secondary: "#FFDC5F",
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
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<WebSite />} />
          <Route path="/app" element={
            isLoading ? <LoadingOverlay open={overlayOpen} setOpen={setOverlayOpen} /> :
            <RequireAuth authStatus={isAuthenticated} loading={isLoading}>
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
