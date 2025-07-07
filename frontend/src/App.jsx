import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './pages/LandingPage'
import Auth from './pages/Auth'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoard from './pages/DashBoard'
import EditForm from './pages/EditForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    // <>
    // <Router>
    //   {/* <LandingPage/> */}
    //   <Routes>
    //   <Route path="/" element={<LandingPage />} />
    //     <Route path="/auth" element={<Auth />} />
    //     </Routes>
    //   </Router>

      
    // </>
    <>
    {/* <DashBoard/> */}
    <EditForm/>
    </>
   
  )
}

export default App
