import { Box, Grid, SliderTrack, Stack, Switch, Typography, Button } from "@mui/material";
import Template from "../components/Template";
import CustomTextField from "../components/CustomTextField";
import CustomCard from "../components/CustomCard";
import iconarcade from '../assets/images/icon-arcade.svg';
import iconadv from '../assets/images/icon-advanced.svg';
import iconpro from '../assets/images/icon-pro.svg';
import CustomSwitch from "../components/CustomSwitch";
import { useNavigate } from "react-router-dom";


const PlanSelection = ({plan, handleClick, selectedItem,handleCardClick}) => {
    const navigate = useNavigate();

const handleSubmit = ()=>{
    navigate("/addons")
}


    const label = { inputProps: { 'aria-label': 'Switch' } };
    // const [plan,setPlan] = useState(false);
    

    // Define the plans data
    const plansData = [
        {
            id: 'arcade',
            title: 'Arcade',
            src: iconarcade,
            monthlyPrice: '9/mo',
            yearlyPrice: '90/yr',
            addText: '2 months free'
        },
        {
            id: 'advanced',
            title: 'Advanced',
            src: iconadv,
            monthlyPrice: '12/mo',
            yearlyPrice: '120/yr',
            addText: '2 months free'
        },
        {
            id: 'pro',
            title: 'Pro',
            src: iconpro,
            monthlyPrice: '15/mo',
            yearlyPrice: '150/yr',
            addText: '2 months free'
        }
    ];

    return (
        <Template 
            title="Select your plan" 
            subtitle="You have the option of monthly or yearly billing."
        >
            {/* <CustomTextField label="Name" placeholder="e.g. Stephen King"  ppts={{marginTop:"40px"}}/>
            <CustomTextField label="Email Address" placeholder="e.g. stephenking@lorem.com"/>
            <CustomTextField label="Phone Number" placeholder="e.g. +1 234 567 890"/> */}
            
            <Stack direction="row" gap={2} justifyContent="center" marginTop={4}>
                {plansData.map((planItem) => (
                    <CustomCard 
                        key={planItem.id}
                        selected={selectedItem===planItem.id}
                        src={planItem.src} 
                        title={planItem.title} 
                        price={plan ? planItem.yearlyPrice : planItem.monthlyPrice} 
                        addText={plan ? planItem.addText : ''}
                        onClick={() => handleCardClick(planItem.id)}
                    />
                ))}
            </Stack>

            <Box 
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            margin="50px 10px" 
            padding="5px 0px" 
            sx={{
                borderRadius:"10px", 
                backgroundColor:"hsl(218, 100%, 97%)",
                '& .MuiSwitch-thumb': {
            backgroundColor: '#fff !important', // Keep the same color as unchecked
            // opacity: 1,
          },
          '&.Mui-checked': {
            backgroundColor: 'red !important', // Keep the same color as unchecked
            // opacity: 0,
        },
                }}>
                <Typography sx={{ color: plan ? "hsl(231, 11%, 63%)" : "hsl(213, 96%, 18%)", fontWeight:"800" }}>Monthly</Typography>
                <CustomSwitch {...label}  checked={plan} onChange={handleClick}/>
                <Typography sx={{ color: plan ? "hsl(213, 96%, 18%)" : "hsl(231, 11%, 63%)", fontWeight:"800" }}>Yearly</Typography>
            </Box>


            <Box  mt={13.4} sx={{display:"flex", justifyContent:"space-between"}}>
            <Button sx={{ color: 'hsl(231, 11%, 63%)', fontWeight:"800" ,  "&:hover": {
                    color:"hsl(213, 96%, 18%)",
                    backgroundColor:"#fff"
                },}}>Go Back</Button>
            <Button variant="contained" 
            onClick={handleSubmit}
            sx={{
                "&:hover": {
                    backgroundColor: "hsl(214, 86.70%, 32.50%)"
                },
                padding:"7px 20px", 
                backgroundColor:"hsl(213, 96%, 18%)"}}>Next Step</Button>
    </Box>
        </Template>
    )
}

export default PlanSelection;