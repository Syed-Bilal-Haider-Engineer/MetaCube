// import React, { useEffect, useState } from "react";
// import {
//     Box,
//     Dialog,
//     DialogContent,
//     DialogTitle,
//     Typography,
//     useTheme,
//     Stepper,
//     Step,
//     StepLabel,
//     Divider,
//     useMediaQuery,
//     Grid,
//     Button,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import StepConnector, {
//     stepConnectorClasses,
// } from "@mui/material/StepConnector";
// import { AnimatePresence, motion } from "framer-motion";
// import { useAccount, useConnect, useDisconnect } from "wagmi";

// import DoneIcon from "@mui/icons-material/Done";
// import CloseIcon from "@mui/icons-material/Close";
// import metamask from "../../images/wallet/metamask.png";
// import walletconnect from "../../images/wallet/walletconnect.png";
// import binance from "../../images/wallet/binance.png";
// import coin from "../../images/wallet/coinbase.png";

// const spring = {
//     type: "spring",
//     stiffness: 1000,
//     damping: 7,
//     delay: 1.8,
// };

// const QontoConnector = styled(StepConnector)(({ theme }) => ({
//     [`&.${stepConnectorClasses.alternativeLabel}`]: {
//         top: 10,
//         left: "calc(-50% + 5px)",
//         right: "calc(50% + 5px)",
//     },
//     [`&.${stepConnectorClasses.active}`]: {
//         [`& .${stepConnectorClasses.line}`]: {
//             borderColor: "#6FDA44",
//         },
//     },
//     [`&.${stepConnectorClasses.completed}`]: {
//         [`& .${stepConnectorClasses.line}`]: {
//             borderColor: "#6FDA44",
//         },
//     },
//     [`& .${stepConnectorClasses.line}`]: {
//         borderColor:
//             theme.palette.mode === "dark" ? theme.palette.grey[800] : "white",
//         borderTopWidth: 3,
//         borderRadius: 1,
//     },
// }));

// const QontoStepIconRoot = styled("div")(({ _theme, ownerState }) => ({
//     color: "black",
//     display: "flex",
//     height: 22,
//     alignItems: "center",
//     ...(ownerState.active && {
//         color: "white",
//     }),
//     "& .QontoStepIcon-completedIcon": {
//         width: 10,
//         height: 10,
//         color: "white",
//         borderRadius: "50%",
//         zIndex: 1,
//         backgroundColor: "currentColor",
//     },
//     "& .QontoStepIcon-circle": {
//         width: 10,
//         height: 10,
//         borderRadius: "50%",
//         backgroundColor: "currentColor",
//     },
// }));

// function QontoStepIcon(props) {
//     const { active, completed, className } = props;

//     return (
//         <QontoStepIconRoot ownerState={{ active }} className={className}>
//             {completed ? (
//                 <div className="QontoStepIcon-completedIcon" />
//             ) : (
//                 <div className="QontoStepIcon-circle" />
//             )}
//         </QontoStepIconRoot>
//     );
// }

// const steps = [1, 2, 3];

// function ConnectionModal({ connectModal, toggleConnectModal }) {
//     const theme = useTheme();
//     const matches = useMediaQuery("(max-width:550px)");
//     const { connect, connectors, error, isError, isLoading } = useConnect();
//     const { isConnected } = useAccount();
//     const { disconnect } = useDisconnect()

//     const images = [metamask, coin, walletconnect, binance];

//     const [activeStep, setActiveStep] = useState(0);

//     const handleNext = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     };

//     useEffect(() => {
//         if (isError) {
//             setTimeout(() => {
//                 setActiveStep(0);
//             }, 4000);
//         }
//     }, [isError]);

//     useEffect(() => {
//         if (isConnected) {
//             toggleConnectModal();
//         }
//     }, [isConnected]);

