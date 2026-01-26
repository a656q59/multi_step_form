

import { Box, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";



const Template = ({ title, subtitle, children }) => {

    return (
        <Grid container sx={{ padding: { xs: "5px", lg: "0px" }, }} >
            <Box  >
                <Typography sx={{ fontWeight: "800", fontSize: { xs: "20px", lg: "34px" }, color: "hsl(213, 96%, 18%)" }}>{title}</Typography>
                <Typography variant="h5" sx={{ opacity: ".5", fontSize: { xs: "12px", lg: "17px" }, color: " hsl(231, 11%, 63%)" }}>{subtitle}</Typography>
            </Box>
            <Box width="100%" display="flex" flexDirection="column" gap="1">
                {children}
            </Box>

        </Grid>
    );
}


Template.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}


export default Template;