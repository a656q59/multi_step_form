import { Box, Grid } from "@mui/material";
import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import PersonalInfo from "./pages/PersonalInfo";
import PlanSelection from "./pages/PlanSelection";
import Addons from "./pages/Addons";
import Finisher from "./pages/Finisher";
import Thankyou from "./pages/Thankyou";

function App() {
  const [plan, setPlan] = useState(false);
  const [selectedItem, setSelectedItem] = useState("arcade");
  const [selectedPrice, setSelectedPrice] = useState("9/mo");

  const [addons, setAddons] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });

  const handleCardClick = (plan, price) => {
    setSelectedItem(plan);
    setSelectedPrice(price);
  }
  const handleToggle = (key) => (_, checked) =>
    setAddons((prev) => ({ ...prev, [key]: checked }));

  const handlePlanSelection = () => setPlan((p) => !p);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Sidebar />}>
        <Route index element={<PersonalInfo />} />

        <Route
          path="plan"
          element={
            <PlanSelection
              plan={plan}
              selectedItem={selectedItem}
              handleCardClick={handleCardClick}
              handleClick={handlePlanSelection}
            />
          }
        />

        <Route
          path="addons"
          element={
            <Addons
              plan={plan}
              addons={addons}
              handleToggle={handleToggle}
            />
          }
        />

        <Route
          path="finisher"
          element={
            <Finisher
              plan={plan}
              addons={addons}
              selectedItem={selectedItem}
              selectedPrice={selectedPrice}
            />
          }
        />

        <Route path="ack" element={<Thankyou />} />
      </Route>
    )
  );

  return (
    <>

      <Grid
        container
        height="100vh"
        justifyContent="center"
        alignItems="center"
        position="relative"
        bgcolor="#00eaff1c"
        display="flex"
        flexDirection="column"
      >
        <RouterProvider router={router} />

        <Box sx={{ postion: "absolute", border: 0, start: 0, }}>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Deepu</a>.
        </Box>
      </Grid>

    </>
  );
}

export default App;
