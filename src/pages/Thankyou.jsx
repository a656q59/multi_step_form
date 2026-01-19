import { Box, Typography } from "@mui/material";
import thankYouIcon from "../assets/images/icon-thank-you.svg";


const Thankyou = () => {

    return (
        <Box sx={{height:"100%", color:"black", display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <img src={thankYouIcon} width="60px" height="60px" alt="thank you" />
            <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 600,mt:4 }}
                >
                    Thank you!
            </Typography>

            <Typography
                variant="subtitle"
                gutterBottom
                sx={{ mx:6, textAlign:"center", color:"hsl(231, 11%, 63%)"}}
                >
                Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
            </Typography>


        </Box>
    )
}
export default Thankyou; 