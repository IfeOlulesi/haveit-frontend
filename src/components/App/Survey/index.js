import React from "react"

import { useSelector, useDispatch } from 'react-redux';
import { closeSurvey } from "../../../reducers/surveySlice";

import { makeStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: "rgba(0, 0, 0, 0)",
    boxShadow: "none",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  toolBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dialogRoot: {
    display: "flex",
    flexDirection: "column",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
    flexGrow: 0.1,
  },
  productImage: {
    width: "240px",
    height: "240px",
  },
  addToCartButton: {
    textTransform: "none",
  },
  pageTitle: {
    color: "black",
  },
  cartContent: {
    display: "flex",
    flexDirection: "column",
    overflow: "scroll",
    flexGrow: 1,
    padding: "20px",
  },

}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Survey = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isSurveyPageOpen = useSelector(state => state.survey.surveyOpen)

  const handleClose = () => {
    dispatch(closeSurvey());
  }

  return (
    <>
      <Dialog 
        className={classes.dialogRoot} 
        fullScreen open={isSurveyPageOpen} onClose={handleClose} 
        TransitionComponent={Transition}
        PaperProps={{
          style: {
            backgroundColor: "#eee",
            boxShadow: "none"
          },
        }}
      >
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <IconButton edge="start" onClick={handleClose} aria-label="close">
              <KeyboardBackspaceRoundedIcon />
            </IconButton>
            <p className={`font-rb-semibold ${classes.pageTitle}`}>Feedback</p>
            <p></p>
            {/* <IconButton>
              <DeleteIcon fillColor={"#d74b4b"} width="24" height={"24"} />
            </IconButton> */}
          </Toolbar>
        </AppBar>
        
        <div className={classes.cartContent}>
          <iframe 
            title="Survey Form" 
            src="https://docs.google.com/forms/d/e/1FAIpQLSe37Y-2uSsc-ATNLKII0ws6Af-27K8B3olBH7V_x2y5yooPrg/viewform?embedded=true" 
            frameborder="0" marginheight="0" marginwidth="0"
            style={{
              flexGrow: 1,
              display: "flex",
            }}
          >
            Loading…
          </iframe>
        </div>

        {/* <div style={{display: "flex", flexDirection: "column", padding: "20px"}}>
          <div style={{
            display: "flex", 
            flexDirection: "row", 
            justifyContent: "space-between",
            marginBottom: "20px",
          }}>
            <Typography variant="body1" >Total</Typography>
            <Typography style={{fontSize: "21px",}} color="primary" className="font-rb-semibold" variant="body1">$1,233.00</Typography>
          </div>
          <Button 
            variant="contained" color="primary" 
            fullWidth size="large" className={classes.addToCartButton}
          >
            <p style={{fontSize: "20px" }} className="font-rb-semibold">Checkout</p>
          </Button>
        </div> */}
        
      </Dialog>
    </>
  )
}

export default Survey;