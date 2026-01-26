import { Box, TextField } from "@mui/material"
import PropTypes from "prop-types";



const CustomTextField = ({ label, value, placeholder, ppts, handleChange, error }) => {


  return (

    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", ...ppts }} gap={1} margin="20px 0px">
      <label style={{ width: "100%", fontWeight: "400", color: "hsl(213, 96%, 18%)" }}>{label}</label>
      <Box width="100%">
        {error && (
          <div style={{
            display: "flex", justifyContent: "end",
            color: "hsl(354, 84%, 57%)",
            fontWeight: 600,
            fontSize: "0.8rem",
          }}>

            This field is required

          </div>
        )}
        <TextField
          error={error}
          required
          value={value}
          placeholder={placeholder}   // use placeholder, not defaultValue
          onChange={handleChange}
          helperText={null}
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

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  ppts: PropTypes.object
}

export default CustomTextField;