//     console.log(isConnected, "isConnected===>")
//     return (
//         <Dialog
//             fullWidth={true}
//             maxWidth="md"
//             open={connectModal}
//             scroll="paper"
//             aria-labelledby="scroll-dialog-title"
//             aria-describedby="scroll-dialog-description"
//             onClose={toggleConnectModal}
//             sx={{
//                 margin: 0,
//                 padding: 0,
//                 ".MuiDialog-paperScrollPaper": {
//                     borderRadius: "7px",
//                     backgroundColor: "white",
//                 },
//             }}
//         >
//             <DialogContent
//                 sx={{
//                     width: "100%",
//                     margin: 0,
//                     padding: 0,
//                     display: "flex",
//                     overflow: "hidden",
//                 }}
//             >
//                 <Grid container>
//                     <Grid
//                         item
//                         xs={12}
//                         sm={6}
//                         md={5}
//                         sx={{
//                             backgroundColor: "#6FDA44",
//                             display: { sm: "block", xs: "none" },
//                         }}
//                     >
//                         <Box p={3} height="auto">
//                             <img src="" width="50px" alt="" />
//                             <Box
//                                 fontSize={{ xs: "25px", sm: "25px", md: "30px" }}
//                                 fontWeight={500}
//                             >
//                                 Get Started
//                             </Box>
//                             <Box
//                                 fontSize={{ xs: "14px", sm: "14px", md: "18px" }}
//                                 fontWeight={500}
//                             >
//                                 Connect your wallet
//                             </Box>
//                             <Box fontSize={{ xs: "12px", sm: "12px", md: "14px" }}>
//                                 Connecting your wallet is like “logging in” to Web3. Select your
//                                 wallet from the options to get started.
//                             </Box>
//                             <Box mt={4}>
//                                 <Stepper
//                                     alternativeLabel
//                                     activeStep={activeStep}
//                                     connector={<QontoConnector />}
//                                 >
//                                     {steps.map((label) => (
//                                         <Step key={label}>
//                                             <StepLabel StepIconComponent={QontoStepIcon}>
//                                                 {label}
//                                             </StepLabel>
//                                         </Step>
//                                     ))}
//                                 </Stepper>
//                             </Box>
//                         </Box>
//                     </Grid>
//                     <Grid
//                         item
//                         xs={12}
//                         sm={6}
//                         md={7}
//                         sx={{
//                             backgroundColor: "white",
//                             borderLeft: "1px solid green",
//                         }}
//                     >
//                         <Box
//                             sx={{
//                                 width: "100%",
//                             }}
//                         >
//                             <AnimatePresence>
//                                 {activeStep === 0 && (
//                                     <DialogTitle
//                                         sx={{
//                                             padding: 0,
//                                         }}
//                                     >
//                                         <Box
//                                             sx={{
//                                                 display: "flex",
//                                                 justifyContent: "space-between",
//                                                 alignItems: "center",
//                                             }}
//                                             px={1.5}
//                                             py={2}
//                                         >
//                                             <Box
//                                                 fontSize={{ xs: "14px", sm: "18px" }}
//                                                 fontWeight={600}
//                                             >
//                                                 Available Wallets
//                                             </Box>

//                                             <Box
//                                                 onClick={toggleConnectModal}
//                                                 display="flex"
//                                                 alignItems="center"
//                                                 p={0.5}
//                                                 borderRadius="100px"
//                                                 sx={{
//                                                     cursor: "pointer",
//                                                     "&:hover": {
//                                                         bgcolor: "#6FDA44",
//                                                     },
//                                                 }}
//                                             >
//                                                 <CloseIcon />
//                                             </Box>
//                                         </Box>
//                                         <Divider
//                                             style={{
//                                                 height: "1px",
//                                                 background: "black",
//                                             }}
//                                         />
//                                         <Box>
//                                             <Box
//                                                 display="flex"
//                                                 flexDirection={matches ? "column" : "row"}
//                                                 flexWrap="wrap"
//                                                 justifyContent="center"
//                                                 alignItems="center"
//                                                 mt={2}
//                                             >
//                                                 {connectors?.map((connector, index) => {
//                                                     return (
//                                                         <Box
//                                                             my={1}
//                                                             mr={2}
//                                                             sx={{
//                                                                 width: "100%",
//                                                                 maxWidth: "220px",
//                                                                 padding: "1rem",
//                                                                 border: "1px solid #6FDA44",
//                                                                 background: "white",
//                                                                 boxShadow: "0px 0px 5px 0px black ",
//                                                                 fontSize: { md: "18px", xs: "14px" },
//                                                                 fontWeight: "700",
//                                                                 cursor: "pointer",
//                                                                 "&:hover": {
//                                                                     background: "#6FDA44",
//                                                                 },
//                                                                 borderRadius: "18px",
//                                                                 display: "flex",
//                                                                 alignItems: "center",
//                                                             }}
//                                                             component={motion.div}
//                                                             initial={{ opacity: 0, x: 30 }}
//                                                             animate={{ opacity: 1, x: 0 }}
//                                                             exit={{ opacity: 0, x: -30 }}
//                                                             transition={{
//                                                                 duration: 0.5,
//                                                                 delay: index * 0.2,
//                                                             }}
//                                                             disabled={!connector.ready}
//                                                             key={index}
//                                                             onClick={() => {

