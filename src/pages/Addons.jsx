import { Box, Button } from "@mui/material";
import CustomCheckbox from "../components/CustomCheckbox";
import Template from "../components/Template";
import { useNavigate } from "react-router-dom";

const Addons = ({ plan, addons, handleToggle }) => {


  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/finisher")
  }


  return (
    <Template
      title="Pick add-ons"
      subtitle="Add-ons help enhance your gaming experience."
    >
      <CustomCheckbox
        title="Online Service"
        subTitle="Access to multiplayer games"
        price={plan ? "+$10/yr" : "+$1/mo"}
        ppts={{ marginTop: "25px" }}
        checked={addons.onlineService}
        onChange={handleToggle("onlineService")}
      />

      <CustomCheckbox
        title="Larger Storage"
        subTitle="Extra 1 TB of cloud save"
        price={plan ? "+$20/yr" : "+$2/mo"}
        ppts={{ marginTop: "25px" }}
        checked={addons.largerStorage}
        onChange={handleToggle("largerStorage")}
      />

      <CustomCheckbox
        title="Customizable Profile"
        subTitle="Custom theme on your profile"
        price={plan ? "+$20/yr" : "+$2/mo"}
        ppts={{ marginTop: "25px" }}
        checked={addons.customizableProfile}
        onChange={handleToggle("customizableProfile")}
      />
      {/* ------------------------------navigation buttons------------------------------------- */}

      <Box mt={5} display={{ xs: "none", lg: "flex" }} sx={{ justifyContent: "space-between" }}>
        <Button sx={{ color: 'hsl(231, 11%, 63%)', fontWeight: "800" }} onClick={() => navigate("/plan")}>Go Back</Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{ padding: "7px 20px", backgroundColor: "hsl(213, 96%, 18%)" }}>Next Step</Button>
      </Box>



    </Template>
  );
};

export default Addons;