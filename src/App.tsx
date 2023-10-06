import { Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp/SignUp"
import SignIn from "./pages/SignIn/SignIn"
import Recovery from "./pages/Recovery/Recovery"
import RecoveryCode from "./pages/Recovery Code/RecoveryCode"
import RecoveryPassword from "./pages/Recovery Password/RecoveryPassword"
import FirstPage from "./pages/First Page/FirstPage"
import Services from "./pages/Services Page/Services"

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
      <Route path="/Services" element={ <Services /> } />
    </Routes>
   </div>
  )
}

export default App
