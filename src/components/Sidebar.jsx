import { Box, createTheme, Grid, Stack, ThemeProvider } from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";
// import {bg-sidebar-desktop as Picture} from "../assets/images/bg-sidebar-desktop.svg";
import asd from '../assets/images/bg-sidebar-desktop.svg';




const theme = createTheme({
  typography: {
    fontFamily: 'Ubuntu, Arial, sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

const stepMap = {
  "/": 0,
  "/plan": 1,
  "/addons": 2,
  "/finisher": 3,
};

const Sidebar = ()=>{
  const location = useLocation();

  const active = stepMap[location.pathname] ?? 0;

    return (

      <ThemeProvider theme={theme}>

    <Grid container width="50%" height="70%" padding="5px"  sx={{zIndex: 1,backgroundColor:"#fff"}}>

        <Grid item size={{lg:3.5}}sx={{borderRadius:"10px", overflow:"hidden", position: 'relative',}}  >
        <img
    src={asd}
    alt="Background"
    style={{
      position: 'absolute',
     
      width: '100%',
      height: '100%',
      objectFit: 'cover', // Scale the image like a background
      zIndex: -1,
      opacity: 1, // Optional: adjust if you want a translucent effect
    }}
  />
<Stack
  direction="column"
  width="100%"
  height="100%"
  padding={2}
  gap={2}
  sx={{  overflow: 'hidden' }} // Make it a positioning context
>
  {/* Background Image */}
 

  {/* Foreground content */}
  <Link to="/" style={{ zIndex: 1, color: 'white', padding: '8px' , textDecoration:"none"}}> 
    <Stack direction="row" sx={{ alignItems:"center", justifyContent:"start"}}>
      <Box marginRight={2} 
      sx={{padding:"5px 14px",  
        borderRadius:"50%",
         border:"1px solid white", 
         backgroundColor: active===0
         ? "hsl(206, 94%, 87%)"  // clicked color
         : "transparent", // default
         color:active===0?"#000":"#fff", 
         fontWeight:"650"}}>1</Box>
      <Stack direction="column">   
        <Box >STEP 1</Box> 
        <Box sx={{fontWeight:"600"}}>YOUR INFO</Box>
      </Stack>
    </Stack>   
  </Link>
  <Link to="/plan" style={{ zIndex: 1, color: 'white', padding: '8px', textDecoration:"none" }}>
    <Stack direction="row" sx={{ alignItems:"center", justifyContent:"start"}}>
      <Box   marginRight={2} sx={{padding:"5px 14px",
         border:"1px solid white", borderRadius:"50%",
         backgroundColor: active===1
         ? "hsl(206, 94%, 87%)"  // clicked color
         : "transparent", // default
         color:active===1?"#000":"#fff", 
          fontWeight:"600"}}> 2</Box>
      <Stack direction="column">   
        <Box>STEP 2</Box> 
        <Box sx={{fontWeight:"600"}}>SELECT PLAN </Box>
      </Stack>
    </Stack>   
  </Link>
  <Link to="/addons"
 
   style={{ zIndex: 1, color: 'white', padding: '8px', textDecoration:"none" }}>
    <Stack direction="row" sx={{ alignItems:"center", justifyContent:"start"}}>
      <Box marginRight={2} sx={{padding:"5px 14px", border:"1px solid white", borderRadius:"50%", 
      backgroundColor: active===2
         ? "hsl(206, 94%, 87%)"  // clicked color
         : "transparent", // default
         color:active===2?"#000":"#fff", 
          fontWeight:"600"}}>3</Box>
      <Stack direction="column">   <Box>STEP 3</Box> <Box sx={{fontWeight:"600"}}>ADD-ONS</Box></Stack>
      </Stack>   
    </Link>
  <Link to="/finisher"
   
   style={{ zIndex: 1, color: 'white', padding: '8px' , textDecoration:"none"}}>
      <Stack direction="row" sx={{ alignItems:"center", justifyContent:"start"}}>
        <Box marginRight={2} sx={{padding:"5px 14px", border:"1px solid white", borderRadius:"50%",   
        backgroundColor: active===3
         ? "hsl(206, 94%, 87%)"  // clicked color
         : "transparent", // default
         color:active===3?"#000":"#fff",  fontWeight:"600"}}>4</Box>
        <Stack direction="column">   <Box>STEP 4</Box> <Box sx={{fontWeight:"600"}}>SUMMARY</Box></Stack>
      </Stack>   
  </Link>
</Stack>

        </Grid>
        <Grid item size={{lg:8}}backgroundColor="white"  padding="45px 20px 30px 50px" ><Outlet/></Grid>



    </Grid>
    </ThemeProvider>
    )
}



export default Sidebar;



