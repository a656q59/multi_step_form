import { Box, Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Template from "../components/Template";
import CustomCard from "../components/CustomCard";
import CustomSwitch from "../components/CustomSwitch";

import iconarcade from "../assets/images/icon-arcade.svg";
import iconadv from "../assets/images/icon-advanced.svg";
import iconpro from "../assets/images/icon-pro.svg";

const plansData = [
  {
    id: "arcade",
    title: "Arcade",
    src: iconarcade,
    monthlyPrice: "9/mo",
    yearlyPrice: "90/yr",
    addText: "2 months free",
  },
  {
    id: "advanced",
    title: "Advanced",
    src: iconadv,
    monthlyPrice: "12/mo",
    yearlyPrice: "120/yr",
    addText: "2 months free",
  },
  {
    id: "pro",
    title: "Pro",
    src: iconpro,
    monthlyPrice: "15/mo",
    yearlyPrice: "150/yr",
    addText: "2 months free",
  },
];

const PlanSelection = ({ plan, selectedItem, handleClick, handleCardClick }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!selectedItem) return;
    navigate("/addons");
  };

  return (
    <Template
      title="Select your plan"
      subtitle="You have the option of monthly or yearly billing."
    >
      <Stack direction="row" gap={2} justifyContent="center" mt={4}>
        {plansData.map((item) => (
          <CustomCard
            key={item.id}
            selected={selectedItem === item.id}
            src={item.src}
            title={item.title}
            price={plan ? item.yearlyPrice : item.monthlyPrice}
            addText={plan ? item.addText : ""}
            onClick={() => handleCardClick(item.id,plan ? item.yearlyPrice : item.monthlyPrice)}
          />
        ))}
      </Stack>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        my={5}
        py={1}
        sx={{
          borderRadius: 2,
          backgroundColor: "hsl(218, 100%, 97%)",
        }}
      >
        <Typography
          fontWeight={800}
          color={plan ? "hsl(231, 11%, 63%)" : "hsl(213, 96%, 18%)"}
        >
          Monthly
        </Typography>

        <CustomSwitch checked={plan} onChange={handleClick} />

        <Typography
          fontWeight={800}
          color={plan ? "hsl(213, 96%, 18%)" : "hsl(231, 11%, 63%)"}
        >
          Yearly
        </Typography>
      </Box>

      <Box mt={13} display="flex" justifyContent="space-between">
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

        <Button
          variant="contained"
          disabled={!selectedItem}
          onClick={handleSubmit}
          sx={{
            px: 3,
            backgroundColor: "hsl(213, 96%, 18%)",
            "&:hover": {
              backgroundColor: "hsl(214, 86.7%, 32.5%)",
            },
          }}
        >
          Next Step
        </Button>
      </Box>
    </Template>
  );
};

export default PlanSelection;
