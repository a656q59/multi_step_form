import Template from "../components/Template";
import { Link, useNavigate } from "react-router-dom";

import { Box, Button } from "@mui/material";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';


const Finisher = ({ plan, addons, selectedItem, selectedPrice }) => {
    const navigate = useNavigate();
    const monthlyAddOns = [
        {
            "onlineService": 1,
        },
        {
            "largerStorage": 2
        },
        {
            "customizableProfile": 2
        }
    ]
    const yearlyAddOns = [
        {
            "onlineService": 10,
        },
        {
            "largerStorage": 20
        },
        {
            "customizableProfile": 20
        }
    ]

    const CalculatePrice = () => {
        const planValue = parseInt(selectedPrice.split('/')[0])
        const addOnsInfo = plan ? yearlyAddOns.map((item, index) => Object.values(addons)[index] ? item : 0) : monthlyAddOns.map((item, index) => Object.values(addons)[index] ? item : 0)
        const total = addOnsInfo.reduce((sum, obj) => {
            const value = Object.values(obj)[0];
            return sum + (Number(value) || 0);
        }, 0);
        console.log(total + planValue);
        const totalValue = (total + planValue);
        return totalValue

    }



    console.log(plan, addons, selectedItem, selectedPrice);
    return (
        <Template
            title="Finishing up"
            subtitle="Double-check everything looks OK before confirming."
        >

            <Box sx={{ backgroundColor: "hsl(218, 100%, 97%)", borderRadius: "10px" }} mt={6} p={2}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} p={2}>
                    <Box>
                        <Typography sx={{ fontWeight: "600" }} color="hsl(213, 96%, 18%)">
                            {selectedItem}
                            {plan ? "(Yearly)" : "(Monthly)"}
                        </Typography>

                        <Link to="/plan" sx={{
                            "&:hover, &:focus-visible": {

                                textDecorationColor: 'hsl(243, 100%, 62%)',
                            }

                        }}>
                            <Box
                            >
                                <Typography sx={{
                                    color: "hsl(231, 11%, 63%)",
                                    textDecoration: "underline ",
                                    "&:hover, &:focus-visible": {
                                        color: 'hsl(243, 100%, 62%)',
                                        fontWeight: "bold",
                                        textDecorationColor: 'hsl(243, 100%, 62%)',
                                    }
                                }}
                                >Change</Typography>
                            </Box>
                        </Link>

                    </Box>
                    <Typography sx={{ fontWeight: "600" }} color="hsl(213, 96%, 18%)">
                        ${selectedPrice}
                    </Typography>
                </Box>
                <Divider />

                {
                    addons.onlineService && <Box mt={2} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} px={2} py={.5}>
                        <Box>
                            <Typography sx={{ color: 'hsl(231, 11%, 63%)' }}>
                                Online Service
                            </Typography>

                        </Box>
                        <Typography color="hsl(213, 96%, 18%)">
                            +{plan ? "$10/yr" : "$1/mo"}
                        </Typography>
                    </Box>
                }

                {addons.largerStorage
                    && <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} px={2} py={.5}>
                        <Box>
                            <Typography sx={{ color: 'hsl(231, 11%, 63%)' }}>
                                Larger storage
                            </Typography>

                        </Box>
                        <Typography color="hsl(213, 96%, 18%)">
                            +{plan ? "$20/yr" : "$2/mo"}
                        </Typography>
                    </Box>}

                {addons.customizableProfile
                    && <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} px={2} py={.5}>
                        <Box>
                            <Typography sx={{ color: 'hsl(231, 11%, 63%)' }}>
                                Customizable Profile
                            </Typography>

                        </Box>
                        <Typography color="hsl(213, 96%, 18%)">
                            +{plan ? "$20/yr" : "$2/mo"}
                        </Typography>
                    </Box>}




            </Box>


            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", }} px={4} py={1.6}>
                <Box>
                    <Typography sx={{ color: 'hsl(231, 11%, 63%)' }}>
                        Total{plan ? "(per year)" : "(per month)"}
                    </Typography>

                </Box>
                <Typography sx={{ color: ' hsl(243, 100%, 62%)', fontWeight: "900", fontSize: "20px" }}>
                    {"$"}{CalculatePrice()}{plan ? "/yr" : "/mo"}
                </Typography>
            </Box>

            {/* ------------------------------navigation buttons------------------------------------- */}

            <Box mt={7} display={{ xs: "none", lg: "flex" }} sx={{ justifyContent: "space-between" }}>
                <Button
                    onClick={() => navigate("/addons")}
                    sx={{ color: 'hsl(231, 11%, 63%)', fontWeight: "800" }}>Go Back</Button>
                <Button
                    onClick={() => navigate("/ack")}
                    variant="contained"
                    sx={{ padding: "7px 20px", backgroundColor: 'hsl(243, 100%, 62%)' }}>Confirm</Button>
            </Box>
        </Template>
    )

}


export default Finisher;