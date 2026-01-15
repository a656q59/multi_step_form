

import {  Box, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";



const Template = ({title,subtitle, children})=>{

    return (
        <Grid container >
        <Box  height="79px">
        <Typography  sx={{fontWeight:"800", fontSize:"34px", color:"hsl(213, 96%, 18%)"}}>{title}</Typography>
        <Typography variant="body1" sx={{opacity:".5",color:" hsl(231, 11%, 63%)"}}>{subtitle}</Typography>
       </Box>
       <Box  width="100%" height="364px">
       {children}
       </Box>       
       <Box  width="100%"height="110px">
       </Box>
       </Grid>
    );
}


Template.propTypes ={
    title: PropTypes.string.isRequired,
    subtitle:PropTypes.string.isRequired,
    children:PropTypes.node.isRequired,
}


export default Template;