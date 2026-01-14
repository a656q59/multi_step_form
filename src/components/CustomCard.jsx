import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';



const CustomCard = ({title,src,price, addText='',onClick,selected}) => {

    

  return (
    <Card
    tabIndex={0}  // makes the card focusable
    onClick={onClick}
    // data-active={ }
    sx={{
      width: 130,
      height: "170px",
      padding: "2px 10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      border: selected?"1px solid purple":"1px solid  hsl(231, 11%, 63%)", // default border
      backgroundColor:selected?"hsl(218, 100%, 97%)":"white",
      borderRadius: "8px",
      outline: "none", // prevent default focus ring   
      cursor: "pointer"
    }}
  >
    <img src={src} height="40px" width="40" />
    <Box sx={{ marginTop: "10px" }}>
      <Typography fontWeight="700" sx={{color:"hsl(213, 96%, 18%)"}}  >{title}</Typography>
      <Typography sx={{color:"hsl(231, 11%, 63%)"}}>${price}</Typography>
      {addText && <Typography color="hsl(213, 96%, 18%)">{addText}</Typography>}
    </Box>
  </Card>
  )
}

CustomCard.propTypes =
{
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    addText: PropTypes.string,
    price:PropTypes.number.isRequired,    
}

export default CustomCard