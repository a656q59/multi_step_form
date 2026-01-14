import Switch from '@mui/material/Switch';


import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    customBlue: {
      main: "hsl(213, 96%, 18%)",   // your custom color hex here
      
    },
  },
});




function CustomSwitch({checked, onChange,...rest}) {
  return (
    <ThemeProvider theme={theme}>
    <Switch
    checked={checked}
    onChange={onChange}
    color="customBlue"
    {...rest}
      sx={{
         
        '& .MuiSwitch-thumb': {
          backgroundColor: '#fff',
          width:"5px",
          height:"5px",
          border:"2px solid #fff",
          marginTop:"6px",
          marginLeft:"5px" 
          
        },
        '& .MuiSwitch-track': {
          backgroundColor: 'hsl(213, 96%, 18%)', 
          height:"15px",
          opacity: 1,
        },
        '&.Mui-checked .MuiSwitch-track': {
          backgroundColor: 'hsl(213, 96%, 18%) !important', // force with !important
          opacity: 1,
        },
        
      }}
    />

</ThemeProvider>

  );
}

export default CustomSwitch;