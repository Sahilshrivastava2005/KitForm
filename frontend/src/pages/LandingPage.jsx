import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import DashBoard from './DashBoard'
import HowItWorks from '../components/HowItWorks'

export default function LandingPage({user,setUser}) {
 
  return (
    <div>
        <Header user={user} setUser={setUser}/>
        <Hero/>
        <HowItWorks/>

    </div>
  )
}
