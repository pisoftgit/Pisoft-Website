
import React from "react"

import { Routes,Route } from "react-router-dom"

import Firstt from "./components/Firstt"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ERPEducation from "./pages/ERPEducation"
import ERPFinance from "./pages/ERPFinance"
import ERPAutomobile from "./pages/ERPAutomobile"
import ERPMedHealth from "./pages/ERPMed&Health"
import ERPTourTravels from "./pages/ERPTourTravels"
import Services from "./pages/ERPServices"
import Internship from "./pages/internship"
import { SidebarDemo } from "./components/Intern/ChoosenTechnology"
import LoginUser from "./pages/InternshipEnquiry"
import LoginRegisterUser from "./pages/Login&Register"
import RegisterUser from "./pages/Register"


function App() {
 

  return (
    <>
  <Routes>
    <Route path="/" Component={Firstt} />
    <Route path="/about" Component={About} />
     <Route path="/contact" Component={Contact} />
     <Route path="/IntershipProgram" Component={Internship} />
     <Route path="/ERPservices/Education" Component={ERPEducation}/>
     <Route path="/ERPservices/Finance" Component={ERPFinance} />
     <Route path="/ERPservices/AutoMobile" Component={ERPAutomobile}/>
     <Route path="/ERPservices/Medical&Healthcare" Component={ERPMedHealth}/>
     <Route path="/ERPservices/TourTravels" Component={ERPTourTravels}/>
     <Route path="/ERPservices/Services" Component={Services}/>
     <Route path="/Alltechnologies" Component={SidebarDemo}/>
     <Route path="/SignUpUser" Component={LoginUser}/>
     <Route path="/LoginRegisterUser" Component={LoginRegisterUser}/>
     <Route path="/RegisterUser" Component={RegisterUser}/>

  </Routes>
    </>
  )
}

export default App
