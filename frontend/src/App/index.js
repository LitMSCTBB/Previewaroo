import React from "react";

import styles from "./index.css.js";

import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

import {
  withStyles,
} from "@material-ui/core";

import MainContent from "../MainContent";

// neil change this
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#4dabf5",
      main: "#2196f3",
      dark: "#1769aa",
      contrastText: "#fff",
    },
    secondary: {
      light: "#33eb91",
      main: "#00e676",
      dark: "#00a152",
      contrastText: "#000",
    },
  },
  backgroundColor: "#f0f0e1",
});

const AppContent = (props) => {
  const { classes } = props;

  return (
    <>
      <div className={classes.site}>
        <div className={classes.siteContent}>
          <MainContent />
        </div>
      </div>
    </>
  );
}

const StyledAppInner = withStyles(styles)(AppContent);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledAppInner />
    </ThemeProvider>
  );
}

export default App;
