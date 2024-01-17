import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import './App.css'
import Header from './layout/Header'
import Sidebar from './layout/Sidebar'
import Footer from './layout/Footer'


function App() {
  const [count, setCount] = useState(0)



  return (
    <>

      <div className='app_navbar'>
        <Header />
      </div >
      <div className='app_body'>
        <div className='app_sidebar'><Sidebar  /></div>
        <div className='app_page'><Outlet /></div>
      </div>
      <div className='app_footer'><Footer /></div>
    </>
  )
}

export default App
