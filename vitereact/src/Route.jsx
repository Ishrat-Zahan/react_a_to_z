import React from 'react'
import App from './App'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import About from './pages/About';
import Mobile from './pages/Mobile';

function Index() {
    return (
        <>

            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<App />}>
                        <Route index element={<Dashboard />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="about" element={<About />} />
                        <Route path="mobile" element={<Mobile />} />
                        

                    </Route>
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default Index