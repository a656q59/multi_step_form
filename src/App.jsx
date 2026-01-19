
import { Box, Grid, Stack } from '@mui/material'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Addons from './pages/Addons'
import Finisher from './pages/Finisher'
import PersonalInfo from './pages/PersonalInfo'
import PlanSelection from './pages/PlanSelection'
import { useState } from 'react'
import Thankyou from './pages/Thankyou'
// import './App.css'

function App() {
  const [plan,setPlan] = useState(false);
  // const [planType,setPlanType] = useState("arcade");
  const [addons, setAddons] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });

  const [selectedItem, setSelectedItem] = useState(null);
    const handleCardClick = (e) => {
        setSelectedItem(e);
    }



  const handleToggle = (key) => (_, isChecked) =>{
    return (setAddons((s) => ({ ...s, [key]: isChecked })))
  }

  const handlePlanSelection = ()=>{
    setPlan(!plan);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Sidebar />}>
        <Route index element={<PersonalInfo />} />
        <Route path="plan" element={<PlanSelection plan={plan} 
        selectedItem ={selectedItem}
        handleCardClick={handleCardClick}
        handleClick={handlePlanSelection}/>} />
        <Route 
        path="addons" 
        element={
        <Addons plan={plan} addons={addons} handleToggle = {(e)=>handleToggle(e)}/>
      } 
        />
        <Route path="finisher" element={<Finisher />} />
         <Route path="ack" element={<Thankyou />} />

      </Route>
    )
  )



  return (
  <Grid container width="100%" border="2px dashed black" height="100vh" alignItems="center" justifyContent="center" backgroundColor="#00eaff1c"> 
   <RouterProvider router={router}/>
  </Grid>



  )
}

export default App
