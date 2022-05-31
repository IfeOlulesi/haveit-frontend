import React from "react";
import './App.css';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import NavBar from "./components/NavBar/NavBar";
import LandingPageContent from "./components/LandingPageContent/LandingPageContent";

const useStyles = makeStyles((theme) => ({
  landingPageContainer: {
    paddingTop: "3em",
    // border: "1px solid lightgrey",
    display: "flex",
  },
}))

const projectColors = {
  primary: "#5956E9",
  secondary: "#FFDC5F",
}

const theme = createTheme({
  palette: {
    primary: {
      // contrastText: colors.green[500],
      // dark: colors.red[800],
      main: projectColors.primary,
      // light: colors.indigo[100]
    },
    secondary: {
      main: projectColors.secondary,
    },
  },
  typography: {
    fontFamily: [
      'RalewayRegular',
      'sans-serif',
    ].join(','),
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className="alpha-container wrapper display-flex">
        <NavBar />
        <LandingPageContent />
      </div>
    </ThemeProvider>
  );
}

export default App;
