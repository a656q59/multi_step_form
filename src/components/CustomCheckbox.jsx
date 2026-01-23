import { Box ,Stack,TextField, Typography} from "@mui/material"
import PropTypes from "prop-types";
import Checkbox from '@mui/material/Checkbox';



const CustomCheckbox=({title,subTitle, price, ppts,checked=false,onChange})=>{


    return (

        <Box
        tabIndex={0}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "94%",
          cursor: "pointer",
          alignItems: "center",
          padding: "18px 15px",
          border: "1px solid hsl(231, 11%, 63%)",
          borderRadius: "8px",
          outline: "none",
          "&:hover, &:focus-visible":{
        borderColor: "purple",
        backgroundColor: "hsl(218, 100%, 99%)",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.12)", 
        transition: "all 0.3s ease-in-out",
      },
          ...(checked ? {
            borderColor: 'hsl(243, 100%, 62%)',
            backgroundColor: "hsl(218, 100%, 97%)"
          } : {}),
          ...ppts
        }}
      >
            <Stack direction="row">
            <Checkbox 
            checked={checked} 
            onChange={onChange}
            sx={{
              color: "hsl(243, 100%, 62%)",
              '&.Mui-checked': {
                color: "hsl(243, 100%, 62%)",
              },
            }}
            />
            <Stack direction="column" marginLeft={2}>
                <Typography  sx={{color:"hsl(213, 96%, 18%)", fontWeight:"600"}}>{title}</Typography>
                <Typography sx={{color:"hsl(231, 11%, 63%)", fontWeight:"300"}}>{subTitle}</Typography>
            </Stack>
            </Stack>
            <Typography sx={{color:"hsl(243, 100%, 62%)"}}>{price}</Typography>
    </Box>
  )
}

CustomCheckbox.propTypes ={
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  price: PropTypes.string,
  ppts: PropTypes.object,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}

export default CustomCheckbox;