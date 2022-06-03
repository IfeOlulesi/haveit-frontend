import React from "react";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  loaderContainer: {
    display: "flex",
    flexDirection: "column", 
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#f2f2f2',
    // color: "#FFF",
  },
}))

const LoadingOverlay = ({open, setOpen}) => {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Backdrop open={true} className={classes.backdrop}>
        <div className={classes.loaderContainer}>
          <CircularProgress color="primary" />
          <div className="font-rb-medium">Loading...</div>
        </div>
      </Backdrop>
    </div>
  )
}

export default LoadingOverlay;