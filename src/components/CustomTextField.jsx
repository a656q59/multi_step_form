import { Box ,TextField} from "@mui/material"
import PropTypes from "prop-types";



const CustomTextField=({label,value, placeholder,ppts,handleChange, error})=>{


    return (

        <Box sx={{display:"flex",flexDirection:"column",  alignItems:"center",...ppts}} gap={1} margin="20px 0px">
            <label style={{width:"100%", fontWeight:"400"}}>{label}</label>
            <Box  width="100%">
            <TextField
            error = {error}
  required
  value={value}
  placeholder={placeholder}   // use placeholder, not defaultValue
  onChange={handleChange}     // if controlled input
  sx={{
    width: "100%",
    borderRadius: "50px",

    // Placeholder color
    '& .MuiInputBase-input::placeholder': {
      color: 'hsl(231, 11%, 63%)',
      opacity: 1, // ensures full opacity on placeholder color
    },

    // User input text color
    '& .MuiInputBase-input': {
      color: 'hsl(213, 96%, 18%)',
    },
  }}
/>
            </Box>
        </Box>
    )
}

TextField.propTypes ={
    label: PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    placeholder:PropTypes.string,
    ppts:PropTypes.object
}

export default CustomTextField;