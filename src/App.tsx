import { Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp/SignUp"
import SignIn from "./pages/SignIn/SignIn"
import Recovery from "./pages/Recovery/Recovery"
import RecoveryCode from "./pages/RecoveryCode/RecoveryCode"
import RecoveryPassword from "./pages/Recovery Password/RecoveryPassword"
import Services from "./pages/ServicesPage/Services"
import Projects from "./pages/Projects/Projects"
import { RequireAuth } from "./contexts/Auth/RequireAuth"
import NewService from "./pages/New Service/NewService"
import Payment from "./pages/Payment/Payment"
import NewProject from "./pages/New Project/NewProject"
import Admin from "./pages/Admin/Admin"
import Users from "./pages/Users/Users"
import { Flights } from "./pages/Flights/Flights"
import { Images } from "./pages/Images/Images"
import { NewImage } from "./pages/NewImage/NewImage"

function App() {

  return (
   <div className="App min-h-screen">
    <Routes>
      <Route path="/" element={ <App /> } />
      <Route path="/SignUp" element={ <SignUp /> } />
      <Route path="/SignIn" element={ <SignIn /> } />
      <Route path="/Recovery" element={ <Recovery /> } />
      <Route path="/RecoveryCode" element={ <RecoveryCode /> } />
      <Route path="/RecoveryPassword" element={ <RecoveryPassword /> } />
      <Route path="/Projects" element={ <RequireAuth><Projects /></RequireAuth> } />
      <Route path="/:flightId/NewService" element={ <RequireAuth><NewService /></RequireAuth> } />
      <Route path="/Payment" element= { <RequireAuth><Payment /></RequireAuth> } />
      <Route path="/NewProject" element = { <RequireAuth><NewProject /></RequireAuth> } />
      <Route path="/Admin" element = { <RequireAuth><Admin /></RequireAuth> } />
      <Route path="/Users" element = { <RequireAuth><Users /></RequireAuth> } />
      <Route path="/projects/:projectId/flights" element = { <RequireAuth><Flights /></RequireAuth> }/>
      <Route path="/flights/:flightId/services" element = { <RequireAuth><Services /></RequireAuth> }/>
      
      <Route path="/flights/:flightId/images" element = { <RequireAuth><Images /></RequireAuth> }/>
      <Route path="/flights/:flightId/images/newImage" element = { <RequireAuth><NewImage /></RequireAuth> } />
    </Routes>
   </div>
  )
}

export default App
