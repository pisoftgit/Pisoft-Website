
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
  </Routes>
    </>
  )
}

export default App
