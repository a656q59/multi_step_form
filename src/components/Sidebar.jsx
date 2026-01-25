import { Box, Button, createTheme, Grid, Stack, ThemeProvider } from "@mui/material";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
// import {bg-sidebar-desktop as Picture} from "../assets/images/bg-sidebar-desktop.svg";
import asd from '../assets/images/bg-sidebar-desktop.svg';
import bgimagemobile from '../assets/images/bg-sidebar-mobile.svg';




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
  "/ack": 4,
};

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const active = stepMap[location.pathname] ?? 0;

  const handleNextButtonClick = () => {

    console.log(location.pathname, stepMap[location.pathname])

    if (location.pathname === "/") {
      navigate("/plan");
    }
    else if (location.pathname === "/plan")
      navigate("/addons");
    else if (location.pathname === "/addons")
      navigate("/finisher");
    else if (location.pathname === "/finisher")
      navigate("/ack");

    else navigate("/");
  }

  return (

    <ThemeProvider theme={theme}>

      <Grid container


        width="50%"
        height="70%"
        padding={{ xs: "0px", lg: "5px" }}
        sx={{
          zIndex: 1, backgroundColor: "#fff",
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "column", lg: "row" },
          position: "relative"
        }}>

        {/* sidebar section */}


        <Grid item
          size={{ xs: 12, lg: 3.5 }}
          height={{ xs: "200px", lg: "100%" }}
          sx={{

            borderRadius: "10px", overflow: "hidden", position: 'relative',
            gridArea: { xs: "1 / 1", md: "auto" },
          }}  >

          {window.innerWidth > 1200 ? <img
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
          /> :
            <img
              src={bgimagemobile}
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


          }

          <Stack

            direction={{ xs: "row", lg: "column" }}
            width="100%"
            height="100%"
            display={{ xs: "flex", lg: "block" }}
            alignItems={{ xs: "start", lg: "start" }}
            justifyContent={{ xs: "center", lg: "start" }}
            padding={2}
            gap={2}
            sx={{ overflow: 'hidden' }} // Make it a positioning context
          >
            {/* Background Image */}


            {/* Foreground content */}
            <Link to="/" style={{ zIndex: 1, color: 'white', padding: '8px', textDecoration: "none" }}>
              <Stack direction="row" sx={{ alignItems: "center", justifyContent: "start" }}>
                <Box marginRight={2}
                  sx={{
                    padding: "5px 14px",
                    borderRadius: "50%",
                    border: "1px solid white",
                    backgroundColor: active === 0
                      ? "hsl(206, 94%, 87%)"  // clicked color
                      : "transparent", // default
                    color: active === 0 ? "#000" : "#fff",
                    fontWeight: "650"
                  }}>1</Box>
                {window.innerWidth > 1200 && <Stack direction="column">
                  <Box >STEP 1</Box>
                  <Box sx={{ fontWeight: "600" }}>YOUR INFO</Box>
                </Stack>}
              </Stack>
            </Link>
            <Link to="/plan" style={{ zIndex: 1, color: 'white', padding: '8px', textDecoration: "none" }}>
              <Stack direction="row" sx={{ alignItems: "center", justifyContent: "start" }}>
                <Box marginRight={2} sx={{
                  padding: "5px 14px",
                  border: "1px solid white", borderRadius: "50%",
                  backgroundColor: active === 1
                    ? "hsl(206, 94%, 87%)"  // clicked color
                    : "transparent", // default
                  color: active === 1 ? "#000" : "#fff",
                  fontWeight: "600"
                }}> 2</Box>
                {window.innerWidth > 1200 && <Stack direction="column">
                  <Box>STEP 2</Box>
                  <Box sx={{ fontWeight: "600" }}>SELECT PLAN </Box>
                </Stack>}
              </Stack>
            </Link>
            <Link to="/addons"

              style={{ zIndex: 1, color: 'white', padding: '8px', textDecoration: "none" }}>
              <Stack direction="row" sx={{ alignItems: "center", justifyContent: "start" }}>
                <Box marginRight={2} sx={{
                  padding: "5px 14px", border: "1px solid white", borderRadius: "50%",
                  backgroundColor: active === 2
                    ? "hsl(206, 94%, 87%)"  // clicked color
                    : "transparent", // default
                  color: active === 2 ? "#000" : "#fff",
                  fontWeight: "600"
                }}>3</Box>
                {window.innerWidth > 1200 && <Stack direction="column">   <Box>STEP 3</Box> <Box sx={{ fontWeight: "600" }}>ADD-ONS</Box></Stack>
                }
              </Stack>
            </Link>
            <Link to="/finisher"

              style={{ zIndex: 1, color: 'white', padding: '8px', textDecoration: "none" }}>
              <Stack direction="row" sx={{ alignItems: "center", justifyContent: "start" }}>
                <Box marginRight={2} sx={{
                  padding: "5px 14px", border: "1px solid white", borderRadius: "50%",
                  backgroundColor: active === 3
                    ? "hsl(206, 94%, 87%)"  // clicked color
                    : "transparent", // default
                  color: active === 3 ? "#000" : "#fff", fontWeight: "600"
                }}>4</Box>
                {window.innerWidth > 1200 && <Stack direction="column">   <Box>STEP 4</Box> <Box sx={{ fontWeight: "600" }}>SUMMARY</Box></Stack>}
              </Stack>
            </Link>
          </Stack>

        </Grid>


        {/* Outlet section */}

        <Grid item
          size={{ xs: 12, lg: 8 }}
          sx={{

            position: "relative",
            width: "100%",
            height: { xs: "70%", lg: "100%" }

          }}
          backgroundColor={{ xs: "hsl(218, 100%, 97%)", lg: "white" }}
          padding={{ xs: "30px", lg: "45px 20px 30px 50px" }}
        >
          <Box sx={{
            position: { xs: "absolute", sm: "absolute", md: "relative" },
            top: { sm: -120, lg: 0 },
            left: { sm: 40, md: 0, lg: 0 },
            right: { sm: 40, md: 40, lg: 0 },
            backgroundColor: "#fff",
            borderRadius: "12px",
            overflow: "hidden",
            padding: { xs: "30px", lg: "0px" }


          }}>
            <Outlet
              sx={{

              }} />
          </Box>
        </Grid>

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            display: { xs: "flex", lg: "none" },
            justifyContent: location.pathname === "/" ? "end" : "space-around",
            width: "100%",
            padding: "10px 0px",
            height: "50px",
            backgroundColor: "#fff"
          }}>

          {
            location.pathname !== '/' &&
            <Button
              onClick={() => navigate("/")}
              sx={{
                color: "hsl(231, 11%, 63%)",
                fontWeight: 800,
                "&:hover": {
                  color: "hsl(213, 96%, 18%)",
                  backgroundColor: "#fff",
                },
              }}
            >
              Go Back
            </Button>
          }

          <Button
            variant="contained"
            // disabled={!selectedItem}
            onClick={handleNextButtonClick
            }
            sx={{
              px: 3,
              backgroundColor: "hsl(213, 96%, 18%)",
              marginRight: location.pathname === "/" ? "81px" : "0px",
              "&:hover": {
                backgroundColor: "hsl(214, 86.7%, 32.5%)",
              },
            }}
          >
            Next Step
          </Button>

        </Box>

      </Grid>
    </ThemeProvider>
  )
}



export default Sidebar;



