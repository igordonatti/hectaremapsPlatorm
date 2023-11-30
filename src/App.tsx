import { Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp/SignUp"
import SignIn from "./pages/SignIn/SignIn"
import Recovery from "./pages/Recovery/Recovery"
import RecoveryCode from "./pages/RecoveryCode/RecoveryCode"
import RecoveryPassword from "./pages/Recovery Password/RecoveryPassword"
import FirstPage from "./pages/FirstPage/FirstPage"
import Services from "./pages/ServicesPage/Services"
import Projects from "./pages/Projects/Projects"
import { RequireAuth } from "./contexts/Auth/RequireAuth"
import NewService from "./pages/New Service/NewService"

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
      <Route path="/Home" element={ <RequireAuth><FirstPage /></RequireAuth> } />
      <Route path="/Services" element={ <RequireAuth><Services /></RequireAuth> } />
      <Route path="/Projetos" element={ <RequireAuth><Projects /></RequireAuth> } />
      <Route path="/NewService" element={ <RequireAuth><NewService /></RequireAuth> } />
    </Routes>
   </div>
  )
}

export default App