//                                                                 handleNext();
//                                                                 connect({ connector });
//                                                             }}
//                                                         >
//                                                             <Box
//                                                                 border={"1px solid black"}
//                                                                 width={{ xs: "40px", sm: "48px" }}
//                                                                 height={{ xs: "40px", sm: "48px" }}
//                                                                 borderRadius="12px"
//                                                                 display="flex"
//                                                                 justifyContent="center"
//                                                                 alignItems="center"
//                                                                 mr={2}
//                                                             >
//                                                                 <img
//                                                                     src={images[index]}
//                                                                     width="30"
//                                                                     alt="logo"
//                                                                 />
//                                                             </Box>
//                                                             <Typography
//                                                                 sx={{
//                                                                     fontWeight: 400,
//                                                                     fontStyle: "normal",
//                                                                     fontSize: { xs: "13px", sm: "18px" },
//                                                                     fontFamily: "Jost,sans-serif",
//                                                                     textAlign: "center",
//                                                                 }}
//                                                                 variant="h1"
//                                                             >
//                                                                 {connector.name}
//                                                             </Typography>
//                                                         </Box>
//                                                     );
//                                                 })}

//                                             </Box>
//                                         </Box>
//                                     </DialogTitle>
//                                 )}
//                             </AnimatePresence>
//                             <AnimatePresence>
//                                 {activeStep === 1 && (
//                                     <React.Fragment>
//                                         <DialogTitle
//                                             sx={{
//                                                 padding: 0,
//                                             }}
//                                             component={motion.div}
//                                             initial={{ display: "none" }}
//                                             animate={{ display: "block" }}
//                                             transition={{
//                                                 delay: 1.1,
//                                             }}
//                                         >
//                                             <Box
//                                                 sx={{
//                                                     display: "flex",
//                                                     justifyContent: "space-between",
//                                                     alignItems: "center",
//                                                 }}
//                                                 px={1.5}
//                                                 py={2}
//                                             >
//                                                 <Box
//                                                     fontSize={{ xs: "14px", sm: "18px" }}
//                                                     fontWeight={600}
//                                                 >
//                                                     Connecting
//                                                 </Box>
//                                                 <Box
//                                                     onClick={toggleConnectModal}
//                                                     display="flex"
//                                                     alignItems="center"
//                                                     p={0.5}
//                                                     borderRadius="100px"
//                                                     sx={{
//                                                         cursor: "pointer",
//                                                         "&:hover": {
//                                                             bgcolor: "#6C7DEB",
//                                                         },
//                                                     }}
//                                                 >
//                                                     <CloseIcon />
//                                                 </Box>
//                                             </Box>
//                                             <Divider
//                                                 style={{
//                                                     height: "1px",
//                                                     background: "white",
//                                                 }}
//                                             />
//                                             <Box>
//                                                 {isLoading ? (
//                                                     <Box
//                                                         borderRadius="25px"
//                                                         sx={{
//                                                             padding: "1rem",
//                                                         }}
//                                                         component={motion.div}
//                                                         initial={{ opacity: 0, x: 30 }}
//                                                         animate={{ opacity: 1, x: 0 }}
//                                                         exit={{ opacity: 0, x: -30 }}
//                                                         transition={{
//                                                             duration: 0.5,
//                                                             delay: 1.1,
//                                                         }}
//                                                     >
//                                                         <lottie-player
//                                                             autoplay
//                                                             loop
//                                                             mode="normal"
//                                                             src="https://assets2.lottiefiles.com/temp/lf20_U1CPFF.json"
//                                                             style={{ width: "100%" }}
//                                                         ></lottie-player>
//                                                     </Box>
//                                                 ) : (
//                                                     handleNext()
//                                                 )}
//                                             </Box>
//                                         </DialogTitle>
//                                     </React.Fragment>
//                                 )}
//                             </AnimatePresence>
//                             <AnimatePresence>
//                                 {activeStep === 2 && (
//                                     <React.Fragment>
//                                         {error ? (
//                                             <DialogTitle
//                                                 sx={{
//                                                     padding: 0,
//                                                 }}
//                                                 component={motion.div}
//                                                 initial={{ display: "none" }}
//                                                 animate={{ display: "block" }}
//                                                 transition={{
//                                                     delay: 1.8,
//                                                 }}
//                                             >
//                                                 <Box
//                                                     sx={{
//                                                         display: "flex",
//                                                         justifyContent: "space-between",
//                                                         alignItems: "center",
//                                                     }}
//                                                     px={1.5}
//                                                     py={2}
//                                                 >
//                                                     <Box
//                                                         fontSize={{ xs: "14px", sm: "18px" }}
//                                                         fontWeight={600}
//                                                     >
//                                                         Connection Error
//                                                     </Box>
//                                                     <Box
//                                                         onClick={toggleConnectModal}
//                                                         display="flex"
//                                                         alignItems="center"
//                                                         p={0.5}
//                                                         borderRadius="100px"
//                                                         sx={{
//                                                             cursor: "pointer",
//                                                             "&:hover": {
//                                                                 bgcolor: "#6C7DEB",
//                                                             },
//                                                         }}
//                                                     >
//                                                         <CloseIcon />
//                                                     </Box>
//                                                 </Box>
//                                                 <Divider
//                                                     style={{
//                                                         height: "1px",
//                                                         background: "#c0c0c0",
//                                                     }}
//                                                 />
//                                                 <Box>
//                                                     <Box
//                                                         m={3}
//                                                         borderRadius="25px"
//                                                         bgcolor={"red"}
//                                                         sx={{
//                                                             padding: "1rem",
//                                                             border: "1px solid #c0c0c0",
//                                                         }}
//                                                         display="flex"
//                                                         justifyContent="space-between"
//                                                         alignItems="center"
//                                                         component={motion.div}
//                                                         initial={{ x: -10 }}
//                                                         animate={{ x: 5 }}
//                                                         transition={spring}
//                                                     >
//                                                         {error.message}
//                                                     </Box>
//                                                 </Box>
//                                             </DialogTitle>
//                                         ) : (
//                                             <DialogTitle
//                                                 sx={{
//                                                     padding: 0,
//                                                 }}
//                                                 component={motion.div}
//                                                 initial={{ display: "none" }}
//                                                 animate={{ display: "block" }}
//                                                 transition={{
//                                                     delay: 1.8,
//                                                 }}
//                                             >
//                                                 <Box
//                                                     sx={{
//                                                         display: "flex",
//                                                         justifyContent: "space-between",
//                                                         alignItems: "center",
//                                                     }}
//                                                     px={1.5}
//                                                     py={2}
//                                                 >
//                                                     <Box
//                                                         fontSize={{ xs: "14px", sm: "18px" }}
//                                                         fontWeight={600}
//                                                     >
//                                                         Connection Successfull
//                                                     </Box>
//                                                     <Box
//                                                         onClick={toggleConnectModal}
//                                                         display="flex"
//                                                         alignItems="center"
//                                                         p={0.5}
//                                                         borderRadius="100px"
//                                                         sx={{
//                                                             cursor: "pointer",
//                                                             "&:hover": {
//                                                                 bgcolor: "#6C7DEB",
//                                                             },
//                                                         }}
//                                                     >
//                                                         <CloseIcon />
//                                                     </Box>
//                                                 </Box>
//                                                 <Divider
//                                                     style={{
//                                                         height: "1px",
//                                                         background: `${theme.palette.background.borderLight}`,
//                                                     }}
//                                                 />
//                                                 <Box>
//                                                     <Box
//                                                         m={3}
//                                                         borderRadius="25px"
//                                                         bgcolor={theme.palette.background.lightGreen}
//                                                         sx={{
//                                                             padding: "1rem",
//                                                             border: `1px solid ${theme.palette.background.greenColor}`,
//                                                         }}
//                                                         display="flex"
//                                                         justifyContent="space-between"
//                                                         alignItems="center"
//                                                         component={motion.div}
//                                                         initial={{ opacity: 0, x: 30 }}
//                                                         animate={{ opacity: 1, x: 0 }}
//                                                         exit={{ opacity: 0, x: -30 }}
//                                                         transition={{
//                                                             duration: 0.5,
//                                                             delay: 1.8,
//                                                         }}
//                                                     >
//                                                         <Box fontSize="18px" fontWeight={400}>
//                                                             Connected
//                                                         </Box>
//                                                         <DoneIcon
//                                                             sx={{
//                                                                 color: theme.palette.background.greenColor,
//                                                             }}
//                                                         />
//                                                     </Box>
//                                                     <Box>
//                                                         <Button onClick={() => disconnect()}>Disconnect </Button>
//                                                     </Box>
//                                                 </Box>
//                                             </DialogTitle>
//                                         )}
//                                     </React.Fragment>
//                                 )}
//                             </AnimatePresence>
//                         </Box>
//                     </Grid>
//                 </Grid>
//             </DialogContent>
//         </Dialog>
//     );
// }

// export default ConnectionModal;
