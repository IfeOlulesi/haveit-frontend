import React, {useEffect, useState,} from "react";
import { useSelector, useDispatch } from 'react-redux';
// import { useLoader, useFrame, Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { toast } from 'react-toastify';
import { addItem } from "../../../reducers/cartSlice";
import { makeStyles } from '@material-ui/core/styles';
import { EyeGlassesIcon } from "../../icons";

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from "@material-ui/core/Typography";
import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded';

// import modelImage from "../images/3dModels/scene.glb";

import "./index.css";
import ARView from "../ARView";


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
    // flexGrow: 0.1,
    height: "300px",
    maxHeight: "300px",
  },
  productImage: {
    width: "auto",
    height: "240px",
  },
  productInfoContainer:{
    backgroundColor: "#FFFFFF",
    flexGrow: 1,
    borderTopLeftRadius: "30px",
    borderTopRightRadius: "30px",
    boxShadow: "0px 4px 10px 5px rgba(0, 0, 0, 0.2)",
    padding: "2em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  shortDescriptionContainer: {

  },
  shortDescriptionTitle: {
    fontSize: "1.2rem",
    paddingTop: "16px",
  },
  shortDescriptionBody: {
    color: "#787878",
    paddingTop: "9px",
  },
  addToCartButton: {
    textTransform: "none",
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});


// const GltfModel = ({ modelPath, scale = 20, position = [0, 0, 0] }) => {
//   const ref = useRef();
//   const gltf = useLoader(GLTFLoader, modelPath);
//   // const [hovered, hover] = useState(false);

//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (ref.current.rotation.y += 0.003));
//   return (
//     <>
//       <primitive
//         ref={ref}
//         object={gltf.scene}
//         position={position}
//         scale={scale}
//         // onPointerOver={(event) => hover(true)}
//         // onPointerOut={(event) => hover(false)}
//       />
//     </>
//   );
// };

// const ModelViewer = ({ modelPath, scale = 20, position = [0, 0, 0] }) => {
//   return (
//     <Canvas>
//       <hemisphereLight intensity={1} skyColor="0xffeeb1" groundColor={"0x080820"}/>
//       <ambientLight intensity={0.6} />
//       <directionalLight intensity={0.4} />
//       <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//       <pointLight position={[-10, -10, -10]} />
//       <Suspense fallback={null}>
//         <GltfModel modelPath={modelPath} scale={scale} position={position} />
//         <OrbitControls />
//       </Suspense>
//     </Canvas>
//   );
// };


const ProductDetails = ({open, setOpen}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [ARViewOpen, setARViewOpen] = useState(false);
  const [ARLink, setARLink] = useState("");

  const productInViewId = useSelector(state => state.products.productInViewId);
  const productInViewType = useSelector(state => state.products.productInViewType);
  const categoryProducts = useSelector(state => state.products[productInViewType]);
  const particularProduct = categoryProducts.filter((el) => el.id === productInViewId)[0];


  const handleClose = () => {
    setOpen(false);
  };

  const launchARView = () => {
    setARViewOpen(true);
  }

  const addProductToCart = () => {
    dispatch(addItem(particularProduct));

    toast.success("Product added to cart! \nGo back to continue shopping👜", {
      theme: 'colored',
      toastId: 'addProductToCartSuccess',
    });
  }

  useEffect(() => {
    if (particularProduct.ARViewable) {
      setARLink(particularProduct.ARLink);
    }
  }, [particularProduct])

  return (
    <>
      <Dialog 
        className={classes.dialogRoot} 
        fullScreen open={open} onClose={handleClose} 
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
            {
              particularProduct.ARViewable === true ?
              <div className="pulse">
                <IconButton onClick={launchARView} aria-label="close">
                  <EyeGlassesIcon strokeColor={"#FFFFFF"} />
                </IconButton>
              </div> :
              // <div>
                <Tooltip title="AR currently unavailable" aria-label="AR currently unavailable">
                  <IconButton disabled aria-label="close">
                    <EyeGlassesIcon strokeColor={"#989898"} />
                  </IconButton>
                </Tooltip>
              // {/* </div> */}
            }
          </Toolbar>
        </AppBar>
        
        <div className={classes.imageContainer}>
          <img className={classes.productImage} src={particularProduct.imgSrc} alt="thumbnail" />
          {/* <ModelViewer scale="0.2" modelPath={modelImage} /> */}
        </div>

          <div className={`${classes.productInfoContainer}`}>
            <Typography variant="h5">{particularProduct.prodName}</Typography>
            <div>
              <div className={`font-rb-semibold ${classes.shortDescriptionTitle}`}> Newbies discount!🎉 </div>
              <div className= {`font-rb-regular ${classes.shortDescriptionBody}`}> We give 60% discount off all our products for every new customer that joins us for the first 3 months! </div>
            </div>
            <div>
              <div style={{
                display: "flex", flexDirection: "row", 
                justifyContent: "space-between",
                marginBottom: "16px",
                }}
              >
                <Typography variant="body1" style={{fontSize: "1.3rem !important"}}>Total</Typography>
                <Typography className="font-rb-bold" variant="body1" style={{color: "#5956E9", fontSize: "1.5rem"}}>{particularProduct.price}</Typography>
              </div>
              <div style={{display: "flex"}}>
                <Button 
                  variant="contained" color="primary" 
                  fullWidth size="large" className={classes.addToCartButton}
                  onClick={addProductToCart}
                >
                  <p style={{fontSize: "20px" }} className="font-rb-semibold">Add to Cart</p>
                </Button>
              </div>
            </div>
          </div>
        
      </Dialog>

      <ARView open={ARViewOpen} setOpen={setARViewOpen} ARLink={ARLink} />
    </>
  )
}

export default ProductDetails;