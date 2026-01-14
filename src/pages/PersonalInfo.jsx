import {  Box, Button, Grid, Typography } from "@mui/material";
import CustomTextField from "../components/CustomTextField";
import Template from "../components/Template";
import { useState } from "react";




const PersonalInfo = ()=>{

    const [value,setValue] = useState('');
    const [error,setError] = useState('');

    const handleChange =(e)=>{
        setValue(e.target.value)
    }


    return (
    //    <Grid container border="2px solid green">
    //     <Box border="2px solid red">
    //     <Typography  sx={{fontWeight:"800", fontSize:"34px"}}>Personal info</Typography>
    //    <Typography variant="subtitle1" sx={{opacity:".5", fontWeight:"500"}}>Please provide your name, email address, and phone number.</Typography>
    //    </Box>
    //    <Box border="2px solid red" width="100%">
    //    <CustomTextField label="Name" placeholder="e.g. Stephen King"  ppts={{marginTop:"40px"}}/>
    //    <CustomTextField label="Email Address" placeholder="e.g. stephenking@lorem.com"/>
    //    <CustomTextField label="Phone Number" placeholder="e.g. +1 234 567 890"/>
    //    </Box>
       
    //    <Box border="2px solid red" width="100%"height="110px"></Box>
    //    </Grid>

    <Template 
    title="Personal info" 
    subtitle="Please provide your name, email address, and phone number."
    >
        <CustomTextField label="Name" placeholder="e.g. Stephen King"  ppts={{marginTop:"40px"}} value={value} handleChange={handleChange} error = {error}/>
        <CustomTextField label="Email Address" placeholder="e.g. stephenking@lorem.com"/>
        <CustomTextField label="Phone Number" placeholder="e.g. +1 234 567 890"/>



        <Box  mt={8.7} sx={{display:"flex", justifyContent:"end"}}>
           
            <Button variant="contained" sx={{
                "&:hover": {
                    backgroundColor: "hsl(214, 86.70%, 32.50%)"
                },
                padding:"7px 20px", 
                backgroundColor:"hsl(213, 96%, 18%)"}}>Next Step</Button>
    </Box>



    </Template>
    )

}


export default PersonalInfo;