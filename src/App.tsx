import { Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp/SignUp"
import SignIn from "./pages/SignIn/SignIn"
import Recovery from "./pages/Recovery/Recovery"
import RecoveryCode from "./pages/RecoveryCode/RecoveryCode"
import RecoveryPassword from "./pages/Recovery Password/RecoveryPassword"
import FirstPage from "./pages/FirstPage/FirstPage"
import Services from "./pages/ServicesPage/Services"
import Projects from "./pages/Projects/Projects"
// import { RequireAuth } from "./contexts/Auth/RequireAuth"
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
   <div className="App">
    <Routes>
      <Route path="/" element={ <App /> } />
      <Route path="/SignUp" element={ <SignUp /> } />
      <Route path="/SignIn" element={ <SignIn /> } />
      <Route path="/Recovery" element={ <Recovery /> } />
      <Route path="/RecoveryCode" element={ <RecoveryCode /> } />
      <Route path="/RecoveryPassword" element={ <RecoveryPassword /> } />
      <Route path="/Home" element={ <FirstPage /> } />
      <Route path="/Projects" element={ <Projects /> } />
      <Route path="/:flightId/NewService" element={ <NewService /> } />
      <Route path="/Payment" element= { <Payment /> } />
      <Route path="/NewProject" element = { <NewProject /> } />
      <Route path="/Admin" element = { <Admin /> } />
      <Route path="/Users" element = { <Users /> } />
      <Route path="/projects/:projectId/flights" element = { <Flights /> }/>
      <Route path="/flights/:flightId/services" element = { <Services /> }/>
      <Route path="/flights/:flightId/images" element = { <Images /> }/>
      <Route path="/flights/:flightId/images/newImage" element = { <NewImage /> } />
    </Routes>
   </div>
  )
}

export default App
